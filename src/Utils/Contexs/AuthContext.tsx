import React, { useContext, useState } from 'react';

//Firebase
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';

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
  const [disabledBtn, setdisabledBtn] = useState(false);
  const [firebaseError, setFirebaseError] = useState(false);

  // Signing up a user to firebase
  const SignUpUser = (props: ISignUp) => {
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

  const SignInUser = (props: ISignIn) => {
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

  // Auth provider values
  const values = { errorMsg, disabledBtn, firebaseError, SignUpUser, SignInUser };

  return <AuthContex.Provider value={values}>{children}</AuthContex.Provider>;
};
