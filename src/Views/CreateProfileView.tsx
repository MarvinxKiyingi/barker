import { Box } from '@mui/material';
import React from 'react';
import { CreateProfile } from '../Components/Forms/CreateProfile';

export const CreateProfileView = () => {
  return (
    <Box component='div'>
      <h1>Create profile</h1>
      <CreateProfile />
    </Box>
  );
};
