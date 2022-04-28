import { Profile } from '../Components/Profile/Profile';

// Import Scss styles
import '../Styles/Scss/mediaQuery.scss';
import { AlternativNavWrapper, MainContentWrapper } from '../Styles/StyledComponents/Wrapper';
import { AlternativContentWrapper } from '../Styles/StyledComponents/ContentWrapper';
import { NavBar } from '../Components/Navbar/NavBar';

export const ProfileView = () => {
  return (
    <MainContentWrapper className='profileViewWrapper'>
      <AlternativContentWrapper className='alternativContentWrapper'>
        <AlternativNavWrapper className='alternativNavWrapper'>
          <NavBar />
        </AlternativNavWrapper>
        <Profile />
      </AlternativContentWrapper>
    </MainContentWrapper>
  );
};
