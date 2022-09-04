import { Routes, Route } from 'react-router-dom';
import { MainContentWrapper } from '../Styles/StyledComponents/Wrapper';
import { PrivateRoute } from '../Utils/PrivateRoute';
import { CreateProfileView } from './CreateProfileView';
import { EditProfileView } from './EditProfileView';
import { ErrorPage } from './ErrorView';
import { MatchesView } from './MatchesView';
import { MessageView } from './MessageView';
import { ProfileView } from './ProfileView';
import { ResetPasswordView } from './ResetPasswordView';
import { SignInView } from './SignInView';
import { SignUpView } from './SignUpView';
import { SwipeView } from './SwipeView';

export const AppWrapper = () => {
  return (
    <div className='appWrapper'>
      <Routes>
        <Route path='/' element={<PrivateRoute component={SwipeView} />} />
        <Route
          path='/signin'
          element={
            <MainContentWrapper className='signInViewWrapper'>
              <SignInView />
            </MainContentWrapper>
          }
        />
        <Route
          path='/signup'
          element={
            <MainContentWrapper className='signUpViewWrapper'>
              <SignUpView />
            </MainContentWrapper>
          }
        />
        <Route
          path='/resetpassword'
          element={
            <MainContentWrapper className='resetPasswordViewWrapper'>
              <ResetPasswordView />
            </MainContentWrapper>
          }
        />
        <Route path='/createprofile' element={<PrivateRoute component={CreateProfileView} />} />
        <Route path='/profile' element={<PrivateRoute component={ProfileView} />} />
        <Route path='/editprofile' element={<PrivateRoute component={EditProfileView} />} />
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
    </div>
  );
};
