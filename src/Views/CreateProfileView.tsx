import { Alert, Box, Typography } from '@mui/material';
import React from 'react';
import { CreateProfile } from '../Components/Forms/CreateProfile';

export const CreateProfileView = () => {
  return (
    <Box component='div' sx={{ textAlign: 'center' }}>
      <Typography className='actionTitle' variant='h5' gutterBottom component='div' sx={{ fontWeight: 600 }}>
        Create profile
      </Typography>

      <Alert severity='info' sx={{ textAlign: 'initial', mb: '1rem' }}>
        A match is established when a dog is proportionate in height with your dog profile.
      </Alert>
      <CreateProfile />
    </Box>
  );
};
