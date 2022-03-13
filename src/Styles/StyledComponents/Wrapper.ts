import { Box, styled } from '@mui/material';

export const MainContentWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(),
  height: '100%',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    minWidth: '100%',
  },
}));

export const NavWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(2, 0),
}));
