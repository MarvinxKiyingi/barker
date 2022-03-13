import { Divider, styled } from '@mui/material';

const StyleDevider = styled(Divider)(({ theme }) => ({
  '&.MuiDivider-root': {
    '&:before': {
      position: 'initial',
    },
    '&:after': {
      position: 'initial',
    },
  },
}));

export const StyledDevider = () => {
  return <StyleDevider>OR</StyleDevider>;
};
