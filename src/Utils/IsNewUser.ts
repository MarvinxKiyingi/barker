import { getAdditionalUserInfo, UserCredential } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './Firebase';

export const IsNewSocialMediaUser = (result: UserCredential) => {
  const user = getAdditionalUserInfo(result)?.isNewUser;
  // if New user
  if (user) {
    // redirect users to create a profile
    return 'createprofile';
  } else {
    return '/swipe';
  }
};

export const IsNewEmailUser = async (currentUser: any) => {
  const docRef = doc(db, 'Users', `${currentUser?.uid}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists().valueOf()) {
    console.log('Document data:', docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
};
