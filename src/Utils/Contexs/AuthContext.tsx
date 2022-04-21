import React, { useContext, useState } from 'react';

//Firebase
import {
  createUserWithEmailAndPassword,
  deleteUser,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth, db, storage } from '../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { deleteObject, ref, uploadBytes } from 'firebase/storage';

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
import { deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { IUser } from '../../Models/IUser';

// Initiating context
export const AuthContex = React.createContext({} as IAuthContex);

// Exporting the context, to be used wherever
export const useAuth = () => useContext(AuthContex);

export const AuthContexProvider: React.FC = ({ children }) => {
  // firebase-React-Hooks
  const [currentUser, currentUserLoading] = useAuthState(auth);

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
  const gitHubProvider = new GithubAuthProvider();

  // firebase Storage ref
  const storageRef = ref(storage, `profileImages/${currentUser?.uid}`);

  // Signing up a user to firebase
  const signUpUser = (props: ISignUp) => {
    createUserWithEmailAndPassword(auth, props.email, props.password)
      .then((user) => {
        setdisabledBtn(true);
        setFirebaseError(false);
        navigate('/signin');
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
          navigate('/');
        } else {
          navigate('createprofile');
        }
      })
      .catch((error) => {
        setFirebaseError(true);
        setErrorMsg({ errorMessage: error.message, errorCode: error.code });
        navigate('/signin');
      });
  };

  // Signing out a user from firebase
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigate('/signin');
      })
      .catch((error) => {
        setErrorMsg({ errorMessage: error.message, errorCode: error.code });
      });
  };
  const createUserProfile = (props: IUser) => {
    const file = props?.profileImg?.[0];

    if (currentUser) {
      try {
        setDoc(doc(db, 'Users', currentUser.uid), {
          name: props.name,
          age: props.age,
          height: props.height,
        });

        setDoc(doc(db, 'Matches', currentUser.uid), { match: [] });

        // Upload profileImage
        uploadBytes(storageRef, file);
        navigate('/');
      } catch (error) {
        alert(error);
      }
    }
  };
  const updateUserProfile = (props: IUser) => {
    const file = props?.profileImg?.[0];

    if (currentUser) {
      try {
        updateDoc(doc(db, 'Users', currentUser.uid), {
          name: props.name,
          age: props.age,
          height: props.height,
        });

        // Update/upload profileImage
        if (props?.profileImg?.length === 1) {
          uploadBytes(storageRef, file);
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  const deleteUserAndProfile = async () => {
    if (currentUser) {
      try {
        await deleteDoc(doc(db, 'Users', currentUser.uid));
        await deleteDoc(doc(db, 'Matches', currentUser.uid));
        await deleteDoc(doc(db, 'Messages', currentUser.uid));
      } catch (error) {
        alert(error);
      }

      if (storageRef) {
        try {
          deleteObject(storageRef);
        } catch (error) {
          alert(error);
        }
      }

      try {
        await deleteUser(currentUser);
      } catch (error) {
        alert(error);
      }
      navigate('/signin');
    }
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
        navigate('/signin');
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
        navigate('/signin');
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
    gitHubSignIn,
    currentUser,
    currentUserLoading,
    deleteUserAndProfile,
    updateUserProfile,
    createUserProfile,
  };

  return <AuthContex.Provider value={values}>{children}</AuthContex.Provider>;
};
