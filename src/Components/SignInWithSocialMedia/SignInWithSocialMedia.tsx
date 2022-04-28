// Import context
import { useAuth } from '../../Utils/Contexs/AuthContext';

// styled component

import { Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { StyledGoogleButton, StyledGithubButton } from '../../Styles/StyledComponents/Button';
import { GoogleIcon } from '../../Styles/Icons/GoogleIcon';

export const SignInWithSocialMedia = () => {
  const { googleSignIn, gitHubSignIn } = useAuth();

  return (
    <Stack className='socialMediaLoginWrapper' spacing={2}>
      <StyledGoogleButton variant='contained' startIcon={<GoogleIcon />} onClick={() => googleSignIn()}>
        Google
      </StyledGoogleButton>
      <StyledGithubButton variant='contained' startIcon={<GitHubIcon />} onClick={() => gitHubSignIn()}>
        Github
      </StyledGithubButton>
    </Stack>
    // <StyledSocialMediaOptions className='socialMediaLoginWrapper'>
    //   <StyledGoogleButton variant='contained' onClick={() => googleSignIn()}>
    //     Google
    //   </StyledGoogleButton>
    //   <StyledFacebookButton variant='contained' onClick={() => facebookSignIn()}>
    //     Facebook
    //   </StyledFacebookButton>
    //   <StyledGithubButton variant='contained' onClick={() => gitHubSignIn()}>
    //     Github
    //   </StyledGithubButton>
    // </StyledSocialMediaOptions>
  );
};
