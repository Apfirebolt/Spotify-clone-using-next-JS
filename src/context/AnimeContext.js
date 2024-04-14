'use client';
import { createContext, useContext, useState } from 'react';

// Create context
const AnimeContext = createContext();

// Create a provider
export function AnimeProvider({ children }) {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimeContext.Provider
      value={{
        animeList,
        setAnimeList,
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}

// Create a custom hook to access context
export function useAnimeContext() {
  return useContext(AnimeContext);
}