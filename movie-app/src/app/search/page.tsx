import { getMovieByGenreId } from "@/lib/get-movies-by-genre-id";
import Link from "next/link";
import { MoviesListMovieCard } from "@/components/MovieListMovieCard";
import { getMovieByGenres } from "@/lib/get-genre";
import { Badge } from "@/components/ui/badge";

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { genre } = await searchParams;
  const { results } = await getMovieByGenreId(String(genre));
  const { genres } = await getMovieByGenres();

  return (
    <div className="flex flex-col px-5">
      <p className="text-2xl mt-3 mb-8">Search filter</p>

      <div className="max-w-97">
        <div className="flex flex-col gap-1 mb-5">
          <p>Search by genre</p>
          <p>See lists of movies by genre</p>
        </div>
        <div className="flex flex-wrap gap-4 mt-5">
          {genres.map((genre) => (
            <Link href={`?genre=${genre.id}`} key={genre.id}>
              <Badge key={genre.id} variant={"outline"} className="px-2.5">
                {genre.name}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      <p className="my-8">{results.length} titles in</p>

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
  );
}
