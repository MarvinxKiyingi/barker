import { Container, styled } from '@mui/material';

export const ContentWrapper = styled(Container)(({ theme }) => ({
  border: 'solid 4px rgba(255, 255, 255, 0.6)',
  background: 'linear-gradient(106.82deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.12) 99.52%)',
  backdropFilter: 'blur(23.3667px)',
  '-webkit-backdrop-filter': 'blur(23.3667px)',
  borderRadius: 35.05,
  '.devider': {
    padding: theme.spacing(2, 0),
  },
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',

  //   paddingLeft: '0 !important',
  //   paddingRight: '0 !important',
}));
export const AlternativContentWrapper = styled(ContentWrapper)(({ theme }) => ({
  paddingLeft: 'unset',
  paddingRight: 'unset',
  [theme.breakpoints.up('md')]: {
    paddingLeft: 'unset',
    paddingRight: 'unset',
    minHeight: 'unset',
  },
  [theme.breakpoints.up('lg')]: {
    height: '100%',
    maxWidth: 1480,
  },
}));

export const StyledSection = styled('section')(({ theme }) => ({
  '.Illustration': {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(2),
    margin: 'auto 0',
    '.Illustration': {
      display: 'inline-grid',
    },
  },
}));
