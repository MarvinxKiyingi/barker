// Npm packages
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

// Models
import { ISignUp } from '../../Models/ISignUp';
import { ISignUpYupSchema } from '../../Models/IYupSchema';

// MUI components
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import Alert from '@mui/material/Alert';

//Contex
import { useAuth } from '../../Utils/Contexs/AuthContext';

// Styles
import { StyledSignUpForm } from '../../Styles/StyledComponents/StyledForms';
import { StyledActionButton } from '../../Styles/StyledComponents/Button';
import { Box, Typography } from '@mui/material';
import { theme } from '../../Styles/theme';

export const SignUpForm = () => {
  // Importing function from contex
  const { signUpUser, errorMsg, disabledBtn, firebaseError } = useAuth();

  // React-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>(
    // Importing Yup Schema for validation
    { resolver: yupResolver(ISignUpYupSchema) }
  );

  // Form handler
  const formSubmitHandler: SubmitHandler<ISignUp> = (data: ISignUp) => {
    // Creation of a user through context and firebase auth
    signUpUser(data);
  };

  // This functions returns a string that is being presented to the user if there is an error.
  const errorHandler = () => {
    if (errorMsg.errorCode === 'auth/email-already-in-use') {
      return 'Email is already in use';
    } else return errorMsg.errorCode;
  };

  return (
    <StyledSignUpForm className='signUpContent'>
      {firebaseError ? <Alert severity='error'>{errorHandler()}</Alert> : null}
      <Typography className='actionTitle' variant='h6' gutterBottom component='h1'>
        Create account
      </Typography>
      <Typography className='actionDescription' variant='body1' gutterBottom component='p'>
        Already have an account?{' '}
        <b>
          <Link to={'/signin'}>Sign in</Link>
        </b>
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
        <Controller
          name={'confirmPassword'}
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <TextField
              className='formInputs'
              {...field}
              type='password'
              label='Confirm Password'
              variant='outlined'
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword ? errors.confirmPassword?.message : ''}
              fullWidth
              style={{ margin: ' 1rem 0rem' }}
            />
          )}
        />
        <Box className='gdprTermsWrapper'>
          <Box className='gdprTermsWrapper_content'>
            <Controller
              name={'gdprTerms'}
              control={control}
              defaultValue={false}
              render={({ field }) => <Checkbox {...field} inputProps={{ 'aria-label': 'checked this checkbox to continue' }} />}
            />
            <Typography className='termsAndCondition' variant='body1' gutterBottom component='p'>
              I have read and agreed to Barkers{' '}
              <b>
                <a href='https://gdpr.eu/terms-and-conditions/'>Terms & Conditions</a>
              </b>
            </Typography>
          </Box>
          <FormHelperText error sx={{ m: theme.spacing(1, 2) }}>
            {errors.gdprTerms?.message}
          </FormHelperText>
        </Box>

        <div className='submitButtonWrapper'>
          <StyledActionButton type='submit' variant='contained' disabled={disabledBtn}>
            Create account
          </StyledActionButton>
        </div>
      </form>
    </StyledSignUpForm>
  );
};
