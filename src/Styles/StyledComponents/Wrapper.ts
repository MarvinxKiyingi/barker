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
    height: '50%',
    minHeight: 1000,
  },
}));

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
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
  },
}));
export const NavBarWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5rem',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center',
    '.profileIconButton,.chatIconButton': {
      display: 'none',
    },
  },
}));
export const IsMobile = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
export const IsDesktop = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
export const LeftWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
}));
export const RightWrapper = styled(Box)(({ theme }) => ({
  flex: 2,
  display: 'flex',
  flexDirection: 'column',
}));
