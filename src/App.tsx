import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { LogoLarge } from './Components/Logo/Logo';
import { SignInView } from './Views/SignInView';
import { ErrorPage } from './Views/ErrorView';
import { SignUpView } from './Views/SignUpView';
import { AuthContexProvider } from './Utils/Contexs/AuthContext';

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
