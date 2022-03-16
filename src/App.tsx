import './App.scss';
import { AuthContexProvider } from './Utils/Contexs/AuthContext';
import { Routes, Route } from 'react-router-dom';
import { SignInView } from './Views/SignInView';
import { ErrorPage } from './Views/ErrorView';
import { SignUpView } from './Views/SignUpView';
import { SwipeView } from './Views/SwipeView';
import { ResetPasswordView } from './Views/ResetPasswordView';
import { CreateProfileView } from './Views/CreateProfileView';
import { PrivateRoute } from './Utils/PrivateRoute';
import { ProfileView } from './Views/ProfileView';
import { SwipeContexProvider } from './Utils/Contexs/SwipeContex';
import { MatchesView } from './Views/MatchesView';
import { MessageView } from './Views/MessageView';

//Mui theme
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Styles/theme';

//Styled components
import { MainContentWrapper } from './Styles/StyledComponents/Wrapper';

function App() {
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <AuthContexProvider>
          <SwipeContexProvider>
            <header className='appWrapper'>
              <Routes>
                <Route path='/' element={<PrivateRoute component={SwipeView} />} />
                <Route
                  path='/signin'
                  element={
                    <MainContentWrapper className='signInViewWrapper'>
                      <SignInView />
                    </MainContentWrapper>
                  }
                />
                <Route
                  path='/signup'
                  element={
                    <MainContentWrapper className='signUpViewWrapper'>
                      <SignUpView />
                    </MainContentWrapper>
                  }
                />
                <Route
                  path='/resetpassword'
                  element={
                    <MainContentWrapper className='resetPasswordViewWrapper'>
                      <ResetPasswordView />
                    </MainContentWrapper>
                  }
                />
                <Route path='/createprofile' element={<PrivateRoute component={CreateProfileView} />} />
                <Route path='/profile' element={<PrivateRoute component={ProfileView} />} />
                <Route path='/matches' element={<PrivateRoute component={MatchesView} />} />
                <Route path='/matches/:id' element={<PrivateRoute component={MessageView} />} />
                <Route
                  path='*'
                  element={
                    <div className='appContent'>
                      <ErrorPage />
                    </div>
                  }
                />
              </Routes>
            </header>
          </SwipeContexProvider>
        </AuthContexProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
