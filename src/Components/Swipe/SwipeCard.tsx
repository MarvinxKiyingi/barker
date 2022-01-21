// importing context
import { useSwipe } from '../../Utils/Contexs/SwipeContex';

// MUI components
import { Box } from '@mui/system';
import { StyledDeclinedButton, StyledLikeButton } from '../../Styles/StyledComponents/Button';
import PetsIcon from '@mui/icons-material/Pets';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';

//card
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import HeightIcon from '@mui/icons-material/Height';

export const SwipeCard = () => {
  const { dog, getDogs, randomName, randomAge, randomHeight, loading, matchWithDog } = useSwipe();

  return (
    <Box
      sx={{
        minHeight: '94vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <Card sx={{ maxWidth: '85%' }}>
          <CardMedia component='img' height='100%' image={`${dog.url}`} alt='Dog image' />
          <CardContent>
            <Box
              className='swipeCardTextAreaOne'
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography className='swipeCardTextAreaOne_name' gutterBottom variant='h5' component='div'>
                {randomName}, {`${randomAge}`}
              </Typography>
              <Box
                className='swipeCardTextAreaOne_height'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '0.35em',
                  lineHeight: '1.334',
                }}
              >
                <HeightIcon className='swipeCardTextAreaOne_HeightIcon' />
                {`${randomHeight}cm`}
              </Box>
            </Box>
            <Box className='swipeCardTextAreaTwo'>
              <Typography className='swipeCardTextAreaTwo_breedName' variant='subtitle1' color='text.secondary' component='div' sx={{ fontWeight: 600 }}>
                {dog.breeds[0].name}
              </Typography>
              <Typography className='swipeCardTextAreaTwo_temperament' variant='body2' color='text.secondary'>
                {dog.breeds[0].temperament}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )}
      <Box
        className={'SwipeButtonsWrapper'}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '0.5rem',
        }}
      >
        <StyledDeclinedButton onClick={() => getDogs()} sx={{ color: 'white', background: '#092C4C' }}>
          <CloseIcon className='SwipeButtonsWrapper_CloseIcon' />
        </StyledDeclinedButton>
        <StyledLikeButton onClick={() => matchWithDog()} sx={{ color: 'white', background: '#4C6B84' }}>
          <PetsIcon className='SwipeButtonsWrapper_PetsIcon' />
        </StyledLikeButton>
      </Box>
    </Box>
  );
};
