import { Box, styled } from '@mui/material';

export const MainContentWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  '@media (max-width:1200px) and (orientation: portrait)': {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  '@media (max-height:1200px) and (orientation: landscape)': {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  padding: theme.spacing(),
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    height: '100%',
    maxHeight: ' 70%',
    '@media (max-height:1200px) and (orientation: landscape)': {
      maxHeight: ' unset',
    },
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
  margin: 'unset',
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
    maxHeight: 884,
  },
}));
export const LeftWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 0.5,
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  padding: theme.spacing(2),
  paddingTop: 68,
  borderRadius: theme.spacing(2, 0, 0, 2),
}));
export const RightWrapper = styled(Box)(({ theme }) => ({
  flex: 2,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2, 2, 2, 0),
  overflow: 'scroll',
  '&.matchesView': {
    padding: theme.spacing(2, 2, 0, 0),
  },
}));

export const StyledTabsWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(0, 0, 2),
}));
