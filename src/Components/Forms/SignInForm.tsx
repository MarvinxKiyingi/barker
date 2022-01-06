// Npm packages
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Models
import { ISignUp } from '../../Models/ISignUp';
import { ISignInYupSchema } from '../../Models/IYupSchema';

// MUI components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';
import { useAuth } from '../../Utils/Contexs/AuthContext';

export const SignInForm = () => {
  // Importing function from contex
  const { signInUser, errorMsg, firebaseError } = useAuth();

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
    signInUser(data);
  };

  // This functions returns a string that is being presented to the user if there is an error.
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
