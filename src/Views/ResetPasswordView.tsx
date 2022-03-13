import { Typography } from '@mui/material';
import { ResetPassword } from '../Components/Forms/ResetPassword';
import { Logo } from '../Components/Logo/Logo';
import { ContentWrapper } from '../Styles/StyledComponents/ContentWrapper';
import { Link } from 'react-router-dom';

// Styles
import { NavWrapper } from '../Styles/StyledComponents/Wrapper';
import { StyledDevider } from '../Components/Devider/Devider';

export const ResetPasswordView = () => {
  return (
    <ContentWrapper className='resetPasswordWrapper'>
      <NavWrapper>
        <Logo />
      </NavWrapper>
      <ResetPassword />
      <StyledDevider />
      <Typography variant='subtitle1' gutterBottom component='div' sx={{ textAlign: 'center', m: '1rem' }}>
        <b>
          <Link to='/signin'>Sign in</Link>
        </b>
      </Typography>
    </ContentWrapper>
  );
};
