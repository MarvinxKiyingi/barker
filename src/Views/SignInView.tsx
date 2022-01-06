import { Link } from 'react-router-dom';
import { SignInForm } from '../Components/Forms/SignInForm';

// MUI components
import Button from '@mui/material/Button';
import { useAuth } from '../Utils/Contexs/AuthContext';

export const SignInView = () => {
  const { googleSignIn, facebookSignIn, gitHubSignIn } = useAuth();
  return (
    <div className='signInWrapper'>
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
        <p>
          Not a member? <Link to={'/signup'}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};
