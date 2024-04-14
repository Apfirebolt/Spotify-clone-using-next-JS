'use client'

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

// create Provider
export const GlobalProvider = ({ children }) => {
  const [enabled, setEnabled] = useState(false);
  const [myName, setMyName] = useState("John Doe");

  return (
    <GlobalContext.Provider value={{ enabled, setEnabled, myName, setMyName }}>
      {children}
    </GlobalContext.Provider>
  );
};

// custom hook to use the context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};