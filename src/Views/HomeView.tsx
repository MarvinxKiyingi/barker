import { Link } from 'react-router-dom';
import { SignIn } from '../Components/SignIn/SignIn';

// MUI components
import Button from '@mui/material/Button';
import { GoogleSignIn } from '../Utils/GoogleSignIn';
import { FacebookSignIn } from '../Utils/FacebookSignIn';
import { GitHubSignIn } from '../Utils/GitHubSignin';

export const HomeView = () => {
  return (
    <div className='signInWrapper'>
      <SignIn />
      <div className='socialMediaLoginWrapper'>
        <Button
          variant='contained'
          style={{
            backgroundColor: 'white',
            color: 'black',
          }}
          onClick={() => GoogleSignIn()}
        >
          Google
        </Button>
        <Button variant='contained' onClick={() => FacebookSignIn()}>
          Facebook
        </Button>
        <Button
          variant='contained'
          style={{
            backgroundColor: 'black',
            color: 'white',
          }}
          onClick={() => GitHubSignIn()}
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
