import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Logo } from './Components/Logo/Logo';
import { HomeView } from './Views/HomeView';

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
        </Routes>
      </header>
    </div>
  );
}

export default App;
