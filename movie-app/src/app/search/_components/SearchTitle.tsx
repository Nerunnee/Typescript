import Link from "next/link";
import { MoviesListMovieCard } from "@/app/shared/MovieListMovieCard";
import { getMovieByGenres } from "@/lib/get-genre";
import { getSearchMovies } from "@/lib/movie-search";
import { Badge } from "@/components/ui/badge";

export const SearchTitle = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { searchValue, genre } = await searchParams;
  const { results: allResults } = await getSearchMovies(String(searchValue));
  const { genres } = await getMovieByGenres();

  const selectedGenreId = genre ? Number(genre) : null;

  const results = selectedGenreId
    ? allResults.filter((movie) => movie.genre_ids.includes(selectedGenreId))
    : allResults;

  const selectedGenreName = genres.find((g) => g.id === selectedGenreId)?.name;

  return (
    <div className="flex flex-col px-5 md:px-15 lg:flex-row lg:gap-7">
      <div>
        <p className="text-2xl mt-3 mb-8">Search results</p>

        <p className="mb-8 font-semibold text-xl">
          {results.length} results for &quot;{searchValue}&quot;
          {selectedGenreName && (
            <span className="text-gray-500 font-normal">
              in {selectedGenreName}
            </span>
          )}
        </p>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {results.map((movie) => (
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
        <div className="flex flex-col gap-1 mb-5">
          <p>Search by genre</p>
          <p>See lists of movies by genre</p>
        </div>
        <div className="flex flex-wrap gap-4 mt-5 lg:w-96.75">
          {genres.map((genre) => (
            <Link
              href={
                selectedGenreId === genre.id
                  ? `?searchValue=${searchValue}`
                  : `?searchValue=${searchValue}&genre=${genre.id}`
              }
              key={genre.id}
            >
              <Badge
                variant={selectedGenreId === genre.id ? "default" : "outline"}
                className="px-2.5 cursor-pointer"
              >
                {genre.name}
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
