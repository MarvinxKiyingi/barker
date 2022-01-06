import { IErrorMsg } from '../Models/IErrorMsg';
import { ISignUp } from './ISignUp';
import { ISignIn } from './ISignIn';

export interface IAuthContex {
  errorMsg: IErrorMsg;
  disabledBtn: boolean;
  firebaseError: boolean;
  signUpUser: (props: ISignUp) => void;
  signInUser: (props: ISignIn) => void;
  signOutUser: () => void;
  googleSignIn: () => void;
  facebookSignIn: () => void;
  gitHubSignIn: () => void;
  isSignedIn: boolean;
  currentUser: any; // Remove any and set the real data type!!!
}
