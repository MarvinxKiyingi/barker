import { NavBar } from '../Components/Navbar/NavBar';
import { SwipeCard } from '../Components/Swipe/SwipeCard';
import { ItsAMatch } from '../Components/Swipe/ItsAMatch';
import { useSwipe } from '../Utils/Contexs/SwipeContex';
// Import styles
import '../Styles/Scss/mediaQuery.scss';
import { AlternativContentWrapper } from '../Styles/StyledComponents/ContentWrapper';
import { AlternativNavWrapper, IsDesktop, IsMobile, LeftWrapper, MainContentWrapper, RightWrapper } from '../Styles/StyledComponents/Wrapper';
import { Profile } from '../Components/Profile/Profile';
import { Box, Tabs, Tab, styled } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StyledTabsWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '24px',
}));
export const SwipeView = () => {
  const { isMatch } = useSwipe();

  const [pageView, setPageView] = useState('swipe');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setPageView(newValue);
  };
  const navigate = useNavigate();

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

            <StyledTabsWrapper>
              <Tabs
                value={pageView}
                onChange={handleChange}
                textColor='primary'
                indicatorColor='primary'
                aria-label='Navigation between swipe and messages'
              >
                <Tab value='swipe' label='swipe' onClick={() => navigate('/')} />
                <Tab value='messages' label='messages' onClick={() => navigate('/matches')} />
              </Tabs>
            </StyledTabsWrapper>

            {isMatch ? <ItsAMatch /> : <SwipeCard />}
          </RightWrapper>
        </IsDesktop>
      </AlternativContentWrapper>
    </MainContentWrapper>
  );
};
