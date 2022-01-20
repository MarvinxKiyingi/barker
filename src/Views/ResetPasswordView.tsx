import { ResetPassword } from '../Components/Forms/ResetPassword';

// Styles
import { StyledFormsWrapper } from '../Styles/StyledComponents/StyledFormsWrapper';

export const ResetPasswordView = () => {
  return (
    <StyledFormsWrapper className='resetPasswordWrapper'>
      <ResetPassword />
    </StyledFormsWrapper>
  );
};
