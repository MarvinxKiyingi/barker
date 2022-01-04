// Firebase
import { auth } from '../Utils/Firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
const googleProvider = new GoogleAuthProvider();

export const GoogleSignIn = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode || errorMessage);
    });
};
