import { NavBar } from '../Components/Navbar/NavBar';
import { SwipeCard } from '../Components/Swipe/SwipeCard';
import { ItsAMatch } from '../Components/Swipe/ItsAMatch';
import { useSwipe } from '../Utils/Contexs/SwipeContex';
// Import styles
import '../Styles/Scss/mediaQuery.scss';
import { AlternativContentWrapper } from '../Styles/StyledComponents/ContentWrapper';
import { AlternativNavWrapper, IsDesktop, IsMobile, LeftWrapper, MainContentWrapper, RightWrapper } from '../Styles/StyledComponents/Wrapper';
import { Profile } from '../Components/Profile/Profile';

export const SwipeView = () => {
  const { isMatch } = useSwipe();
  return (
    <MainContentWrapper className='swipeViewWrapper'>
      <AlternativContentWrapper className='alternativContentWrapper'>
        <IsMobile className='isMobile'>
          <AlternativNavWrapper className='alternativNavWrapper'>
            <NavBar />
          </AlternativNavWrapper>
          {isMatch ? <ItsAMatch /> : <SwipeCard />}
        </IsMobile>

        <IsDesktop className='isDesktop'>
          <LeftWrapper className='leftWrapper'>
            <Profile />
          </LeftWrapper>

          <RightWrapper className='rightWrapper'>
            <AlternativNavWrapper className='alternativNavWrapper'>
              <NavBar />
            </AlternativNavWrapper>
            {isMatch ? <ItsAMatch /> : <SwipeCard />}
          </RightWrapper>
        </IsDesktop>
      </AlternativContentWrapper>
    </MainContentWrapper>
  );
};
