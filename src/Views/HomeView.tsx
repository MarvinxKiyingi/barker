import { Link } from 'react-router-dom';

export const HomeView = () => {
  return (
    <div>
      <p>Sign in or sign up to get started</p>
      <button>Google</button>
      <button>Facebook</button>
      <Link to='/signup'>
        <button>E-mail</button>
      </Link>
    </div>
  );
};
