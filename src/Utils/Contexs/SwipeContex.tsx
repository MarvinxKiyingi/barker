import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Models
import { ISwipeContext } from '../../Models/ISwipeContex';
import { dogInitialValue, IDog } from '../../Models/IDog';

// Initiating context
export const SwipeContex = React.createContext({} as ISwipeContext);

// Exporting the context, to be used wherever
export const useSwipe = () => useContext(SwipeContex);

export const SwipeContexProvider: React.FC = ({ children }) => {
  // My useStates
  const [dog, setDog] = useState<IDog>(dogInitialValue);
  const [randomName, setRandomName] = useState('');
  const [randomAge, setRandomAge] = useState(0);
  const [randomHeight, setRandomHeight] = useState(0);
  const [loading, setLoading] = useState(false);

  const dogNames = require('dog-names');

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
  useEffect(() => {
    getDogs();
  }, []);

  useEffect(() => {
    generateRandomName();
    generateRandomAge();
    generateRandomHeight();
  }, [dog]);
  // Dating provider values
  const values = { getDogs, dog, randomName, randomAge, randomHeight, loading };

  return <SwipeContex.Provider value={values}>{children}</SwipeContex.Provider>;
};