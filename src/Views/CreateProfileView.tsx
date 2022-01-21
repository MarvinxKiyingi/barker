import { Box, Typography } from '@mui/material';
import React from 'react';
import { CreateProfile } from '../Components/Forms/CreateProfile';

export const CreateProfileView = () => {
  return (
    <Box component='div' sx={{ textAlign: 'center' }}>
      <Typography className='actionTitle' variant='h5' gutterBottom component='div' sx={{ fontWeight: 600 }}>
        Create profile
      </Typography>

      <CreateProfile />
    </Box>
  );
};
