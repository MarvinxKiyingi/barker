import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

// Importing context
import { useAuth } from '../../Utils/Contexs/AuthContext';

// MUI components
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// SCSS
import '../../Styles/Scss/Profile.scss';
import { UpdateProfile } from '../Forms/UpdateProfile';

export const Profile = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();
  return (
    <div className='profileWrapper'>
      <nav className='navigation'>
        <IconButton className='navigation_iconbutton' size='large' onClick={() => navigate('/')}>
          <ArrowBackIosIcon fontSize='inherit' />
        </IconButton>
        <h3 className='navigation_header'>profile</h3>
        <span></span>
      </nav>
      <UpdateProfile />
      <Stack direction='row' justifyContent='center'>
        <Button onClick={() => signOutUser()} variant='contained'>
          Sign Out
        </Button>
      </Stack>
    </div>
  );
};
