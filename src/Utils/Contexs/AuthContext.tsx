import React, { useContext, useEffect, useState } from 'react';

//Firebase
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase';
import { User as FirebaseUser } from 'firebase/auth';

// Npm packages
import { useNavigate } from 'react-router-dom';

// Models
import { ISignUp } from '../../Models/ISignUp';
import { errorMsgStartValue } from '../../Models/IErrorMsg';
import { IAuthContex } from '../../Models/IAuthContex';
import { ISignIn } from '../../Models/ISignIn';

// Initiating context
export const AuthContex = React.createContext({} as IAuthContex);

// Exporting the context, to be used wherever
export const useAuth = () => useContext(AuthContex);

export const AuthContexProvider: React.FC = ({ children }) => {
  // Used to redirect users to a spesific route
  const navigate = useNavigate();

  // All useStates
  const [errorMsg, setErrorMsg] = useState(errorMsgStartValue);
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [disabledBtn, setdisabledBtn] = useState(false);
  const [firebaseError, setFirebaseError] = useState(false);
  const [isSignedIn, setisSignedIn] = useState(false);

  // Signing up a user to firebase
  const signUpUser = (props: ISignUp) => {
    createUserWithEmailAndPassword(auth, props.email, props.password)
      .then((user) => {
        setdisabledBtn(true);
        setFirebaseError(false);
        navigate('/');
      })
      .catch((error) => {
        setdisabledBtn(false);
        setFirebaseError(true);
        setErrorMsg({ errorMessage: error.message, errorCode: error.code });
        console.log(error.errorCode);
      });
  };

  // Signin in a user to firebase
  const signInUser = (props: ISignIn) => {
    signInWithEmailAndPassword(auth, props.email, props.password)
      .then((user) => {
        setFirebaseError(false);
        navigate('/swipe');
      })
      .catch((error) => {
        setFirebaseError(true);
        setErrorMsg({ errorMessage: error.message, errorCode: error.code });
        console.log(errorMsg.errorCode);
        navigate('/');
      });
  };

  // Signing out a user from firebase
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setisSignedIn(false);
      })
      .catch((error) => {
        setErrorMsg({ errorMessage: error.message, errorCode: error.code });
        console.log(errorMsg.errorCode);
      });
  };

  // Getting the current user.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (data) => {
      if (data) {
        // User is signed in
        setisSignedIn(true);
        setCurrentUser(data);
      } else {
        // User is signed out
        setisSignedIn(false);
      }
    });
  }, [isSignedIn, currentUser]);
  // Auth provider values
  const values = { errorMsg, disabledBtn, firebaseError, signUpUser, signInUser, signOutUser, isSignedIn, currentUser };

  return <AuthContex.Provider value={values}>{children}</AuthContex.Provider>;
};
