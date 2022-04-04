import { NavBar } from '../Components/Navbar/NavBar';
import { SwipeCard } from '../Components/Swipe/SwipeCard';
import { ItsAMatch } from '../Components/Swipe/ItsAMatch';
import { useSwipe } from '../Utils/Contexs/SwipeContex';
// Import styles
import '../Styles/Scss/mediaQuery.scss';
import { AlternativContentWrapper } from '../Styles/StyledComponents/ContentWrapper';
import { AlternativNavWrapper, MainContentWrapper } from '../Styles/StyledComponents/Wrapper';

export const SwipeView = () => {
  const { isMatch } = useSwipe();
  return (
    <MainContentWrapper className='swipeViewWrapper'>
      <AlternativContentWrapper>
        <AlternativNavWrapper className='alternativNavWrapper'>
          <NavBar />
        </AlternativNavWrapper>
        {isMatch ? <ItsAMatch /> : <SwipeCard />}
      </AlternativContentWrapper>
    </MainContentWrapper>
  );
};
