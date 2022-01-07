import React, { useContext, useEffect, useState } from 'react';

//Firebase
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from '../Firebase';
import { User as FirebaseUser } from 'firebase/auth';

// Npm packages
import { useNavigate } from 'react-router-dom';

// Models
import { ISignUp } from '../../Models/ISignUp';
import { errorMsgStartValue } from '../../Models/IErrorMsg';
import { IAuthContex } from '../../Models/IAuthContex';
import { ISignIn } from '../../Models/ISignIn';
import { IPasswrodReset } from '../../Models/IPasswordReset';

// Initiating context
export const AuthContex = React.createContext({} as IAuthContex);

// Exporting the context, to be used wherever
export const useAuth = () => useContext(AuthContex);

export const AuthContexProvider: React.FC = ({ children }) => {
  // All useStates
  const [errorMsg, setErrorMsg] = useState(errorMsgStartValue);
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [disabledBtn, setdisabledBtn] = useState(false);
  const [firebaseError, setFirebaseError] = useState(false);
  const [isSignedIn, setisSignedIn] = useState(false);
  const [succsessMsg, setsuccsessMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Used to redirect users to a spesific route
  const navigate = useNavigate();

  //Social media providor
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

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
      });
  };

  // Reset password with firebase
  const passwordReset = (props: IPasswrodReset) => {
    sendPasswordResetEmail(auth, props.email)
      .then(() => {
        // Password reset email sent!
        setIsSuccess(true);
        setsuccsessMsg('Check your email to reset your password');
      })
      .catch((error) => {
        setErrorMsg({ errorMessage: error.message, errorCode: error.code });
        // ..
      });
  };

  // Sign in with social media plattforms
  // Google sign in
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // The signed-in user info.
        setisSignedIn(true);
        navigate('/swipe');
      })
      .catch((error) => {
        // Handle Errors here.
        setisSignedIn(false);
        setErrorMsg({ errorMessage: error.message, errorCode: error.code });
        navigate('/');
      });
  };

  // Facebook sign in
  const facebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // The signed-in user info.
        setisSignedIn(true);
        navigate('/swipe');
      })
      .catch((error) => {
        // Handle Errors here.
        setisSignedIn(false);
        navigate('/');
      });
  };

  // Github sign in
  const gitHubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        // The signed-in user info.
        setisSignedIn(true);
        navigate('/swipe');
      })
      .catch((error) => {
        // Handle Errors here.
        setisSignedIn(false);
        navigate('/');
      });
  };

  // Getting the current user.
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
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
  const values = {
    errorMsg,
    succsessMsg,
    isSuccess,
    disabledBtn,
    firebaseError,
    signUpUser,
    signInUser,
    passwordReset,
    signOutUser,
    googleSignIn,
    facebookSignIn,
    gitHubSignIn,
    isSignedIn,
    currentUser,
  };

  return <AuthContex.Provider value={values}>{children}</AuthContex.Provider>;
};
