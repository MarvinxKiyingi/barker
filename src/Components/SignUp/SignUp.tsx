import { ChangeEvent, FormEvent, useState } from 'react';
import { IUser, userStartValue } from '../../Models/IUser';
import { auth } from '../../Utils/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { errorMsgStartValue, IErrorMsg } from '../../Models/IErrorMsg';
import { useNavigate } from 'react-router-dom';
import { SignUpForm } from '../Forms/SignUpForm';

export const SignUp = () => {
  const [signUpForm, setSignUpForm] = useState<IUser>(userStartValue);
  const [errorMsg, setErrorMsg] = useState<IErrorMsg>(errorMsgStartValue);
  const [disabledBtn, setdisabledBtn] = useState(false);

  const navigate = useNavigate();

  // Form value handlers
  const handleSignUpValue = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    setSignUpForm({ ...signUpForm, [name]: e.target.value });
  };

  const handleCheckboxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpForm({ ...signUpForm, ['gdprTerms']: e.target.checked });
  };

  // Creation of a user through firebase auth
  const createUser = () => {
    createUserWithEmailAndPassword(auth, signUpForm.email!, signUpForm.password!)
      .then(() => {
        setdisabledBtn(true);
        navigate('/login');
      })
      .catch((error) => {
        setErrorMsg({ errorMessage: error.message, errorCode: error.code });
      });
  };

  // Submitting user to firebase auth
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser();
  };

  return (
    <div>
      <SignUpForm onChange={handleSignUpValue} onChangeGDPR={handleCheckboxValue} onSubmit={handleSubmitForm} disabled={disabledBtn} />
    </div>
  );
};
