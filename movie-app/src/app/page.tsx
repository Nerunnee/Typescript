// "use client";
import { getMovies } from "../../utils/getData";
import { Hero } from "./about/_components/Hero";
import { MoviesList } from "./about/_components/MovieList";
// import { useEffect } from "react";
import Link from "next/link";

export default async function Home() {
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const movieData = await getUpcomingMovies();
  //     console.log(movieData);
  //   };
  //   fetchMovies();
  // }, []);

  const upcomingMovies = await getMovies("upcoming");
  const topRatedMovies = await getMovies("top_rated");
  const popularMovies = await getMovies("popular");
  const nowPlayingMovies = await getMovies("now_playing");
  const listLabel: string = "";
  return (
    <div className="2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
      <Link href="/movieDetails"></Link>
      <Hero play="Now Playing:" data={nowPlayingMovies} />
      <MoviesList listLabel="Upcoming" data={upcomingMovies} />
      <MoviesList listLabel="Top Rated" data={topRatedMovies} />
      <MoviesList listLabel="Popular" data={popularMovies} />
    </div>
  );
}
