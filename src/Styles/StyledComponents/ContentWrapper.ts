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
  //   paddingLeft: '0 !important',
  //   paddingRight: '0 !important',
}));
