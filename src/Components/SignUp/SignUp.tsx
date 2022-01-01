import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Function
import { auth } from '../../Utils/Firebase';

// Models
import { ISignUp, signUpstartValues } from '../../Models/ISignUp';
import { errorMsgStartValue, IErrorMsg } from '../../Models/IErrorMsg';
import { IYupSchema } from '../../Models/IYupSchema';

export const SignUp = () => {
  // All states
  const [errorMsg, setErrorMsg] = useState<IErrorMsg>(errorMsgStartValue);
  const [disabledBtn, setdisabledBtn] = useState(false);

  // Used to redirect users to a spesific route.
  const navigate = useNavigate();

  // React-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>(
    // Importing Yup Schema for validation
    { resolver: yupResolver(IYupSchema) }
  );
  // Form handler
  const formSubmitHandler: SubmitHandler<ISignUp> = (data: ISignUp) => {
    // Creation of a user through firebase auth
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        setdisabledBtn(true);
        navigate('/login');
      })
      .catch((error) => {
        setdisabledBtn(false);
        setErrorMsg({ errorMessage: error.message, errorCode: error.code });
        console.log(errorMsg.errorCode);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <input {...register('email')} type='text' />
        {errors.email?.message && <span>{errors.email.message}</span>}

        <input {...register('password')} type='password' />
        {errors.password?.message && <span>{errors.password.message}</span>}

        <input {...register('confirmPassword')} type='password' />
        {errors.confirmPassword?.message && <span>{errors.confirmPassword.message}</span>}

        <input {...register('gdprTerms')} type='checkbox' />
        {errors.gdprTerms?.message && <span>{errors.gdprTerms.message}</span>}

        <button type='submit' disabled={disabledBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};
