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

export const DatingCard = () => {
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
      <Card sx={{ maxWidth: '85%' }}>
        <CardMedia component='img' height='100%' image='https://cdn2.thedogapi.com/images/Tu1CbaVud.jpg' alt='card media' />
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
              Lizard
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
              50cm
            </Box>
          </Box>

          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <StyledDeclinedButton sx={{ color: 'white', background: '#092C4C' }}>
          <CloseIcon />
        </StyledDeclinedButton>
        <StyledLikeButton sx={{ color: 'white', background: '#4C6B84' }}>
          <PetsIcon />
        </StyledLikeButton>
      </Box>
    </Box>
  );
};
