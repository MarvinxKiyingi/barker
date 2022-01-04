// Firebase
import { auth } from '../Utils/Firebase';
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
const facebookProvider = new FacebookAuthProvider();

export const FacebookSignIn = () => {
  signInWithPopup(auth, facebookProvider)
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
