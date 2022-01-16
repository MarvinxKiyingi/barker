import { useNavigate } from 'react-router-dom';

// MUI
import { Avatar, Box, Card, CardMedia, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Matches = () => {
  // Used to redirect users to a spesific route
  const navigate = useNavigate();
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

      <Box className='matchWrapper_matchContent' sx={{ display: 'flex', alignItems: 'center', m: '1rem 0rem' }}>
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
      </Box>
    </Box>
  );
};
