import { Profile } from '../Components/Profile/Profile';
import Box from '@mui/material/Box';

export const ProfileView = () => {
  return (
    <Box
      sx={{
        maxWidth: '30rem',
        minHeight: '100vh',
      }}
    >
      <Profile />
    </Box>
  );
};
