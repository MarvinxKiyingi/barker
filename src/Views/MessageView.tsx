import { Box } from '@mui/material';
import { Message } from '../Components/Message/Message';
import { NavBar } from '../Components/Navbar/NavBar';

// Import Scss styles
import '../Styles/Scss/mediaQuery.scss';
export const MessageView = () => {
  return (
    <Box className='matchViewWrapper'>
      <NavBar />
      <Message />
    </Box>
  );
};
