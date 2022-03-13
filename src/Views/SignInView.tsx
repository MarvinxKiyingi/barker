import { StyledDevider } from '../Components/Devider/Devider';
import { SignInForm } from '../Components/Forms/SignInForm';
import { Logo } from '../Components/Logo/Logo';
import { SignInWithSocialMedia } from '../Components/SignInWithSocialMedia/SignInWithSocialMedia';
import { ContentWrapper } from '../Styles/StyledComponents/ContentWrapper';
import { NavWrapper } from '../Styles/StyledComponents/Wrapper';

export const SignInView = () => {
  return (
    <ContentWrapper>
      <NavWrapper component='nav'>
        <Logo />
      </NavWrapper>
      <SignInForm />
      <StyledDevider />
      <SignInWithSocialMedia />
    </ContentWrapper>
  );
};
