import { useNavigate } from 'react-router-dom';

// MUI components
import { Box, Button } from '@mui/material';
import { Match } from '../Components/Match/Match';
import { NavBar } from '../Components/Navbar/NavBar';
import PetsIcon from '@mui/icons-material/Pets';

export const MatchView = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        maxWidth: '30rem',
        minHeight: '100vh',
      }}
    >
      <NavBar />
      <h1>Match View</h1>
      <Match />
      <Button onClick={() => navigate('/')} variant='contained'>
        <PetsIcon
          sx={{
            marginRight: '1rem',
          }}
        />{' '}
        Swipe
      </Button>
    </Box>
  );
};
