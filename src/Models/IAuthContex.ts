import { IErrorMsg } from '../Models/IErrorMsg';
import { ISignUp } from './ISignUp';
import { ISignIn } from './ISignIn';
import { IPasswrodReset } from './IPasswordReset';
import { User as FirebaseUser } from 'firebase/auth';

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
  currentUser: FirebaseUser | null | undefined;
  currentUserLoading: boolean; // Remove any and set the real data type!!!
}
