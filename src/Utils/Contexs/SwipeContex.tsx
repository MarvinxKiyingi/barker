import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

// local imports
import { useAuth } from './AuthContext';

// Models
import { ISwipeContext } from '../../Models/ISwipeContex';
import { dogInitialValue, IDog } from '../../Models/IDog';
import { ISendMessage } from '../../Models/ISendMessage';

// Firebase
import { useDocument } from 'react-firebase-hooks/firestore';
import { arrayRemove, arrayUnion, doc, DocumentData, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../Firebase';

// Initiating context
export const SwipeContex = React.createContext({} as ISwipeContext);

// Exporting the context, to be used wherever
export const useSwipe = () => useContext(SwipeContex);

export const SwipeContexProvider: React.FC = ({ children }) => {
  // session storage for selectedMatch
  const sessionStorageKey = 'selectedMatch';
  const sessionstoragestring = sessionStorage.getItem(sessionStorageKey);
  const getSessionstorage = JSON.parse(sessionstoragestring!);

  // importing current user from authContext
  const { currentUser } = useAuth();

  // My useStates
  const [dog, setDog] = useState<IDog>(dogInitialValue);
  const [randomName, setRandomName] = useState('');
  const [randomAge, setRandomAge] = useState(0);
  const [randomHeight, setRandomHeight] = useState(0);
  const [randomId, setrandomId] = useState('');
  const [selectedMatch, setSelectedMatch] = useState<DocumentData | undefined>(getSessionstorage || null);

  const [loading, setLoading] = useState(false);
  // Used to generate random dog names
  const dogNames = require('dog-names');

  // Used to redirect users to a spesific route
  const navigate = useNavigate();

  // using React Firebase Hooks to retrive the data from firebase
  const [userValue] = useDocument(doc(db, 'Users', `${currentUser?.uid}`));
  const [matchedValues, matchedValuesIsLoading] = useDocument(doc(db, 'Matches', `${currentUser?.uid}`));
  const [messagesValues, messagesValuesIsLoading] = useDocument(doc(db, 'Messages', `${currentUser?.uid}`));

  const getDogs = async () => {
    axios
      .get<IDog[]>('https://api.thedogapi.com/v1/images/search')
      .then((res) => {
        const dog = res.data[0];
        const breeds = res.data[0].breeds;
        setLoading(true);

        if (breeds[0]?.name) {
          setDog(dog);
          setLoading(false);
        } else {
          getDogs();
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  // Generates a random name
  const generateRandomName = () => {
    const name = dogNames.femaleRandom();
    setRandomName(name);
  };

  // Extract numbers from a string
  function getNumbersOnly(extractedStr: string | null | undefined) {
    setLoading(true);
    if (extractedStr) {
      const str = extractedStr;
      setLoading(false);
      const extractedNumbers = str?.match(/\d+/g);
      return extractedNumbers;
    }
  }

  // Returns a random age based on the fetched dog object
  const generateRandomAge = () => {
    const lifeSpan = dog.breeds[0].life_span;
    if (getNumbersOnly(lifeSpan)) {
      const min = 1;
      const max = parseInt(getNumbersOnly(lifeSpan)![1]);
      const age = Math.floor(Math.random() * (max - min)) + min;
      setRandomAge(age);
    }
  };

  // Returns a random height based on the fetched dog object
  const generateRandomHeight = () => {
    const heightMetric = dog.breeds[0].height.metric;
    if (getNumbersOnly(heightMetric)) {
      const min = parseInt(getNumbersOnly(heightMetric)![0]);
      const max = parseInt(getNumbersOnly(heightMetric)![1]);
      const height = Math.floor(Math.random() * (max - min)) + min;
      setRandomHeight(height);
    }
  };

  const matchWithDog = () => {
    const userHeightSnapshot = userValue?.data()?.height;

    if (randomHeight <= userHeightSnapshot + 6 && randomHeight >= userHeightSnapshot - 6) {
      console.log('Its a Match!!');
      if (currentUser) {
        try {
          const newMatch = {
            id: randomId,
            name: randomName,
            age: randomAge,
            height: randomHeight,
            breed: dog.breeds[0].name,
            imgUrl: dog.url,
            temperament: dog.breeds[0].temperament,
            bredFor: dog.breeds[0].bred_for,
          };
          const matchesRef = doc(db, 'Matches', currentUser.uid);
          const messagesRef = doc(db, 'Messages', currentUser.uid);

          // Atomically add a new match to the "match" array field.
          updateDoc(matchesRef, {
            match: arrayUnion(newMatch),
          });

          // Adds a new name to the messages collection
          setDoc(messagesRef, { [randomId]: [] }, { merge: true });
        } catch (error: any) {
          alert(error);
        }
      }
    } else {
      // generate a new dog.
      getDogs();
    }
  };

  // Remove a match
  const unMatch = (match: DocumentData | undefined) => {
    if (currentUser && match) {
      const documnetRef = doc(db, 'Matches', currentUser.uid);
      updateDoc(documnetRef, {
        match: arrayRemove(match),
      });
    }
  };

  // Runs when you click on a match to view
  const openMessage = (match: DocumentData | undefined) => {
    if (!match) {
      alert('Unfortunately your message was not able to be sent. Try to go back a step and then return back');
    } else {
      sessionStorage.setItem(sessionStorageKey, JSON.stringify(match!));

      setSelectedMatch(match);

      navigate(`/matches/${match?.id}`);
    }
  };

  // Creates a message for the matches dog to see.
  const sendMessage = (props: ISendMessage) => {
    if (currentUser && selectedMatch !== undefined) {
      try {
        const documnetRef = doc(db, 'Messages', currentUser.uid);
        updateDoc(documnetRef, {
          [selectedMatch?.id]: arrayUnion(props),
        });
      } catch (error: any) {
        alert(error);
      }
    }
  };
  useEffect(() => {
    getDogs();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    generateRandomName();
    generateRandomAge();
    generateRandomHeight();
    setrandomId(uuid());
    // eslint-disable-next-line
  }, [dog]);
  useEffect(() => {}, [selectedMatch]);
  // Dating provider values
  const values = {
    getDogs,
    dog,
    randomName,
    randomAge,
    randomHeight,
    loading,
    matchWithDog,
    matchedValues,
    matchedValuesIsLoading,
    unMatch,
    openMessage,
    sendMessage,
    messagesValues,
    messagesValuesIsLoading,
  };

  return <SwipeContex.Provider value={values}>{children}</SwipeContex.Provider>;
};
