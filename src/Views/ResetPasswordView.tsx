import { DogIllustration } from '../Components/DogIllustration/DogIllustration';
import { ResetPassword } from '../Components/Forms/ResetPassword';
import { Logo } from '../Components/Logo/Logo';
import { ContentWrapper, StyledSection } from '../Styles/StyledComponents/ContentWrapper';

// Styles
import { NavWrapper } from '../Styles/StyledComponents/Wrapper';

export const ResetPasswordView = () => {
  return (
    <ContentWrapper maxWidth={'xl'} className='resetPasswordWrapper'>
      <NavWrapper component='header'>
        <Logo />
      </NavWrapper>
      <StyledSection className='StyledSection'>
        <div>
          <ResetPassword />
        </div>
        <div className='Illustration'>
          <DogIllustration />
        </div>
      </StyledSection>
    </ContentWrapper>
  );
};
