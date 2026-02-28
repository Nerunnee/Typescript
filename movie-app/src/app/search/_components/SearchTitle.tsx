import Link from "next/link";
import { MoviesListMovieCard } from "@/app/shared/MovieListMovieCard";
import { getMovieByGenres } from "@/lib/get-genre";
import { getSearchMovies } from "@/lib/movie-search";
import { GenreList } from "./GenreList";

export const SearchTitle = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { searchValue, genre } = await searchParams;
  const { results } = await getSearchMovies(String(searchValue));
  const { genres } = await getMovieByGenres();

  const selectedGenreIds = genre
    ? String(genre).split(",").filter(Boolean).map(Number)
    : [];

  const filteredResults =
    selectedGenreIds.length > 0
      ? results.filter((movie) =>
          selectedGenreIds.some((id) => movie.genre_ids.includes(id)),
        )
      : results;

  return (
    <div className="flex flex-col px-5 md:px-15 lg:flex-row lg:gap-7">
      <div>
        <p className="text-2xl mt-3 mb-8">Search results</p>

        <p className="mb-8 font-semibold text-xl">
          {results.length} results for {searchValue}
        </p>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredResults.map((movie) => (
            <Link href={`/${movie.id}`} key={movie.id}>
              <MoviesListMovieCard
                img={movie.poster_path}
                rating={movie.vote_average}
                movieName={movie.title}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="lg:border lg:bg-gray-100 lg:mt-20"></div>

      <div className="max-w-97 mt-8 lg:mt-19">
        <GenreList genres={genres} selectedGenre={genre} />
      </div>
    </div>
  );
};
