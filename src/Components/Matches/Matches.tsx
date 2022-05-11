import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Firebase
import { DocumentData } from 'firebase/firestore';

// MUI
import { Avatar, Box, CardMedia, CircularProgress, Typography, styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSwipe } from '../../Utils/Contexs/SwipeContex';
import CloseIcon from '@mui/icons-material/Close';

const MatchWrapper = styled(Box)(({ theme }) => ({
  padding: '0rem 0.5rem 0.5rem',
  [theme.breakpoints.up('md')]: {
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },

  '.matchWrapper_header': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: ' 0.75rem',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  '.matchWrapper_navigationIconbutton': {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  '.matchesIsEmpty': {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      minHeight: 'initial',
      flex: 1,
    },
  },
}));

export const Matches = () => {
  // Used to redirect users to a spesific route
  const navigate = useNavigate();

  const { matchedValues, matchedValuesIsLoading, unMatch, openMessage } = useSwipe();
  const [matchesIsEmpty, setMatchesIsEmpty] = useState(false);
  const matchedSnapShot: DocumentData | undefined = matchedValues?.data()?.match;

  useEffect(() => {
    if (matchedSnapShot?.length === 0) {
      setMatchesIsEmpty(true);
    } else {
      setMatchesIsEmpty(false);
    }
  }, [matchesIsEmpty, matchedValues, matchedSnapShot?.length]);
  return (
    <MatchWrapper className='matchWrapper'>
      <Box className='matchWrapper_header'>
        <IconButton className='matchWrapper_navigationIconbutton' onClick={() => navigate('/')} size='large'>
          <ArrowBackIcon fontSize='inherit' sx={{ color: '#39353f' }} />
        </IconButton>

        <Typography
          variant='h6'
          className='matchWrapper_header_headerText'
          gutterBottom
          component='div'
          sx={{ mb: 'unset', letterSpacing: '0.0180em', fontWeight: 600 }}
        >
          Matches
        </Typography>
      </Box>

      {matchesIsEmpty ? (
        <Box className='matchesIsEmpty'>
          <Typography>Start swiping to get a match</Typography>
        </Box>
      ) : matchedValuesIsLoading ? (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <CircularProgress size={'3rem'} />
        </Box>
      ) : (
        matchedSnapShot?.map((match: DocumentData | undefined, index: number) => (
          <Box
            key={match?.id}
            className='matchContentWrapper'
            sx={{ display: 'flex', alignItems: 'center', m: '0.5rem 0rem', p: '1rem', backgroundColor: '#f7f7f7', borderRadius: '1rem' }}
          >
            <Box
              className='matchContentWrapper_container'
              onClick={() => openMessage(match)}
              sx={{ display: 'flex', flex: 1, alignItems: 'center', cursor: 'pointer' }}
            >
              <Avatar sx={{ width: '5rem', height: '5rem', m: '0rem 1rem' }}>
                <CardMedia component='img' height='100%' image={match?.imgUrl} alt='Dog image'></CardMedia>
              </Avatar>
              <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                <Typography className='matchContentWrapper_name' component='h3' sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                  {match?.name}
                </Typography>

                <Typography className='matchContentWrapper_breed' component='h3' sx={{ fontSize: '0.75rem' }}>
                  {match?.breed}
                </Typography>
              </Box>
            </Box>

            <IconButton className='matchRemoveButtonWrapper' onClick={() => unMatch(match)}>
              <CloseIcon className='CloseIcon' sx={{ color: '#c50029' }} />
            </IconButton>
          </Box>
        ))
      )}
    </MatchWrapper>
  );
};
