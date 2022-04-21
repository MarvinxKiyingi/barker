import { DogIllustration } from '../Components/DogIllustration/DogIllustration';
import { SignInForm } from '../Components/Forms/SignInForm';
import { Logo } from '../Components/Logo/Logo';
import { ContentWrapper, StyledSection } from '../Styles/StyledComponents/ContentWrapper';
import { NavWrapper } from '../Styles/StyledComponents/Wrapper';

export const SignInView = () => {
  return (
    <ContentWrapper maxWidth={'xl'}>
      <NavWrapper className='NavWrapper' component='nav'>
        <Logo />
      </NavWrapper>
      <StyledSection className='StyledSection'>
        <div>
          <SignInForm />
        </div>

        <div className='Illustration'>
          <DogIllustration />
        </div>
      </StyledSection>
    </ContentWrapper>
  );
};
