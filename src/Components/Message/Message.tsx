import { useNavigate, useParams } from 'react-router-dom';

// Firebase
import { DocumentData } from 'firebase/firestore';

// MUI components
import { Avatar, Box, CardMedia, CircularProgress, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useSwipe } from '../../Utils/Contexs/SwipeContex';
import { SendMessage } from '../Forms/SendMessage';
import { DisplayMessage } from './DisplayMessage';

export const Message = () => {
  const { matchedValues, matchedValuesIsLoading } = useSwipe();
  const matchedSnapShot: DocumentData | undefined = matchedValues?.data()?.match;
  const { id } = useParams();

  // Used to redirect users to a spesific route
  const navigate = useNavigate();

  return matchedValuesIsLoading ? (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <CircularProgress size={'3rem'} />
    </Box>
  ) : (
    matchedSnapShot?.map((match: DocumentData | undefined, index: number) => {
      if (id === match?.id) {
        return (
          <Box
            className='messagesWrapper'
            sx={{ p: '0rem 0.5rem 0.5rem', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <Box className='messagesWrapper_header' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pr: ' 0.75rem' }}>
              <IconButton onClick={() => navigate('/matches')} size='large'>
                <ArrowBackIcon className='messagesWrapper_ArrowBackIcon' fontSize='inherit' sx={{ color: '#39353f' }} />
              </IconButton>

              <Box className='avatarWrapper' sx={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', pr: ' 0.75rem' }}>
                <Avatar className='avatarWrapper_avatar' sx={{ width: '2.2rem', height: '2.2rem' }}>
                  <CardMedia component='img' height='100%' image={match?.imgUrl} alt='Dog image'></CardMedia>
                </Avatar>
                <Typography
                  variant='h6'
                  className='avatarWrapper_headerText'
                  gutterBottom
                  component='div'
                  sx={{ fontSize: '0.75rem', textAlign: 'center' }}
                >
                  {match?.name}
                </Typography>
              </Box>
            </Box>
            <Box className='Testing' sx={{ height: '77vh' }}>
              <DisplayMessage />
            </Box>
            <SendMessage />
          </Box>
        );
      } else {
        return null;
      }
    })
  );
};
