import { NavBar } from '../Components/Navbar/NavBar';
import Box from '@mui/material/Box';
import { DatingCard } from '../Components/DatingCard/DatingCard';

export const SwipeView = () => {
  return (
    <Box
      sx={{
        maxWidth: '30rem',
        minHeight: '100vh',
      }}
    >
      <Box
        component='div'
        sx={{
          maxWidth: '40rem',
        }}
      >
        <NavBar />
      </Box>
      <DatingCard />
    </Box>
  );
};
