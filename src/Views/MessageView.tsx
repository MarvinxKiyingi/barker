import { Message } from '../Components/Message/Message';
import { NavBar } from '../Components/Navbar/NavBar';

// Import Scss styles
import '../Styles/Scss/mediaQuery.scss';
import { AlternativContentWrapper } from '../Styles/StyledComponents/ContentWrapper';
import { AlternativNavWrapper, MainContentWrapper } from '../Styles/StyledComponents/Wrapper';
export const MessageView = () => {
  return (
    <MainContentWrapper className='messageViewWrapper'>
      <AlternativContentWrapper className='alternativContentWrapper'>
        <AlternativNavWrapper className='alternativNavWrapper'>
          <NavBar />
        </AlternativNavWrapper>
        <Message />
      </AlternativContentWrapper>
    </MainContentWrapper>
  );
};
