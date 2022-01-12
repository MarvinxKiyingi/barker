import { Link } from 'react-router-dom';
import { SignUpForm } from '../Components/Forms/SignUpForm';

//SASS
// import '../Styles/Scss/SignUpView.scss';
import { StyledFormsWrapper } from '../Styles/StyledComponents/StyledFormsWrapper';

export const SignUpView = () => {
  return (
    <StyledFormsWrapper className='signUpWrapper'>
      <h3 className='actionTitle'>Create account</h3>
      <p>
        Already have an account? <Link to={'/signin'}>Sign in</Link>
      </p>
      <SignUpForm />
    </StyledFormsWrapper>
  );
};
