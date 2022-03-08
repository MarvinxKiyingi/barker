import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#232946',
      dark: '#444862',
    },
    secondary: {
      main: '#b8c1ec',
    },
    error: {
      main: '#eb5757',
    },
    success: {
      main: '#66d87d',
    },
    background: {
      default: '#d4d8f0',
      paper: '#fffffe',
    },
    text: {
      primary: '#232946',
    },
  },
  typography: {
    fontFamily: 'Inter',
    h1: {
      fontSize: 93,
      letterSpacing: '-1.5px',
    },
    h2: {
      fontSize: 58,
      letterSpacing: '-0.5px',
    },
    h3: {
      fontSize: 47,
      letterSpacing: 0,
    },
    h4: {
      fontSize: 33,
      letterSpacing: '0.25px',
    },
    h5: {
      fontSize: 23,
      letterSpacing: 0,
    },
    h6: {
      fontSize: 19,
      letterSpacing: '0.15px',
    },
    subtitle1: {
      fontSize: 16,
      letterSpacing: '0.15px',
    },
    subtitle2: {
      fontSize: 14,
      letterSpacing: '0.1px',
    },
    body1: {
      fontSize: 16,
      letterSpacing: '0.5px',
    },
    body2: {
      fontSize: 14,
      letterSpacing: '0.25px',
    },
    button: {
      fontSize: 14,
      letterSpacing: '1.25px',
    },
    caption: {
      fontSize: 12,
      letterSpacing: '0.4px',
    },
    overline: {
      fontSize: 10,
      letterSpacing: '1.5px',
    },
  },
});
