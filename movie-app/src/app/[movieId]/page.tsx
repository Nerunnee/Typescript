import { Button } from "@/components/ui/button";
import { Star, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getMovieById, MovieDetails } from "@/lib/api";

export default async function MovieDetailsPage({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) {
  const { movieId } = await params;

  const movie = await getMovieById(movieId);

  return (
    <div>
      <MovieDetailMovieTitle movie={movie} />
      <MovieDetailMovieDesc movie={movie} />
    </div>
  );
}

type MovieDetailMovieTitleProps = {
  movie: MovieDetails;
};

const MovieDetailMovieTitle = ({ movie }: MovieDetailMovieTitleProps) => {
  return (
    <div>
      <div className="flex justify-between px-5 mt-8 mb-4">
        <div>
          <h3 className="text-2xl font-semibold">{movie.title}</h3>
          <p className="text-sm">
            {movie.release_date} · PG · {Math.floor(movie.runtime / 60)}h:
            {movie.runtime % 60}m
          </p>
        </div>
        <div className="flex items-center gap-1 text-sm mr-3">
          <Star fill="#FDE047" stroke="none" />
          <div>
            <div className="flex">
              <p>{movie.vote_average.toFixed(1)}</p>
              <span className="text-gray-400">/</span>
              <span className="text-gray-400">10</span>
            </div>
            <p className="text-gray-400">{movie.vote_count}k votes</p>
          </div>
        </div>
      </div>

      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="Movie Image"
          className="relative"
        />
        <div className="flex items-center gap-3 absolute top-1/2 ml-3 translate-x-0 text-white mb-3">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full text-black"
          >
            <Play />
          </Button>
          <p>Play Trailer</p>
          <p>
            {Math.floor(movie.runtime / 60)}h:
            {movie.runtime % 60}m
          </p>
        </div>
      </div>
    </div>
  );
};

type MovieDetailMovieDescProps = {
  movie: MovieDetails;
};

const MovieDetailMovieDesc = ({ movie }: MovieDetailMovieDescProps) => {
  return (
    <div>
      <div className="flex justify-between p-5">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="Movie Image"
          className="w-25 h-37"
        />
        <div className="w-50 ">
          <div className=" flex flex-wrap gap-4 mt-4 mb-5">
            {movie.genres.map((genre) => (
              <Badge key={genre.id} variant={"outline"} className="px-2.5">
                {genre.name}
              </Badge>
            ))}
          </div>
          <p>{movie.overview}</p>
        </div>
      </div>

      {/* <div className="px-5">
        {movie..map(() => (
        <div key={movie.id} className="flex gap-13.25">
          <p className="w-30">{movie.budget}</p>
          <p>{movie.tagline}</p>
        </div>
        }
      </div> */}
    </div>
  );
};
