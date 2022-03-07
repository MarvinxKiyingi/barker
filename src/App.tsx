import './App.scss';
import { AuthContexProvider } from './Utils/Contexs/AuthContext';
import { Routes, Route } from 'react-router-dom';
import { Logo } from './Components/Logo/Logo';
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
                    <div className='signInViewWrapper'>
                      <nav>
                        <Logo />
                      </nav>
                      <SignInView />
                    </div>
                  }
                />
                <Route
                  path='/signup'
                  element={
                    <div className='signUpViewWrapper'>
                      <nav>
                        <Logo />
                      </nav>
                      <SignUpView />
                    </div>
                  }
                />
                <Route
                  path='/resetpassword'
                  element={
                    <div className='resetPasswordViewWrapper'>
                      <nav>
                        <Logo />
                      </nav>
                      <ResetPasswordView />
                    </div>
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
