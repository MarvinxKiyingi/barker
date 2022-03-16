import { CreateProfile } from '../Components/Forms/CreateProfile';
import { Logo } from '../Components/Logo/Logo';
import { ContentWrapper } from '../Styles/StyledComponents/ContentWrapper';
import { MainContentWrapper, NavWrapper } from '../Styles/StyledComponents/Wrapper';

export const CreateProfileView = () => {
  return (
    <MainContentWrapper>
      <ContentWrapper maxWidth={false}>
        <NavWrapper component='nav'>
          <Logo />
        </NavWrapper>
        <CreateProfile />
      </ContentWrapper>
    </MainContentWrapper>
  );
};
