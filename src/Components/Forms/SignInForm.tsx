// Npm packages
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

// Models
import { ISignIn } from '../../Models/ISignIn';
import { ISignInYupSchema } from '../../Models/IYupSchema';

// Importing context
import { useAuth } from '../../Utils/Contexs/AuthContext';

// MUI components
import TextField from '@mui/material/TextField';
import { Alert, Box, Button, Typography } from '@mui/material';

//Styles

import { StyledActionButton } from '../../Styles/StyledComponents/Button';
import { theme } from '../../Styles/theme';
import { SignInFormWrapper } from '../../Styles/StyledComponents/StyledForms';

export const SignInForm = () => {
  // Importing function from contex
  const { signInUser, errorMsg, firebaseError } = useAuth();

  // React-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>(
    // Importing Yup Schema for validation
    { resolver: yupResolver(ISignInYupSchema) }
  );

  // Form handler
  const formSubmitHandler: SubmitHandler<ISignIn> = (data: ISignIn) => {
    // Signing in a user through firebase auth
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
    <SignInFormWrapper className='signInContent'>
      {firebaseError ? <Alert severity='error'>{errorHandler()}</Alert> : null}

      <Typography className='actionTitle' variant='h6' gutterBottom component='h1'>
        Sign in
      </Typography>
      <Typography className='actionDescription' variant='body1' gutterBottom component='div'>
        Sign in to get started, or if you already have an account?{' '}
        <Link to={'/signup'}>
          <b>Sign up</b>
        </Link>
      </Typography>

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
              style={{ margin: theme.spacing(2, 0) }}
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
              style={{ margin: theme.spacing(2, 0) }}
            />
          )}
        />
        <Typography className='resetPassword' variant='subtitle1' gutterBottom component='div'>
          <Link to='/resetpassword'>Forgot your password ?</Link>
        </Typography>
        <div className='submitButtonWrapper'>
          <StyledActionButton type='submit' variant='contained'>
            Sign in
          </StyledActionButton>
        </div>
      </form>
    </SignInFormWrapper>
  );
};
