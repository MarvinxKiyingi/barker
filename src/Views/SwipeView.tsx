import { NavBar } from '../Components/Navbar/NavBar';
import Box from '@mui/material/Box';
import { SwipeCard } from '../Components/SwipeCard/SwipeCard';

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
      <SwipeCard />
    </Box>
  );
};
