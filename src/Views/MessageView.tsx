import { Box } from '@mui/material';
import { Message } from '../Components/Message/Message';
import { NavBar } from '../Components/Navbar/NavBar';

export const MessageView = () => {
  return (
    <Box
      className='matchViewWrapper'
      sx={{
        maxWidth: '30rem',
        minHeight: '100vh',
      }}
    >
      <NavBar />
      <Message />
    </Box>
  );
};
