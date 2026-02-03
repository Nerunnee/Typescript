import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export const MoviesList = ({ listLabel }: { listLabel: string }) => {
  return (
    <div className="flex flex-col gap-8 mt-8 mx-5 md:mx-20">
      <MoviesListHeader listLabel={listLabel} />
      <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <MoviesListMovieCard
            key={i}
            img="/DearSanta.svg"
            rating={6.9}
            movieName="Dear Santa"
          />
        ))}
      </div>
    </div>
  );
};

type MoviesListMovieCardProps = {
  img: string;
  rating: number;
  movieName: string;
};

const MoviesListHeader = ({ listLabel }: { listLabel: string }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <h3 className="text-2xl font-semibold">{listLabel}</h3>
      <Button variant="ghost" className="text-sm">
        See more <ArrowRight />
      </Button>
    </div>
  );
};

const MoviesListMovieCard = (props: MoviesListMovieCardProps) => {
  const { img, rating, movieName } = props;
  return (
    <div className="rounded-md w-full">
      <img src={img} alt="Movie Image" className="rounded-t-md w-full" />
      <div className="rounded-b-md bg-gray-200 flex flex-col gap-1 p-2">
        <div className="flex text-xs items-center md:text-sm">
          <Star fill="#FDE047" stroke="none" size={16} className="mr-1" />
          <p>{rating}</p>
          <span className="text-gray-400">/</span>
          <span className="text-gray-400">10</span>
        </div>
        <p className="h-10 text-sm md:text-lg">{movieName}</p>
      </div>
    </div>
  );
};
