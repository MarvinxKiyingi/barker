import { DogIllustration } from '../Components/DogIllustration/DogIllustration';
import { SignUpForm } from '../Components/Forms/SignUpForm';
import { Logo } from '../Components/Logo/Logo';
import { ContentWrapper, StyledSection } from '../Styles/StyledComponents/ContentWrapper';

//SASS
import { NavWrapper } from '../Styles/StyledComponents/Wrapper';

export const SignUpView = () => {
  return (
    <ContentWrapper data-testid='todo-1' maxWidth={'xl'} className='signUpWrapper'>
      <NavWrapper component='header'>
        <Logo />
      </NavWrapper>
      <StyledSection className='StyledSection'>
        <div>
          <SignUpForm />
        </div>
        <div className='Illustration'>
          <DogIllustration />
        </div>
      </StyledSection>
    </ContentWrapper>
  );
};
