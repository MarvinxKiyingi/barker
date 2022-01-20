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
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';

//Styles
import { StyledSignInForm } from '../../Styles/StyledComponents/StyledForms';

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
    <StyledSignInForm className='signInContent'>
      {firebaseError ? <Alert severity='error'>{errorHandler()}</Alert> : null}
      <h3 className='actionTitle'>Sign in</h3>
      <p>
        Not a member? <Link to={'/signup'}>Sign up</Link>
      </p>
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
        <div className='resetPassword'>
          <Link to='/resetpassword'>Forgot your password ?</Link>
        </div>
      </form>
    </StyledSignInForm>
  );
};
