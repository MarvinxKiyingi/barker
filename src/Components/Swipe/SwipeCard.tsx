// importing context
import { useSwipe } from '../../Utils/Contexs/SwipeContex';

// MUI components
import { Box, styled } from '@mui/system';
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

const SwipeCardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 2,
  justifyContent: 'space-around',
  [theme.breakpoints.up('md')]: {
    maxWidth: '70%',
    alignSelf: 'center',
  },
}));
const LoadingContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});
const SwipeCardContent = styled(Card)({
  maxWidth: '90%',
  alignSelf: 'center',
});
const SwipeButtonsContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  margin: theme.spacing(2, 0),
}));

export const SwipeCard = () => {
  const { dog, getDogs, randomName, randomAge, randomHeight, loading, matchWithDog } = useSwipe();

  return (
    <SwipeCardContainer className='swipeCardContainer'>
      {loading ? (
        <LoadingContainer className='loadingContainer'>
          <CircularProgress />
        </LoadingContainer>
      ) : (
        <>
          <SwipeCardContent className='swipeCardContent'>
            <CardMedia component='img' height='fit-content' image={`${dog.url}`} alt='Dog image' />
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
                <Typography
                  className='swipeCardTextAreaTwo_breedName'
                  variant='subtitle1'
                  color='text.secondary'
                  component='div'
                  sx={{ fontWeight: 600 }}
                >
                  {dog.breeds[0].name}
                </Typography>
                <Typography className='swipeCardTextAreaTwo_temperament' variant='body2' color='text.secondary'>
                  {dog.breeds[0].temperament}
                </Typography>
              </Box>
            </CardContent>
          </SwipeCardContent>

          <SwipeButtonsContainer className={'SwipeButtonsContainer'}>
            <StyledDeclinedButton onClick={() => getDogs()}>
              <CloseIcon className='SwipeButtonsContainer_CloseIcon' fontSize='inherit' />
            </StyledDeclinedButton>
            <StyledLikeButton onClick={() => matchWithDog()}>
              <PetsIcon className='SwipeButtonsContainer_PetsIcon' fontSize='inherit' />
            </StyledLikeButton>
          </SwipeButtonsContainer>
        </>
      )}
    </SwipeCardContainer>
  );
};
