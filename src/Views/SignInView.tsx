import { Box, Divider, styled } from '@mui/material';
import { SignInForm } from '../Components/Forms/SignInForm';
import { Logo } from '../Components/Logo/Logo';
import { SignInWithSocialMedia } from '../Components/SignInWithSocialMedia/SignInWithSocialMedia';
import { ContentWrapper } from '../Styles/StyledComponents/ContentWrapper';

const NavWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(2, 0),
}));

export const SignInView = () => {
  return (
    <ContentWrapper>
      <NavWrapper component='nav'>
        <Logo />
      </NavWrapper>
      <SignInForm />
      <Divider className='devider'>OR</Divider>
      <SignInWithSocialMedia />
    </ContentWrapper>
    // <StyledFormsWrapper className='signInWrapper'>
    //   <SignInForm />
    //   <SignInWithSocialMedia />
    // </StyledFormsWrapper>
  );
};
