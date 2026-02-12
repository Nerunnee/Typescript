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
