import { useNavigate } from 'react-router-dom';

// Importing context
import { useAuth } from '../../Utils/Contexs/AuthContext';

// MUI components
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from '@mui/material/Stack';

// React-firebase-hooks
import { useDownloadURL } from 'react-firebase-hooks/storage';

//Firebase
import { ref } from 'firebase/storage';
import { storage } from '../../Utils/Firebase';

// SCSS
import '../../Styles/Scss/Profile.scss';
import { UpdateProfile } from '../Forms/UpdateProfile';
import { Avatar, Box, styled, Tooltip, Typography } from '@mui/material';
import { StyledActionButton } from '../../Styles/StyledComponents/Button';
import { InfoOutlined } from '@mui/icons-material';

const ProfileNavigation = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  paddingRight: '0.5rem',
});

const StyledTooltip = styled(Tooltip)(({ theme }) => ({
  '	.MuiTooltip-tooltip': {
    backgroundColor: theme.palette.background.default,
    color: 'black',
  },
}));

export const Profile = () => {
  const { signOutUser, currentUser } = useAuth();
  const navigate = useNavigate();

  const [imageUrl, loading] = useDownloadURL(ref(storage, `profileImages/${currentUser?.uid}`));
  return (
    <Box className='profileWrapper' sx={{ p: '0rem 0.5rem' }}>
      <ProfileNavigation className='navigation'>
        <IconButton className='navigation_iconbutton' size='large' onClick={() => navigate('/')}>
          <ArrowBackIcon fontSize='inherit' sx={{ color: '#39353f' }} />
        </IconButton>
        <Typography
          variant='h6'
          className='navigation_header'
          gutterBottom
          component='div'
          sx={{ mb: 'unset', letterSpacing: '0.0180em', fontWeight: 600 }}
        >
          Dog Profile
        </Typography>
        <StyledTooltip title='A match is established when a dog is proportionate in height with your dog profile.' placement='bottom-start'>
          <IconButton>
            <InfoOutlined fontSize='inherit' sx={{ color: '#39353f' }} />
          </IconButton>
        </StyledTooltip>
      </ProfileNavigation>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {!loading ? <Avatar alt='userProfile' src={imageUrl} sx={{ width: '10rem', height: '10rem' }} /> : null}
      </Box>

      <UpdateProfile />
      <Stack direction='row' justifyContent='center' sx={{ margin: '1rem 0' }}>
        <StyledActionButton onClick={() => signOutUser()} variant='contained'>
          Sign Out
        </StyledActionButton>
      </Stack>
    </Box>
  );
};
