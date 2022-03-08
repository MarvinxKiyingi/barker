import { Box, styled } from '@mui/material';

export const MainContentWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(),
  [theme.breakpoints.up('md')]: {
    minWidth: '100%',
  },
}));
