import { StyledDevider } from '../Components/Devider/Devider';
import { DogIllustration } from '../Components/DogIllustration/DogIllustration';
import { SignInForm } from '../Components/Forms/SignInForm';
import { Logo } from '../Components/Logo/Logo';
import { SignInWithSocialMedia } from '../Components/SignInWithSocialMedia/SignInWithSocialMedia';
import { ContentWrapper, StyledSection } from '../Styles/StyledComponents/ContentWrapper';
import { NavWrapper } from '../Styles/StyledComponents/Wrapper';

export const SignInView = () => {
  return (
    <ContentWrapper maxWidth={'xl'}>
      <NavWrapper component='header'>
        <Logo />
      </NavWrapper>
      <StyledSection className='StyledSection'>
        <div>
          <SignInForm />
          <StyledDevider />
          <SignInWithSocialMedia />
        </div>
        <div className='Illustration'>
          <DogIllustration />
        </div>
      </StyledSection>
    </ContentWrapper>
  );
};
