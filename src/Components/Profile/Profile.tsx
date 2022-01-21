import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

// Importing context
import { useAuth } from '../../Utils/Contexs/AuthContext';

// MUI components
import Stack from '@mui/material/Stack';

// SCSS
import '../../Styles/Scss/Profile.scss';
import { UpdateProfile } from '../Forms/UpdateProfile';
import { Box, Typography } from '@mui/material';
import { StyledActionButton } from '../../Styles/StyledComponents/Button';

export const Profile = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();
  return (
    <div className='profileWrapper'>
      <Box className='navigation' sx={{ p: '0 2rem' }}>
        <IconButton className='navigation_iconbutton' size='large' onClick={() => navigate('/')} sx={{ flex: 0.2 }}>
          <ArrowBackIcon fontSize='inherit' sx={{ color: '#39353f' }} />
        </IconButton>
        <Typography
          variant='h6'
          className='navigation_header'
          gutterBottom
          component='div'
          sx={{ mb: 'unset', letterSpacing: '0.0180em', fontWeight: 600, flex: 2, mr: '0.75rem', textAlign: 'center' }}
        >
          Profile
        </Typography>
        <Box sx={{ flex: 0.2 }}></Box>
      </Box>
      <UpdateProfile />
      <Stack direction='row' justifyContent='center' sx={{ margin: '1rem 0' }}>
        <StyledActionButton onClick={() => signOutUser()} variant='contained'>
          Sign Out
        </StyledActionButton>
      </Stack>
    </div>
  );
};
