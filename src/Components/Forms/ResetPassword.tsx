// Npm packages
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

// Models
import { IPasswordResetYupSchema } from '../../Models/IYupSchema';
import { IPasswrodReset } from '../../Models/IPasswordReset';

// Importing context
import { useAuth } from '../../Utils/Contexs/AuthContext';

// MUI components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';

export const ResetPassword = () => {
  // Importing function from contex
  const { passwordReset, errorMsg, firebaseError, isSuccess, succsessMsg } = useAuth();

  // React-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IPasswrodReset>(
    // Importing Yup Schema for validation
    { resolver: yupResolver(IPasswordResetYupSchema) }
  );

  // Form handler
  const formSubmitHandler: SubmitHandler<IPasswrodReset> = (data: IPasswrodReset) => {
    // Reseting password through firebase auth
    passwordReset(data);
  };

  // This functions returns a string that is being presented to the user if there is an error.
  const errorHandler = () => {
    return errorMsg.errorCode;
  };

  return (
    <div className='passwordResetContent'>
      {isSuccess ? <Alert severity='success'>{succsessMsg}</Alert> : null}
      {firebaseError ? <Alert severity='error'>{errorHandler}</Alert> : null}
      <h1>Reset password</h1>
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

        <div className='submitButtonWrapper'>
          <Button type='submit' variant='contained'>
            Reset password
          </Button>
        </div>
        <div>
          <Link to='/'>Sign in</Link>
        </div>
      </form>
    </div>
  );
};
