// Npm packages
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Models
import { ISignUp } from '../../Models/ISignUp';
import { ISignUpYupSchema } from '../../Models/IYupSchema';

// MUI components
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

//SASS
import '../../Styles/Scss/SignUp.scss';
import { useAuth } from '../../Utils/Contexs/AuthContext';

export const SignUpForm = () => {
  // Importing function from contex
  const { SignUpUser, errorMsg, disabledBtn, firebaseError } = useAuth();

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
    SignUpUser(data);
  };

  const errorHandler = () => {
    if (errorMsg.errorCode === 'auth/email-already-in-use') {
      return 'Email is already in use';
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
        <div className='gdprTermsWrapper'>
          <div className='gdprTermsWrapper_content'>
            <Controller
              name={'gdprTerms'}
              control={control}
              defaultValue={false}
              render={({ field }) => <Checkbox {...field} inputProps={{ 'aria-label': 'checked this checkbox to continue' }} />}
            />
            <p>
              I have read and agreed to the <a href='https://gdpr.eu/terms-and-conditions/'>Terms & Conditions</a> and{' '}
              <a href='https://gdpr.eu/privacy-policy/'> Privicy Policy</a>
            </p>
          </div>
          <FormHelperText error>{errors.gdprTerms?.message}</FormHelperText>
        </div>

        <div className='submitButtonWrapper'>
          <Button type='submit' variant='contained' disabled={disabledBtn}>
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
};
