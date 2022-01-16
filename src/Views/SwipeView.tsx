import { NavBar } from '../Components/Navbar/NavBar';
import Box from '@mui/material/Box';
import { DatingCard } from '../Components/DatingCard/DatingCard';

export const SwipeView = () => {
  return (
    <Box
      className='swipeViewWrapper'
      sx={{
        maxWidth: '30rem',
        minHeight: '100vh',
      }}
    >
      <NavBar />
      <DatingCard />
    </Box>
  );
};
