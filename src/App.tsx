import './App.scss';

import { SwipeContexProvider } from './Utils/Contexs/SwipeContex';

//Mui theme
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Styles/theme';

//Styled components
import { AppWrapper } from './Views/AppWrapper';

function App() {
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <SwipeContexProvider>
          <AppWrapper />
        </SwipeContexProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
