import { getMovies } from "../lib/getData";
import { Hero } from "./mainPage/_components/Hero";
import { MoviesList } from "./mainPage/_components/MovieList";

export default async function Home({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) {
  const { movieId } = await params;
  const upcomingMovies = await getMovies("upcoming");
  const topRatedMovies = await getMovies("top_rated");
  const popularMovies = await getMovies("popular");
  const nowPlayingMovies = await getMovies("now_playing");

  return (
    <div className="2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
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
