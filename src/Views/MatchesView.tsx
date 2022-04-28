import { useNavigate } from 'react-router-dom';

// MUI components
import { Tabs, Tab } from '@mui/material';
import { useState } from 'react';

// styled components
import { Matches } from '../Components/Matches/Matches';
import { NavBar } from '../Components/Navbar/NavBar';
import { Profile } from '../Components/Profile/Profile';
import { AlternativContentWrapper } from '../Styles/StyledComponents/ContentWrapper';
import {
  AlternativNavWrapper,
  IsDesktop,
  IsMobile,
  LeftWrapper,
  MainContentWrapper,
  RightWrapper,
  StyledTabsWrapper,
} from '../Styles/StyledComponents/Wrapper';

export const MatchesView = () => {
  const [pageView, setPageView] = useState('matches');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setPageView(newValue);
  };
  const navigate = useNavigate();
  return (
    <MainContentWrapper className='matchViewWrapper'>
      <AlternativContentWrapper className='alternativContentWrapper'>
        <IsMobile className='isMobile'>
          <AlternativNavWrapper className='alternativNavWrapper'>
            <NavBar />
          </AlternativNavWrapper>
          <Matches />
        </IsMobile>

        <IsDesktop className='isDesktop'>
          <LeftWrapper className='leftWrapper'>
            <Profile />
          </LeftWrapper>

          <RightWrapper className='rightWrapper matchesView'>
            <AlternativNavWrapper className='alternativNavWrapper'>
              <NavBar />
            </AlternativNavWrapper>

            <StyledTabsWrapper className='tabsWrapper'>
              <Tabs
                value={pageView}
                onChange={handleChange}
                textColor='primary'
                indicatorColor='primary'
                aria-label='Navigation between swipe and messages'
              >
                <Tab value='swipe' label='swipe' onClick={() => navigate('/')} />
                <Tab value='matches' label='matches' onClick={() => navigate('/matches')} />
              </Tabs>
            </StyledTabsWrapper>

            <Matches />
          </RightWrapper>
        </IsDesktop>
      </AlternativContentWrapper>
    </MainContentWrapper>
  );
};
