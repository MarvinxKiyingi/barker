import { SignUpForm } from '../Components/Forms/SignUpForm';
import { Logo } from '../Components/Logo/Logo';
import { ContentWrapper } from '../Styles/StyledComponents/ContentWrapper';

//SASS
import { NavWrapper } from '../Styles/StyledComponents/Wrapper';

export const SignUpView = () => {
  return (
    <ContentWrapper data-testid='todo-1' maxWidth={false} className='signUpWrapper'>
      <NavWrapper>
        <Logo />
      </NavWrapper>
      <SignUpForm />
    </ContentWrapper>
  );
};
