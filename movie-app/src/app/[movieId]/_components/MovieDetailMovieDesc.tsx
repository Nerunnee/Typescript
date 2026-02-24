import { MovieDetails } from "@/lib/api";
import { Badge } from "@/components/ui/badge";

type MovieDetailMovieDescProps = {
  movie: MovieDetails;
};

export const MovieDetailMovieDesc = ({ movie }: MovieDetailMovieDescProps) => {
  return (
    <div className="md:px-10 lg:px-20 xl:px-35">
      <div className="flex gap-8.5 px-5 mt-8 mb-5">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="Movie Image"
          className="w-25 h-37 md:hidden"
        />
        <div>
          <div className="flex flex-wrap gap-4 mb-5">
            {movie.genres.map((genre) => (
              <Badge key={genre.id} variant={"outline"} className="px-2.5">
                {genre.name}
              </Badge>
            ))}
          </div>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};
