"use client";

import { Fragment, useState, useEffect } from "react";
import { useAnimeContext } from "../../context/AnimeContext";
import httpClient from "../../utils/interceptor";

export default function About() {
  const { animeList, setAnimeList, isLoading, setIsLoading } = useAnimeContext();

  console.log("Anime List ", animeList);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        setIsLoading(true)
        const response = await httpClient.get("anime");
        console.log("Response data ", response.data);
        setAnimeList(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnime();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center text-red-700">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p>Welcome to the Anime page</p>
        {isLoading && <p>Loading...</p>}
        {animeList.map((anime) => (
          <div key={anime.mal_id} className="flex flex-col items-center">
            <h2>{anime.title}</h2>
            <p>{anime.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
