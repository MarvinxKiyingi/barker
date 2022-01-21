import { NavLogo } from '../Logo/Logo';
import { useNavigate } from 'react-router-dom';

// MUI components
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import Box from '@mui/material/Box';

// Import Scss styles
import '../../Styles/Scss/mediaQuery.scss';
export const NavBar = () => {
  // Used to redirect users to a spesific route
  const navigate = useNavigate();

  return (
    <Box className='navBarWrapper' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '0.5rem' }}>
      <IconButton aria-label='Profile Icon' onClick={() => navigate('/profile')} size='large'>
        <AccountCircleIcon className='AccountCircleIcon' fontSize='inherit' sx={{ color: '#39353f' }} />
      </IconButton>
      <NavLogo />
      <IconButton onClick={() => navigate('/matches')} size='large'>
        <ChatIcon className='ChatIcon' fontSize='inherit' sx={{ color: '#39353f' }} />
      </IconButton>
    </Box>
  );
};
