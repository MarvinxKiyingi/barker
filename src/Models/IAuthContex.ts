import { IErrorMsg } from '../Models/IErrorMsg';
import { ISignUp } from './ISignUp';
import { ISignIn } from './ISignIn';
import { IPasswrodReset } from './IPasswordReset';

export interface IAuthContex {
  errorMsg: IErrorMsg;
  succsessMsg: string;
  isSuccess: boolean;
  disabledBtn: boolean;
  firebaseError: boolean;
  signUpUser: (props: ISignUp) => void;
  signInUser: (props: ISignIn) => void;
  passwordReset: (props: IPasswrodReset) => void;
  signOutUser: () => void;
  googleSignIn: () => void;
  facebookSignIn: () => void;
  gitHubSignIn: () => void;
  isSignedIn: boolean;
  currentUser: any; // Remove any and set the real data type!!!
}
