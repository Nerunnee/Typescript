import { Button } from "@/components/ui/button";
import { MovieDetails } from "@/lib/api";
import { Star, Play } from "lucide-react";

type MovieDetailMovieTitleProps = {
  movie: MovieDetails;
};

export const MovieDetailMovieTitle = ({
  movie,
}: MovieDetailMovieTitleProps) => {
  return (
    <div>
      <div className="flex justify-between items-center px-5 mt-8 mb-4 md:px-15">
        <div>
          <h3 className="text-2xl font-semibold">{movie.title}</h3>
          <p className="text-sm">
            {movie.release_date} · PG · {Math.floor(movie.runtime / 60)}h:
            {movie.runtime % 60}m
          </p>
        </div>
        <div className="flex flex-col text-center text-sm">
          <div className="flex">
            <Star fill="#FDE047" stroke="none" size={20} />
            <div className="flex ml-1">
              <p>{movie.vote_average.toFixed(1)}</p>
              <span className="text-gray-400">/</span>
              <span className="text-gray-400">10</span>
            </div>
          </div>
          <p className="text-gray-400">{movie.vote_count}k votes</p>
        </div>
      </div>

      <div>
        <div className="flex gap-8">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Movie Poster Image"
            className="hidden md:block"
          />
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="Movie Image"
            className="relative"
          />
        </div>
        <div className="flex items-center gap-3 absolute top-2/5 ml-3 text-white mb-3">
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
