import { useAuth } from '../Utils/Contexs/AuthContext';

export const SwipeView = () => {
  const { currentUser, signOutUser } = useAuth();
  return (
    <div>
      <h1>Swipe View</h1>
      <p>The current user logged in: {currentUser?.email}</p>
      <button onClick={() => signOutUser()}>Log out</button>
    </div>
  );
};
