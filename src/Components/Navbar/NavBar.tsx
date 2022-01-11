import { NavLogo } from '../Logo/Logo';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

// SCSS
import '../../Styles/Scss/NavBar.scss';

export const NavBar = () => {
  // Used to redirect users to a spesific route
  const navigate = useNavigate();

  return (
    <div className='navBarWrapper'>
      <NavLogo />
      <IconButton aria-label='Profile Icon' onClick={() => navigate('/profile')} size='large'>
        <AccountCircleIcon fontSize='inherit' />
      </IconButton>
    </div>
  );
};
