import { useNavigate } from 'react-router-dom';

// MUI components
import { Box, Button } from '@mui/material';
import { Matches } from '../Components/Matches/Matches';
import { NavBar } from '../Components/Navbar/NavBar';

export const MatchesView = () => {
  const navigate = useNavigate();

  return (
    <Box
      className='matchViewWrapper'
      sx={{
        maxWidth: '30rem',
        minHeight: '100vh',
      }}
    >
      <NavBar />
      <Matches />
    </Box>
  );
};
