import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { v4 as uuid } from 'uuid';

// Models
import { ISwipeContext } from '../../Models/ISwipeContex';
import { dogInitialValue, IDog } from '../../Models/IDog';

// Firebase
import { useDocument } from 'react-firebase-hooks/firestore';
import { arrayRemove, arrayUnion, doc, DocumentData, updateDoc } from 'firebase/firestore';
import { db } from '../Firebase';

// Initiating context
export const SwipeContex = React.createContext({} as ISwipeContext);

// Exporting the context, to be used wherever
export const useSwipe = () => useContext(SwipeContex);

export const SwipeContexProvider: React.FC = ({ children }) => {
  const { currentUser } = useAuth();
  // My useStates
  const [dog, setDog] = useState<IDog>(dogInitialValue);
  const [randomName, setRandomName] = useState('');
  const [randomAge, setRandomAge] = useState(0);
  const [randomHeight, setRandomHeight] = useState(0);
  const [loading, setLoading] = useState(false);

  const dogNames = require('dog-names');

  // using React Firebase Hooks to retrive the data from firebase
  const [userValue] = useDocument(doc(db, 'Users', `${currentUser?.uid}`));
  const [matchedValues, matchedValuesIsLoading] = useDocument(doc(db, 'Matches', `${currentUser?.uid}`));

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
        console.log(error);
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
    console.log('UserHeight Snapshot', userHeightSnapshot);

    if (randomHeight <= userHeightSnapshot + 6 && randomHeight >= userHeightSnapshot - 6) {
      console.log('Its a Match!!');
      if (currentUser) {
        try {
          const newMatch = {
            id: uuid(),
            name: randomName,
            age: randomAge,
            height: randomHeight,
            breed: dog.breeds[0].name,
            imgUrl: dog.url,
            temperament: dog.breeds[0].temperament,
            bredFor: dog.breeds[0].bred_for,
          };
          const documnetRef = doc(db, 'Matches', currentUser.uid);

          // Atomically add a new match to the "match" array field.
          updateDoc(documnetRef, {
            match: arrayUnion(newMatch),
          });
        } catch (error) {
          alert(error);
        }
      }
    } else {
      getDogs();
    }
  };

  const unMatch = (match: DocumentData | undefined) => {
    if (currentUser && match) {
      const documnetRef = doc(db, 'Matches', currentUser.uid);
      updateDoc(documnetRef, {
        match: arrayRemove(match),
      });
    }
  };
  useEffect(() => {
    getDogs();
  }, []);

  useEffect(() => {
    generateRandomName();
    generateRandomAge();
    generateRandomHeight();
  }, [dog]);
  // Dating provider values
  const values = { getDogs, dog, randomName, randomAge, randomHeight, loading, matchWithDog, matchedValues, matchedValuesIsLoading, unMatch };

  return <SwipeContex.Provider value={values}>{children}</SwipeContex.Provider>;
};
