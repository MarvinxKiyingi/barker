import { Divider, styled } from '@mui/material';

const StyleDevider = styled(Divider)(({ theme }) => ({
  '&.MuiDivider-root': {
    '&:before': {
      position: 'initial',
    },
    '&:after': {
      position: 'initial',
    },
    padding: theme.spacing(2, 0),
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      maxWidth: 600,
      margin: '0 auto',
    },
  },
}));

export const StyledDevider = () => {
  return <StyleDevider>OR</StyleDevider>;
};
