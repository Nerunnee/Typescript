import { getMovieById } from "@/lib/api";
import { getMovieByCredits } from "@/lib/credits";
import { MovieDetailMovieTitle } from "./_components/MovieDetailMovieTitle";
import { MovieDetailMovieDesc } from "./_components/MovieDetailMovieDesc";
import { MovieDetailCredits } from "./_components/MovieDetailCredits";

export default async function MovieDetailsPage({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) {
  const { movieId } = await params;

  const movie = await getMovieById(movieId);
  const credits = await getMovieByCredits(movieId);

  return (
    <div>
      <MovieDetailMovieTitle movie={movie} />
      <MovieDetailMovieDesc movie={movie} />
      <MovieDetailCredits credits={credits} />
    </div>
  );
}
