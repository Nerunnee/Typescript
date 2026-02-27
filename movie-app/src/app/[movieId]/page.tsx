import { getMovieById } from "@/lib/api";
import { getMovieByCredits } from "@/lib/credits";
import { MovieDetailMovieTitle } from "./_components/MovieDetailMovieTitle";
import { MovieDetailMovieDesc } from "./_components/MovieDetailMovieDesc";
import { MovieDetailCredits } from "./_components/MovieDetailCredits";
import { getSimilarMovies } from "@/lib/get-similar-movie";
import { MoviesList } from "./_components/MoviesList";

export default async function MovieDetailsPage({
  params,
  searchParams,
}: {
  params: Promise<{ movieId: string }>;
  searchParams: Promise<{ page: string | undefined }>;
}) {
  const { movieId } = await params;
  const { page } = await searchParams;
  const movie = await getMovieById(movieId);
  const credits = await getMovieByCredits(movieId);
  const similar = await getSimilarMovies(movieId, "similar", page);
  const listLabel: string = "";

  return (
    <div>
      <MovieDetailMovieTitle movie={movie} />
      <MovieDetailMovieDesc movie={movie} />
      <MovieDetailCredits credits={credits} />
      <MoviesList
        label="More Like"
        listLabel="similar"
        data={similar}
        movieId={movieId}
      />
    </div>
  );
}
