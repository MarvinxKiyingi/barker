// MUI components
import { Box } from '@mui/material';
import { Matches } from '../Components/Matches/Matches';
import { NavBar } from '../Components/Navbar/NavBar';

export const MatchesView = () => {
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
