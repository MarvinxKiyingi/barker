import { IErrorMsg } from '../Models/IErrorMsg';
import { ISignUp } from './ISignUp';
import { ISignIn } from './ISignIn';
import { IPasswrodReset } from './IPasswordReset';
import { User as FirebaseUser } from 'firebase/auth';
import { IUser } from './IUser';

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
  createUserProfile: (props: IUser) => void;
  updateUserProfile: (props: IUser) => void;
  deleteUserAndProfile: () => Promise<void>;
  googleSignIn: () => void;
  gitHubSignIn: () => void;
  currentUser: FirebaseUser | null | undefined;
  currentUserLoading: boolean; // Remove any and set the real data type!!!
}
