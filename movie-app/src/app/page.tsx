import { getMovies } from "../lib/getData";
import { Hero } from "./_components/Hero";
import { MoviesList } from "./_components/MovieList";

export default async function Home() {
  const upcomingMovies = await getMovies("upcoming", "1");
  const topRatedMovies = await getMovies("top_rated", "1");
  const popularMovies = await getMovies("popular", "1");
  const nowPlayingMovies = await getMovies("now_playing", "1");

  return (
    <div className=" 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
      <Hero play="Now Playing:" data={nowPlayingMovies} />
      <MoviesList label="Upcoming" listLabel="upcoming" data={upcomingMovies} />
      <MoviesList
        label="Top Rated"
        listLabel="top_rated"
        data={topRatedMovies}
      />
      <MoviesList label="Popular" listLabel="popular" data={popularMovies} />
    </div>
  );
}
