import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useState } from 'react';

// Function
import { auth } from '../../Utils/Firebase';

// Models
import { ISignUp } from '../../Models/ISignUp';
import { ISignInYupSchema } from '../../Models/IYupSchema';
import { errorMsgStartValue, IErrorMsg } from '../../Models/IErrorMsg';

// MUI components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';

export const SignIn = () => {
  const [firebaseError, setFirebaseError] = useState(false);
  const [errorMsg, setErrorMsg] = useState<IErrorMsg>(errorMsgStartValue);

  // Used to redirect users to a spesific route.
  const navigate = useNavigate();

  // React-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>(
    // Importing Yup Schema for validation
    { resolver: yupResolver(ISignInYupSchema) }
  );

  // Form handler
  const formSubmitHandler: SubmitHandler<ISignUp> = (data: ISignUp) => {
    // Creation of a user through firebase auth

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('The signed in user is...: ', user);
        setFirebaseError(false);
        navigate('/swipe');
      })
      .catch((error) => {
        setFirebaseError(true);
        setErrorMsg({ errorMessage: error.message, errorCode: error.code });
        console.log(errorMsg.errorCode);
        navigate('/');
      });
  };

  const errorHandler = () => {
    if (errorMsg.errorCode === 'auth/wrong-password') {
      return 'Wrong password';
    }
    if (errorMsg.errorCode === 'auth/user-not-found') {
      return 'User not found';
    } else return errorMsg.errorCode;
  };

  return (
    <div className='signUpContent'>
      {firebaseError ? <Alert severity='error'>{errorHandler()}</Alert> : null}
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          name={'email'}
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <TextField
              {...field}
              type='email'
              label='Email'
              variant='outlined'
              error={!!errors.email}
              helperText={errors.email ? errors.email?.message : ''}
              fullWidth
              style={{ margin: ' 1rem 0rem' }}
            />
          )}
        />
        <Controller
          name={'password'}
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <TextField
              {...field}
              type='password'
              label='Password'
              variant='outlined'
              error={!!errors.password}
              helperText={errors.password ? errors.password?.message : ''}
              fullWidth
              style={{ margin: ' 1rem 0rem' }}
            />
          )}
        />

        <div className='submitButtonWrapper'>
          <Button type='submit' variant='contained'>
            Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};
