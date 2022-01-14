import React, { useContext } from 'react';

// Models
import { IDatingContext } from '../../Models/IDatingContex';

// Initiating context
export const DatingContex = React.createContext({} as IDatingContext);

// Exporting the context, to be used wherever
export const useDating = () => useContext(DatingContex);

export const DatingContexProvider: React.FC = ({ children }) => {
  // My useStates

  // Used to redirect users to a spesific route

  // Dating provider values
  const values = {};

  return <DatingContex.Provider value={values}>{children}</DatingContex.Provider>;
};
