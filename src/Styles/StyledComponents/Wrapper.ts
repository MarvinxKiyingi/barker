import { Box, styled } from '@mui/material';

export const MainContentWrapper = styled(Box)(({ theme }) => ({
  '@media (max-width:1200px) and (orientation: portrait)': {
    height: '100% !important',
  },
  '@media (max-height:1200px) and (orientation: landscape)': {
    height: '100% !important',
  },
  padding: theme.spacing(),
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    minWidth: '100%',
    height: 1000,
  },
}));
// export const AlternativMainContentWrapper = styled(MainContentWrapper)(({ theme }) => ({
//   '@media (max-width:1200px) and (orientation: portrait)': {
//     height: '100% !important',
//   },
//   '@media (max-height:1200px) and (orientation: landscape)': {
//     height: '100% !important',
//   },
//   padding: theme.spacing(),
//   width: '100%',
//   [theme.breakpoints.up('lg')]: {
//     minWidth: '100%',
//     height: 1000,
//   },
// }));

export const NavWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(2, 0),
  [theme.breakpoints.up('md')]: {
    margin: theme.spacing(6, 0),
  },
}));
export const AlternativNavWrapper = styled(NavWrapper)(({ theme }) => ({
  margin: 'unset',
}));
export const NavBarWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5rem',
}));
