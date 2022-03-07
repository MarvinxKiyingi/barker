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
      fontSize: 96,
    },
    h2: {
      fontSize: 60,
    },
    h3: {
      fontSize: 48,
    },
    h4: {
      fontSize: 34,
    },
    h5: {
      fontSize: 24,
    },
    h6: {
      fontSize: 20,
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 14,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontSize: 14,
    },
    caption: {
      fontSize: 12,
    },
    overline: {
      fontSize: 10,
    },
  },
});
