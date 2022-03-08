import { Container, styled } from '@mui/material';

export const StyledSocialMediaOptions = styled(Container)(({ theme }) => ({
  display: 'flex',
  height: theme.spacing(8),
  padding: theme.spacing(2, 0),
  justifyContent: 'space-around',

  // [theme.breakpoints.up('md')]:{
  //   display:'flex'
  // },
}));
