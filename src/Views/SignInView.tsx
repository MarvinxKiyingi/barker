import { Link } from 'react-router-dom';
import { SignInForm } from '../Components/Forms/SignInForm';

// MUI components
import Button from '@mui/material/Button';
import { useAuth } from '../Utils/Contexs/AuthContext';
import { StyledFormsWrapper } from '../Styles/StyledComponents/StyledFormsWrapper';

//SASS
// import '../Styles/Scss/SignInView.scss';

export const SignInView = () => {
  const { googleSignIn, facebookSignIn, gitHubSignIn } = useAuth();
  return (
    <StyledFormsWrapper className='signUpWrapper'>
      <SignInForm />
      <div className='socialMediaLoginWrapper'>
        <Button
          variant='contained'
          style={{
            backgroundColor: 'white',
            color: 'black',
          }}
          onClick={() => googleSignIn()}
        >
          Google
        </Button>
        <Button variant='contained' onClick={() => facebookSignIn()}>
          Facebook
        </Button>
        <Button
          variant='contained'
          style={{
            backgroundColor: 'black',
            color: 'white',
          }}
          onClick={() => gitHubSignIn()}
        >
          Github
        </Button>
      </div>
    </StyledFormsWrapper>
  );
};
