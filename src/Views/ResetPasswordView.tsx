import { ResetPassword } from '../Components/Forms/ResetPassword';
import { Logo } from '../Components/Logo/Logo';
import { ContentWrapper } from '../Styles/StyledComponents/ContentWrapper';

// Styles
import { NavWrapper } from '../Styles/StyledComponents/Wrapper';

export const ResetPasswordView = () => {
  return (
    <ContentWrapper maxWidth={false} className='resetPasswordWrapper'>
      <NavWrapper>
        <Logo />
      </NavWrapper>
      <ResetPassword />
    </ContentWrapper>
  );
};
