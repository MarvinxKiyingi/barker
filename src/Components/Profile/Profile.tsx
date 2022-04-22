import { useNavigate } from 'react-router-dom';

// Importing context
import { useAuth } from '../../Utils/Contexs/AuthContext';

// MUI components
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from '@mui/material/Stack';
import { Avatar, Box, styled, Tooltip, Typography } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';

// React-firebase-hooks
import { useDownloadURL } from 'react-firebase-hooks/storage';
import { useDocument } from 'react-firebase-hooks/firestore';

//Firebase
import { doc } from 'firebase/firestore';
import { db } from '../../Utils/Firebase';
import { ref } from 'firebase/storage';
import { storage } from '../../Utils/Firebase';

// SCSS
import '../../Styles/Scss/Profile.scss';
import { StyledActionButton } from '../../Styles/StyledComponents/Button';

//Firebase

const ProfileNavigation = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingRight: '0.5rem',
  '.navigation_iconbutton': {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const ProfileWrapper = styled(Box)({
  flex: 2,
  display: 'flex',
  flexDirection: 'column',
  padding: '0rem 0.5rem',
});

const StyledButtonStack = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '1rem 0',
}));
const InfoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  '>*+*': {
    marginTop: theme.spacing(2),
  },
}));
const TextSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  '.thin': {
    fontWeight: 500,
  },
}));

export const Profile = () => {
  const { signOutUser, currentUser } = useAuth();
  const navigate = useNavigate();

  const [imageUrl, loading] = useDownloadURL(ref(storage, `profileImages/${currentUser?.uid}`));

  // using React Firebase Hooks to retrive the data from firebase
  const [value] = useDocument(doc(db, 'Users', `${currentUser?.uid}`));
  const snapShot = value?.data();
  return (
    <ProfileWrapper className='profileWrapper'>
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
        <Tooltip title='A match is established when a dog is proportionate in height with your dog profile.' placement='bottom-start'>
          <IconButton>
            <InfoOutlined fontSize='inherit' sx={{ color: '#39353f' }} />
          </IconButton>
        </Tooltip>
      </ProfileNavigation>
      <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: '12px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          {!loading && <Avatar alt='userProfile' src={imageUrl} sx={{ width: '10rem', height: '10rem', alignSelf: 'center' }} />}
          <InfoContainer className='InfoContainer' sx={{ mt: '24px' }}>
            {snapShot?.name && (
              <Box>
                <Typography align='center' variant={'h6'}>
                  {snapShot?.name}
                </Typography>
              </Box>
            )}
            {snapShot?.name && (
              <TextSection>
                <Typography variant={'h6'}>Age</Typography>
                <Typography className='thin' variant={'h6'}>
                  {snapShot?.age}
                </Typography>
              </TextSection>
            )}
            {snapShot?.height && (
              <TextSection>
                <Typography variant={'h6'}>Height</Typography>
                <Typography className='thin' variant={'h6'}>
                  {snapShot?.height}
                </Typography>
              </TextSection>
            )}
          </InfoContainer>
        </Box>

        <StyledButtonStack spacing={2}>
          <StyledActionButton variant='outlined' onClick={() => navigate('/editprofile')}>
            Edit profile
          </StyledActionButton>

          <StyledActionButton onClick={() => signOutUser()} variant='contained'>
            Sign Out
          </StyledActionButton>
        </StyledButtonStack>
      </Box>
    </ProfileWrapper>
  );
};
