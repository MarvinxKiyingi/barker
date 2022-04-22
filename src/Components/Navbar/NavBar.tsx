import { Logo } from '../Logo/Logo';
import { useNavigate } from 'react-router-dom';

// MUI components
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import { NavBarWrapper } from '../../Styles/StyledComponents/Wrapper';

// Import Scss styles
import '../../Styles/Scss/mediaQuery.scss';
export const NavBar = () => {
  // Used to redirect users to a spesific route
  const navigate = useNavigate();

  return (
    <NavBarWrapper className='navBarWrapper' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '0.5rem' }}>
      <IconButton className='profileIconButton' aria-label='Profile Icon' onClick={() => navigate('/profile')} size='large'>
        <AccountCircleIcon className='AccountCircleIcon' fontSize='inherit' sx={{ color: '#39353f' }} />
      </IconButton>
      <Logo />
      <IconButton className='chatIconButton' onClick={() => navigate('/matches')} size='large'>
        <ChatIcon className='ChatIcon' fontSize='inherit' sx={{ color: '#39353f' }} />
      </IconButton>
    </NavBarWrapper>
  );
};
