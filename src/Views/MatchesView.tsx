// MUI components

import { Matches } from '../Components/Matches/Matches';
import { NavBar } from '../Components/Navbar/NavBar';
import { AlternativContentWrapper } from '../Styles/StyledComponents/ContentWrapper';
import { AlternativNavWrapper, MainContentWrapper } from '../Styles/StyledComponents/Wrapper';

export const MatchesView = () => {
  return (
    <MainContentWrapper className='matchViewWrapper'>
      <AlternativContentWrapper className='alternativContentWrapper'>
        <AlternativNavWrapper className='alternativNavWrapper'>
          <NavBar />
        </AlternativNavWrapper>
        <Matches />
      </AlternativContentWrapper>
    </MainContentWrapper>
  );
};
