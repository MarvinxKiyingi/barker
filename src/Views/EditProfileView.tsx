import { EditProfile } from '../Components/Profile/EditProfile';

// Import Scss styles
import '../Styles/Scss/mediaQuery.scss';
import { AlternativNavWrapper, IsDesktop, IsMobile, LeftWrapper, MainContentWrapper, RightWrapper } from '../Styles/StyledComponents/Wrapper';
import { AlternativContentWrapper } from '../Styles/StyledComponents/ContentWrapper';
import { NavBar } from '../Components/Navbar/NavBar';
import { Profile } from '../Components/Profile/Profile';

export const EditProfileView = () => {
  return (
    <MainContentWrapper className='profileViewWrapper'>
      <AlternativContentWrapper className='alternativContentWrapper'>
        <IsMobile className='isMobile'>
          <AlternativNavWrapper className='alternativNavWrapper'>
            <NavBar />
          </AlternativNavWrapper>
          <EditProfile />
        </IsMobile>

        <IsDesktop className='isDesktop'>
          <LeftWrapper className='leftWrapper'>
            <Profile />
          </LeftWrapper>

          <RightWrapper className='rightWrapper matchesView'>
            <AlternativNavWrapper className='alternativNavWrapper'>
              <NavBar />
            </AlternativNavWrapper>

            <EditProfile />
          </RightWrapper>
        </IsDesktop>
      </AlternativContentWrapper>
    </MainContentWrapper>
  );
};
