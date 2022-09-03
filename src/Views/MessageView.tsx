import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Message } from '../Components/Message/Message';
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

// Import Scss styles
import '../Styles/Scss/mediaQuery.scss';

// mui
import { Tabs, Tab, Box, styled } from '@mui/material';

const MessagesWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  height: '100%',
  overflow: 'auto',
  [theme.breakpoints.up('md')]: {
    height: '100%',
    overflow: 'auto',
  },
}));
export const MessageView = () => {
  const [pageView, setPageView] = useState('matches');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setPageView(newValue);
  };
  const navigate = useNavigate();
  return (
    <MainContentWrapper className='messageViewWrapper'>
      <AlternativContentWrapper className='alternativContentWrapper'>
        <IsMobile className='isMobile'>
          <AlternativNavWrapper className='alternativNavWrapper'>
            <NavBar />
          </AlternativNavWrapper>
          <Message />
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

            <MessagesWrapper className='messagesWrapper'>
              <Message />
            </MessagesWrapper>
          </RightWrapper>
        </IsDesktop>
      </AlternativContentWrapper>
    </MainContentWrapper>
  );
};
