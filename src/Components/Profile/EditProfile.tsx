import { useNavigate } from 'react-router-dom';

// MUI components
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// SCSS
import '../../Styles/Scss/Profile.scss';
import { UpdateProfile } from '../Forms/UpdateProfile';
import { Box, styled, Typography } from '@mui/material';
import { isDesktop } from '../../Utils/IsDesktop';

const ProfileNavigation = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingRight: '0.5rem',
}));

export const EditProfile = () => {
  const navigate = useNavigate();

  return (
    <Box className='profileWrapper' sx={{ p: '0rem 0.5rem' }}>
      <ProfileNavigation className='navigation'>
        <IconButton className='navigation_iconbutton' size='large' onClick={() => navigate(isDesktop() ? '/' : '/profile')}>
          <ArrowBackIcon className='profileWrapper_ArrowBackIcon' fontSize='inherit' sx={{ color: '#39353f' }} />
        </IconButton>

        <Typography
          variant='h6'
          className='navigation_header'
          gutterBottom
          component='div'
          sx={{ mb: 'unset', letterSpacing: '0.0180em', fontWeight: 600 }}
        >
          Edit profile
        </Typography>
      </ProfileNavigation>
      <UpdateProfile />
    </Box>
  );
};
