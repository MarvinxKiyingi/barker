import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Logo } from './Components/Logo/Logo';
import { HomeView } from './Views/HomeView';
import { ErrorPage } from './Views/ErrorView';

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
                  <Logo />
                </nav>
                <HomeView />
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
