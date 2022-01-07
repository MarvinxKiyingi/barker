import { Link } from 'react-router-dom';
import { SignUp } from '../Components/SignUp/SignUp';

//SASS
import '../Styles/Scss/SignUpView.scss';

export const SignUpView = () => {
  return (
    <div className='signUpWrapper'>
      <h3 className='actionTitle'>Create account</h3>
      <p>
        Already have an account? <Link to={'/login'}>Sign in</Link>
      </p>
      <SignUp />
    </div>
  );
};
