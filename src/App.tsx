import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { LogoLarge } from './Components/Logo/Logo';
import { HomeView } from './Views/HomeView';
import { ErrorPage } from './Views/ErrorView';
import { SignUpView } from './Views/SignUpView';

function App() {
  return (
    <div className='app'>
      <header className='appWrapper'>
        <Routes>
          <Route
            path='/'
            element={
              <div className='appContent'>
                <nav>
                  <LogoLarge />
                </nav>
                <HomeView />
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
    </div>
  );
}

export default App;
