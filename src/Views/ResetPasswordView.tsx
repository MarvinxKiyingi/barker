import { Typography } from '@mui/material';
import { ResetPassword } from '../Components/Forms/ResetPassword';

// Styles
import { StyledFormsWrapper } from '../Styles/StyledComponents/StyledFormsWrapper';

export const ResetPasswordView = () => {
  return (
    <StyledFormsWrapper className='resetPasswordWrapper'>
      <Typography className='actionTitle' variant='h5' gutterBottom component='div' sx={{ fontWeight: 600 }}>
        Reset Password
      </Typography>

      <ResetPassword />
    </StyledFormsWrapper>
  );
};
