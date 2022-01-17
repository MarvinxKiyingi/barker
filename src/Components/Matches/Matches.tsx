import { useNavigate } from 'react-router-dom';

// MUI
import { Avatar, Box, CardMedia, CircularProgress, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSwipe } from '../../Utils/Contexs/SwipeContex';

import { DocumentData } from 'firebase/firestore';
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';

export const Matches = () => {
  // Used to redirect users to a spesific route
  const navigate = useNavigate();

  const { matchedValues, matchedValuesIsLoading } = useSwipe();
  const matchedSnapShot: DocumentData | undefined = matchedValues?.data()?.match;

  matchedSnapShot?.map((match: DocumentData | undefined) => console.log(match ? match : null));
  // let matches: DocumentData = matchesSnapShot?.forEach((match: DocumentData) => {
  //   <>
  //     <p>{match.name}</p>
  //   </>;
  // });

  return (
    <Box className='matchWrapper' sx={{ p: '0rem 0.5rem' }}>
      <Box className='matchWrapper_header' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pr: ' 0.75rem' }}>
        <IconButton onClick={() => navigate('/')} size='large'>
          <ArrowBackIcon fontSize='inherit' />
        </IconButton>

        <Typography component='h2' className='matchWrapper_header_headerText' sx={{ fontWeight: 'bold', fontSize: '1.3rem', textAlign: 'center' }}>
          Matches
        </Typography>
      </Box>
      {/* {matchedSnapShot?.map((product: DocumentData | undefined) => {
        <div className='card' key={product?.id}>
          <h3>hej</h3>
        </div>;
      })} */}

      {/* {matchedValuesIsLoading ? <CircularProgress /> : matches} */}

      {/* <Box className='matchWrapper_matchContent' sx={{ display: 'flex', alignItems: 'center', m: '1rem 0rem' }}>
        <Avatar sx={{ width: '5rem', height: '5rem', m: '0rem 1rem' }}>
          <CardMedia
            component='img'
            height='100%'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKP3bhxjPy_m_gQ-qS_GskS0QLSn7Hf8Nsw&usqp=CAU'
            alt='Dog image'
          ></CardMedia>
        </Avatar>
        <Typography component='h3' sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
          Dog breed "Name"
        </Typography>
      </Box> */}

      {/* <Box className='matchWrapper_matchContent' sx={{ display: 'flex', alignItems: 'center', m: '1rem 0rem' }}>
        <Avatar sx={{ width: '5rem', height: '5rem', m: '0rem 1rem' }}>
          <CardMedia
            component='img'
            height='100%'
            image='https://images.squarespace-cdn.com/content/v1/5c336783f2e6b11a9d3b5693/1577151954302-PO4NG38YH8TL06T5L9UE/brown-white-rescue-dog-portrait-studio.jpg'
            alt='Dog image'
          ></CardMedia>
        </Avatar>
        <Typography component='h3' sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
          Dog breed "Name"
        </Typography>
      </Box>

      <Box className='matchWrapper_matchContent' sx={{ display: 'flex', alignItems: 'center', m: '1rem 0rem' }}>
        <Avatar sx={{ width: '5rem', height: '5rem', m: '0rem 1rem' }}>
          <CardMedia
            component='img'
            height='100%'
            image='https://www.pastelpetportraits.co.uk/wp-content/uploads/2021/05/petportraitsfromphotosuk.jpg'
            alt='Dog image'
          ></CardMedia>
        </Avatar>

        <Typography component='h3' sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
          Dog breed "Name"
        </Typography>
      </Box> */}
    </Box>
  );
};
