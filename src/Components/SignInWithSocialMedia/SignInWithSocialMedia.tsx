// Import context
import { useAuth } from '../../Utils/Contexs/AuthContext';

// styled component
import { StyledSocialMediaOptions } from '../../Styles/StyledComponents/StyledSocialMediaOptions';
import { StyledFacebookButton, StyledGithubButton, StyledGoogleButton } from '../../Styles/StyledComponents/Button';

export const SignInWithSocialMedia = () => {
  const { googleSignIn, facebookSignIn, gitHubSignIn } = useAuth();

  return (
    <StyledSocialMediaOptions className='socialMediaLoginWrapper'>
      <StyledGoogleButton variant='contained' onClick={() => googleSignIn()}>
        Google
      </StyledGoogleButton>
      <StyledFacebookButton variant='contained' onClick={() => facebookSignIn()}>
        Facebook
      </StyledFacebookButton>
      <StyledGithubButton variant='contained' onClick={() => gitHubSignIn()}>
        Github
      </StyledGithubButton>
    </StyledSocialMediaOptions>
  );
};
