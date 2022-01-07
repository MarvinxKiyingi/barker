import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <>
      <h1>404</h1>
      <h3>Page not found</h3>
      <Link to='/'>
        <button>Go home</button>
      </Link>
    </>
  );
};
