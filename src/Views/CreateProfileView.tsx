import { DogIllustration } from '../Components/DogIllustration/DogIllustration';
import { CreateProfile } from '../Components/Forms/CreateProfile';
import { Logo } from '../Components/Logo/Logo';
import { ContentWrapper, StyledSection } from '../Styles/StyledComponents/ContentWrapper';
import { MainContentWrapper, NavWrapper } from '../Styles/StyledComponents/Wrapper';

export const CreateProfileView = () => {
  return (
    <MainContentWrapper>
      <ContentWrapper maxWidth={'xl'}>
        <NavWrapper component='header'>
          <Logo />
        </NavWrapper>
        <StyledSection className='StyledSection'>
          <div>
            <CreateProfile />
          </div>
          <div className='Illustration'>
            <DogIllustration />
          </div>
        </StyledSection>
      </ContentWrapper>
    </MainContentWrapper>
  );
};
