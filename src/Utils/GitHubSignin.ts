// Firebase
import { auth } from '../Utils/Firebase';
import { signInWithPopup, GithubAuthProvider } from 'firebase/auth';
const gitHubProvider = new GithubAuthProvider();

export const GitHubSignIn = () => {
  signInWithPopup(auth, gitHubProvider)
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
