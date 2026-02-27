import { getMovieByGenreId } from "@/lib/get-movies-by-genre-id";
import Link from "next/link";
import { MoviesListMovieCard } from "@/components/MovieListMovieCard";
import { getMovieByGenres } from "@/lib/get-genre";
import { Badge } from "@/components/ui/badge";

export const SearchGenre = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { genre } = await searchParams;
  const { results } = await getMovieByGenreId(String(genre));
  const { genres } = await getMovieByGenres();

  const selectedGenreName = genres.find(
    (g) => String(g.id) === String(genre),
  )?.name;

  return (
    <div className="flex flex-col px-5 md:px-15 lg:flex-row lg:gap-7">
      <div>
        <p className="text-2xl mt-3 mb-8">Search filter</p>
        <div className="max-w-97 lg:w-96.75">
          <div className="flex flex-col gap-1 mb-5">
            <p>Search by genre</p>
            <p>See lists of movies by genre</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-5">
            {genres.map((genre) => (
              <Link href={`?genre=${genre.id}`} key={genre.id}>
                <Badge
                  key={genre.id}
                  variant={
                    String(genre) === String(genre.id) ? "default" : "outline"
                  }
                  className="px-2.5 cursor-pointer"
                >
                  {genre.name}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:border lg:bg-gray-100 lg:mt-20"></div>

      <div className="lg:mt-11">
        <p className="font-semibold text-xl my-8">
          {results.length} titles in {selectedGenreName ?? "All"}
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
    </div>
  );
};
