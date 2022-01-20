// Import context
import { useAuth } from '../../Utils/Contexs/AuthContext';

// MUI components
import { Button } from '@mui/material';

// styled component
import { StyledSocialMediaOptions } from '../../Styles/StyledComponents/StyledSocialMediaOptions';

export const SignInWithSocialMedia = () => {
  const { googleSignIn, facebookSignIn, gitHubSignIn } = useAuth();

  return (
    <StyledSocialMediaOptions className='socialMediaLoginWrapper'>
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
    </StyledSocialMediaOptions>
  );
};
