import { NavBar } from '../Components/Navbar/NavBar';
import Box from '@mui/material/Box';
import { SwipeCard } from '../Components/Swipe/SwipeCard';
import { ItsAMatch } from '../Components/Swipe/ItsAMatch';
import { useSwipe } from '../Utils/Contexs/SwipeContex';

export const SwipeView = () => {
  const { isMatch } = useSwipe();
  return (
    <Box
      className='swipeViewWrapper'
      sx={{
        maxWidth: '30rem',
        minHeight: '100vh',
      }}
    >
      <NavBar />
      {isMatch ? <ItsAMatch /> : <SwipeCard />}
    </Box>
  );
};
