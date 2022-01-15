import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';

// Npm packages
import { useNavigate } from 'react-router-dom';

// Models
import { IDatingContext } from '../../Models/IDatingContex';
import { dogInitialValue, IDog } from '../../Models/IDog';

// Initiating context
export const DatingContex = React.createContext({} as IDatingContext);

// Exporting the context, to be used wherever
export const useDating = () => useContext(DatingContex);

export const DatingContexProvider: React.FC = ({ children }) => {
  // My useStates
  const [dog, setDog] = useState<[IDog]>([dogInitialValue]);
  const [randomAge, setRandomAge] = useState(0);
  const [randomHeight, setRandomHeight] = useState(0);
  const [isError, setIsError] = useState(false);
  const lifeSpan = dog[0].breeds[0].life_span;
  const heightMetric = dog[0].breeds[0].height.metric;

  // Used to redirect users to a spesific route
  const navigate = useNavigate();

  const getDogs = async () => {
    axios
      .get<[IDog]>('https://api.thedogapi.com/v1/images/search')
      .then((res) => {
        if (dog && dog[0].breeds !== undefined) {
          setDog(res.data);
          generateRandomAge();
          generateRandomHeight();
          // setIsError(false);
        }
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
      });
  };

  // Extract numbers from a string
  function getNumbersOnly(props: any) {
    const str = props;
    const extractedNumbers = str.match(/\d+/g);

    return extractedNumbers;
  }

  // Returns a random age based on the feted dog object
  const generateRandomAge = () => {
    if (getNumbersOnly(lifeSpan)) {
      const min = 1;
      const max = parseInt(getNumbersOnly(lifeSpan)[1]);
      setRandomAge(Math.floor(Math.random() * (max - min)) + min);
      // return Math.floor(Math.random() * (max - min)) + min;
    }
    // if(getNumbersOnly === NaN)
  };

  // Returns a random height based on the feted dog object
  const generateRandomHeight = () => {
    if (getNumbersOnly(heightMetric)) {
      const min = parseInt(getNumbersOnly(heightMetric)[0]);
      const max = parseInt(getNumbersOnly(heightMetric)[1]);
      setRandomHeight(Math.floor(Math.random() * (max - min)) + min);
      // return Math.floor(Math.random() * (max - min)) + min;
    }
  };
  useEffect(() => {
    getDogs();
  }, []);
  // Dating provider values
  const values = { getDogs, dog, generateRandomAge, generateRandomHeight, isError };

  return <DatingContex.Provider value={values}>{children}</DatingContex.Provider>;
};
