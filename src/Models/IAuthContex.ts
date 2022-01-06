import { IErrorMsg } from '../Models/IErrorMsg';
import { ISignUp } from './ISignUp';
import { ISignIn } from './ISignIn';

export interface IAuthContex {
  errorMsg: IErrorMsg;
  disabledBtn: boolean;
  firebaseError: boolean;
  SignUpUser: (props: ISignUp) => void;
  SignInUser: (props: ISignIn) => void;
}
