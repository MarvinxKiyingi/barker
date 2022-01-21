import { NavBar } from '../Components/Navbar/NavBar';
import Box from '@mui/material/Box';
import { SwipeCard } from '../Components/Swipe/SwipeCard';
import { ItsAMatch } from '../Components/Swipe/ItsAMatch';
import { useSwipe } from '../Utils/Contexs/SwipeContex';
// Import Scss styles
import '../Styles/Scss/mediaQuery.scss';

export const SwipeView = () => {
  const { isMatch } = useSwipe();
  return (
    <Box className='swipeViewWrapper'>
      <NavBar />
      {isMatch ? <ItsAMatch /> : <SwipeCard />}
    </Box>
  );
};
