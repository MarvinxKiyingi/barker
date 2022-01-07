import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Initialize Firebase
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDJA29GMAzbrsWO8JI5eSpVvSuHt32qj2Y',
  authDomain: 'barker-9f2cf.firebaseapp.com',
  projectId: 'barker-9f2cf',
  storageBucket: 'barker-9f2cf.appspot.com',
  messagingSenderId: '424472745275',
  appId: '1:424472745275:web:637dee5142220d12f7131e',
});

//Exports
export const auth = getAuth();
export const getCreateUserWithEmailAndPassword = createUserWithEmailAndPassword;
export const db = getFirestore(firebaseApp);
