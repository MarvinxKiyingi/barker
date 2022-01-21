import { Profile } from '../Components/Profile/Profile';
import Box from '@mui/material/Box';
// Import Scss styles
import '../Styles/Scss/mediaQuery.scss';

export const ProfileView = () => {
  return (
    <Box className='profileViewWrapper'>
      <Profile />
    </Box>
  );
};
