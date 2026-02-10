import { Star } from "lucide-react";

type MoviesListMovieCardProps = {
  img: string;
  rating: number;
  movieName: string;
};

export const MoviesListMovieCard = (props: MoviesListMovieCardProps) => {
  const { img, rating, movieName } = props;
  return (
    <div className="rounded-md w-full">
      <img
        src={`https://image.tmdb.org/t/p/original/${img}`}
        alt="Movie Image"
        className="rounded-t-md w-full"
      />
      <div className="rounded-b-md bg-gray-200 flex flex-col gap-1 p-2 dark:bg-gray-800">
        <div className="flex text-xs items-center md:text-sm">
          <Star fill="#FDE047" stroke="none" size={16} className="mr-1" />
          <p>{rating}</p>
        </div>
        <p className="h-10 text-sm md:text-lg">{movieName}</p>
      </div>
    </div>
  );
};
