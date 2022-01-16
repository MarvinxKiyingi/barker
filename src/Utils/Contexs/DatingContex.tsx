import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Models
import { IDatingContext } from '../../Models/IDatingContex';
import { dogInitialValue, IDog } from '../../Models/IDog';

// Initiating context
export const DatingContex = React.createContext({} as IDatingContext);

// Exporting the context, to be used wherever
export const useDating = () => useContext(DatingContex);

export const DatingContexProvider: React.FC = ({ children }) => {
  // My useStates
  const [dog, setDog] = useState<IDog>(dogInitialValue);
  const [randomAge, setRandomAge] = useState(0);
  const [randomHeight, setRandomHeight] = useState(0);
  const [loading, setLoading] = useState(false);

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
    generateRandomAge();
    generateRandomHeight();
  }, [dog]);
  // Dating provider values
  const values = { getDogs, dog, randomAge, randomHeight, loading };

  return <DatingContex.Provider value={values}>{children}</DatingContex.Provider>;
};
