import { Avatar, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { StyledActionButton } from '../../Styles/StyledComponents/Button';
import { useSwipe } from '../../Utils/Contexs/SwipeContex';

export const ItsAMatch = () => {
  const { setIsMatch, getDogs, openMessage, matchedDog } = useSwipe();

  const keepSwiping = () => {
    setIsMatch(false);
    getDogs();
  };
  return (
    <Box
      className='itsAMatchWrapper'
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '90vh', justifyContent: 'space-around' }}
    >
      <Box>
        <Typography variant='h5' gutterBottom component='div'>
          It's a
        </Typography>
        <Typography variant='h3' gutterBottom component='div' sx={{ fontWeight: 600 }}>
          Match
        </Typography>
      </Box>

      <Box sx={{ mb: '1rem' }}>
        <Box className='avatarWrapper' sx={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', p: '1rem' }}>
          <Avatar className='avatarWrapper_avatar' sx={{ width: '15rem', height: '15rem' }}>
            <CardMedia component='img' height='100%' image={matchedDog?.imgUrl} alt='Dog image' />
          </Avatar>
        </Box>

        <Typography variant='h5' gutterBottom component='div'>
          {matchedDog?.name}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <StyledActionButton variant='contained' onClick={() => openMessage(matchedDog)} sx={{ mb: '1rem' }}>
          Bark at {matchedDog?.name}
          {/* Bark at {matchedDog?.name} */}
        </StyledActionButton>

        <StyledActionButton
          variant='contained'
          onClick={() => {
            keepSwiping();
          }}
        >
          Keep swiping
        </StyledActionButton>
      </Box>
    </Box>
  );
};
