import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { SignUpForm } from '../Components/Forms/SignUpForm';

//SASS
// import '../Styles/Scss/SignUpView.scss';
import { StyledFormsWrapper } from '../Styles/StyledComponents/StyledFormsWrapper';

export const SignUpView = () => {
  return (
    <StyledFormsWrapper data-testid='todo-1' className='signUpWrapper'>
      <Typography className='actionTitle' variant='h5' gutterBottom component='div' sx={{ fontWeight: 600 }}>
        Create account
      </Typography>
      <Typography variant='subtitle1' gutterBottom component='div'>
        Already have an account? <Link to={'/signin'}>Sign in</Link>
      </Typography>
      <SignUpForm />
    </StyledFormsWrapper>
  );
};
