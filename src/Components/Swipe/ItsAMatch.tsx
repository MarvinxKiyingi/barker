import { Avatar, CardMedia, Typography, Stack, Box, styled } from '@mui/material';

import { StyledActionButton } from '../../Styles/StyledComponents/Button';
import { useSwipe } from '../../Utils/Contexs/SwipeContex';

const ItsAMatchWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  height: '90vh',
  justifyContent: 'space-around',
  [theme.breakpoints.up('md')]: {
    height: '100%',
  },

  '.avatarWrapper': {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    p: '1rem',
    '.avatarWrapper_avatar': {
      width: '15rem',
      height: '15rem',
      backgroundColor: theme.palette.background.paper,
    },
  },
}));
const StyledStack = styled(Stack)(({ theme }) => ({
  '>*+*': {
    marginTop: theme.spacing(2),
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    '>*+*': {
      marginTop: theme.spacing(0),
      marginLeft: theme.spacing(2),
    },
  },
}));
export const ItsAMatch = () => {
  const { setIsMatch, getDogs, openMessage, matchedDog } = useSwipe();

  const keepSwiping = () => {
    setIsMatch(false);
    getDogs();
  };
  return (
    <ItsAMatchWrapper className='itsAMatchWrapper'>
      <Box>
        <Typography variant='h5' gutterBottom component='div'>
          It's a
        </Typography>
        <Typography variant='h3' gutterBottom component='div' sx={{ fontWeight: 600 }}>
          Match
        </Typography>
      </Box>

      <Box sx={{ mb: '1rem' }}>
        <Box className='avatarWrapper'>
          <Avatar className='avatarWrapper_avatar'>
            <CardMedia component='img' sx={{ aspectRatio: 1 / 1 }} image={matchedDog?.imgUrl} alt='Dog image' />
          </Avatar>
        </Box>

        <Typography variant='h5' p='16px 0' component='div'>
          {matchedDog?.name}
        </Typography>
      </Box>

      <StyledStack>
        <StyledActionButton variant='contained' onClick={() => openMessage(matchedDog)}>
          Bark at {matchedDog?.name}
        </StyledActionButton>
        <StyledActionButton
          variant='outlined'
          onClick={() => {
            keepSwiping();
          }}
        >
          Keep swiping
        </StyledActionButton>
      </StyledStack>
    </ItsAMatchWrapper>
  );
};
