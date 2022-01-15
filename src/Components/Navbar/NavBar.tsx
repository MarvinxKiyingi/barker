import { NavLogo } from '../Logo/Logo';
import { useNavigate } from 'react-router-dom';

// MUI components
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import Box from '@mui/material/Box';

export const NavBar = () => {
  // Used to redirect users to a spesific route
  const navigate = useNavigate();

  return (
    <Box className='navBarWrapper' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0rem' }}>
      <IconButton aria-label='Profile Icon' onClick={() => navigate('/profile')} size='large'>
        <AccountCircleIcon fontSize='inherit' />
      </IconButton>
      <NavLogo />
      <IconButton onClick={() => navigate('/match')} size='large'>
        <ChatIcon fontSize='inherit' />
      </IconButton>
    </Box>
  );
};
