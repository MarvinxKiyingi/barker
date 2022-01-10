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
import { auth, db } from '../Firebase';
import { User as FirebaseUser } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

// Npm packages
import { useNavigate } from 'react-router-dom';

// Models
import { ISignUp } from '../../Models/ISignUp';
import { errorMsgStartValue } from '../../Models/IErrorMsg';
import { IAuthContex } from '../../Models/IAuthContex';
import { ISignIn } from '../../Models/ISignIn';
import { IPasswrodReset } from '../../Models/IPasswordReset';

// Utils
import { IsNewSocialMediaUser } from '../IsNewUser';
import { doc, getDoc } from 'firebase/firestore';

// Initiating context
export const AuthContex = React.createContext({} as IAuthContex);

// Exporting the context, to be used wherever
export const useAuth = () => useContext(AuthContex);

export const AuthContexProvider: React.FC = ({ children }) => {
  // firebase-React-Hooks
  const [currentUser, currentUserLoading, error] = useAuthState(auth);

  // My useStates
  const [errorMsg, setErrorMsg] = useState(errorMsgStartValue);
  const [disabledBtn, setdisabledBtn] = useState(false);
  const [firebaseError, setFirebaseError] = useState(false);
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
      .then(async (data) => {
        setFirebaseError(false);
        const docRef = doc(db, 'Users', `${data.user.uid}`);
        const docSnap = await getDoc(docRef);
        // Check if user is new
        if (docSnap.exists().valueOf()) {
          navigate('/swipe');
        } else {
          navigate('createprofile');
        }
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
        navigate('/');
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
        // IsNewUser returns a string depending on if the users first time or not.
        navigate(`${IsNewSocialMediaUser(result)}`);
      })
      .catch((error) => {
        // Handle Errors here.
        setErrorMsg({ errorMessage: error.message, errorCode: error.code });
        navigate('/');
      });
  };

  // Facebook sign in
  const facebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // IsNewUser returns a string depending on if the users first time or not.
        navigate(`${IsNewSocialMediaUser(result)}`);
      })
      .catch((error) => {
        // Handle Errors here.
        setErrorMsg({ errorMessage: error.message, errorCode: error.code });
        navigate('/');
      });
  };

  // Github sign in
  const gitHubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        // IsNewUser returns a string depending on if the users first time or not.
        navigate(`${IsNewSocialMediaUser(result)}`);
      })
      .catch((error) => {
        // Handle Errors here.
        setErrorMsg({ errorMessage: error.message, errorCode: error.code });
        navigate('/');
      });
  };

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
    currentUser,
    currentUserLoading,
  };

  return <AuthContex.Provider value={values}>{children}</AuthContex.Provider>;
};
