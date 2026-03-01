import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { MovieDetails } from "@/lib/api";
import { MovieVideos } from "@/lib/get-movie-video";
import { Star, Play, Clapperboard } from "lucide-react";

type MovieDetailMovieTitleProps = {
  movie: MovieDetails;
  videos: MovieVideos;
};

export const MovieDetailMovieTitle = ({
  movie,
  videos,
}: MovieDetailMovieTitleProps) => {
  const trailer = videos.results.find(
    (video) => video.site === "YouTube" && video.type === "Trailer",
  );

  return (
    <div className="md:px-10 lg:px-20 xl:px-35 2xl:px-100">
      <div className="flex justify-between items-center px-5 mt-8 mb-4">
        <div>
          <h3 className="text-2xl font-semibold">{movie.title}</h3>
          <p className="text-sm">
            {movie.release_date} · {movie.adult ? "R" : "PG"} ·{" "}
            {Math.floor(movie.runtime / 60)}h:
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
        <div className="flex gap-13 md:ml-5">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Movie Poster Image"
            className="hidden md:block md:h-63 lg:h-81 xl:h-111 2xl:h-138"
          />
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="Movie Image"
            className="md:h-63 lg:h-81 xl:h-111 2xl:h-138"
          />
        </div>
        <div className="flex items-center gap-3 ml-5 text-white my-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button disabled={!trailer?.key}>
                <DialogTitle className="flex gap-2">
                  <Play /> Play Trailer
                </DialogTitle>
              </Button>
            </DialogTrigger>

            {trailer?.key && (
              <DialogContent className="max-w-4xl p-0 bg-black border-none">
                <iframe
                  src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
                  title="Movie Trailer"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full aspect-video rounded-lg"
                />
              </DialogContent>
            )}
          </Dialog>
          <Button>
            <Clapperboard /> Watch Movie
          </Button>
        </div>
      </div>
    </div>
  );
};
