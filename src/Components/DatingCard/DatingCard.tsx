import { Box } from '@mui/system';
import { StyledDeclinedButton, StyledLikeButton } from '../../Styles/StyledComponents/Button';
import PetsIcon from '@mui/icons-material/Pets';
import CloseIcon from '@mui/icons-material/Close';

//card
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import HeightIcon from '@mui/icons-material/Height';
import { useDating } from '../../Utils/Contexs/DatingContex';
import { Button } from '@mui/material';

export const DatingCard = () => {
  const { dog, getDogs, generateRandomAge, generateRandomHeight, isError } = useDating();

  console.log(dog);
  // console.log(randomAge);
  // console.log(randomHeight);

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
      {isError ? (
        <Box>
          <p> something went wrong try again</p>
          <Button onClick={() => getDogs()}> Try again </Button>
        </Box>
      ) : (
        <Card sx={{ maxWidth: '85%' }}>
          <CardMedia component='img' height='100%' image={`${dog[0].url}`} alt='card media' />
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.35em',
              }}
            >
              <Typography gutterBottom variant='h5' component='div'>
                {dog[0].breeds[0].name},{`${generateRandomAge()}`}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '0.35em',
                  lineHeight: '1.334',
                }}
              >
                <HeightIcon />
                {`${generateRandomHeight()}cm`}
              </Box>
            </Box>

            <Typography variant='body2' color='text.secondary'>
              {dog[0].breeds[0].temperament}
            </Typography>
          </CardContent>
        </Card>
      )}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '0.5rem',
        }}
      >
        <StyledDeclinedButton onClick={() => getDogs()} sx={{ color: 'white', background: '#092C4C' }}>
          <CloseIcon />
        </StyledDeclinedButton>
        <StyledLikeButton sx={{ color: 'white', background: '#4C6B84' }}>
          <PetsIcon />
        </StyledLikeButton>
      </Box>
    </Box>
  );
};
