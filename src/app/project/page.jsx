"use client";

import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAnimes } from "../../features/animeSlice";

export default function AnimeRedux() {
  const { animeList, isLoading } = useSelector((state) => state.anime);

  const dispatch = useDispatch();

  console.log('Animer list data ', animeList);

  useEffect(() => {
    dispatch(getAnimes());
  }, [dispatch]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center text-red-700">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p>Welcome to the Anime Redux page</p>
      </div>
      {isLoading && <p>Loading...</p>}
        {animeList.map((anime) => (
          <div key={anime.mal_id} className="flex flex-col items-center">
            <h2>{anime.title}</h2>
            <p>{anime.description}</p>
          </div>
        ))}
    </main>
  );
}
