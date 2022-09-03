import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import { AuthContexProvider } from './Utils/Contexs/AuthContext';

ReactDOM.render(
  <BrowserRouter>
    <AuthContexProvider>
      <App />
    </AuthContexProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
