import { SignInForm } from '../Components/Forms/SignInForm';
import { SignInWithSocialMedia } from '../Components/SignInWithSocialMedia/SignInWithSocialMedia';

// Styled components
import { StyledFormsWrapper } from '../Styles/StyledComponents/StyledFormsWrapper';

export const SignInView = () => {
  return (
    <StyledFormsWrapper className='signInWrapper'>
      <SignInForm />
      <SignInWithSocialMedia />
    </StyledFormsWrapper>
  );
};
