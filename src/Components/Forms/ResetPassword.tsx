// Npm packages
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Models
import { IPasswordResetYupSchema } from '../../Models/IYupSchema';
import { IPasswrodReset } from '../../Models/IPasswordReset';

// Importing context
import { useAuth } from '../../Utils/Contexs/AuthContext';

// MUI components
import TextField from '@mui/material/TextField';
import { Alert, Box, Typography } from '@mui/material';
import { StyledActionButton } from '../../Styles/StyledComponents/Button';
import { StyledResetPasswordForm } from '../../Styles/StyledComponents/StyledForms';

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
    <StyledResetPasswordForm className='passwordResetContent'>
      {isSuccess ? <Alert severity='success'>{succsessMsg}</Alert> : null}
      {firebaseError ? <Alert severity='error'>{errorHandler}</Alert> : null}

      <Typography className='actionTitle' variant='h6' gutterBottom component='h1'>
        Reset Password
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
              style={{ margin: ' 1rem 0rem' }}
            />
          )}
        />

        <Box className='submitButtonWrapper'>
          <StyledActionButton type='submit' variant='contained'>
            Reset password
          </StyledActionButton>
        </Box>
      </form>
    </StyledResetPasswordForm>
  );
};
