import './App.scss';
import { AuthContexProvider } from './Utils/Contexs/AuthContext';
import { Routes, Route } from 'react-router-dom';
import { LogoLarge } from './Components/Logo/Logo';
import { SignInView } from './Views/SignInView';
import { ErrorPage } from './Views/ErrorView';
import { SignUpView } from './Views/SignUpView';
import { SwipeView } from './Views/SwipeView';
import { ResetPasswordView } from './Views/ResetPasswordView';
import { CreateProfileView } from './Views/CreateProfileView';
import { PrivateRoute } from './Utils/PrivateRoute';

function App() {
  return (
    <div className='app'>
      <AuthContexProvider>
        <header className='appWrapper'>
          <Routes>
            <Route
              path='/'
              element={
                <div className='appContent'>
                  <nav>
                    <LogoLarge />
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
                    <LogoLarge />
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
                    <LogoLarge />
                  </nav>
                  <ResetPasswordView />
                </div>
              }
            />
            <Route
              path='/createprofile'
              element={
                <div className='resetPasswordViewWrapper'>
                  <nav>
                    <LogoLarge />
                  </nav>
                  <CreateProfileView />
                </div>
              }
            />
            <Route path='/swipe' element={<PrivateRoute component={SwipeView} />} />
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
      </AuthContexProvider>
    </div>
  );
}

export default App;
