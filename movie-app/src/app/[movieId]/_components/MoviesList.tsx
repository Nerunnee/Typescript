import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MoviesListMovieCard } from "@/app/shared/MovieListMovieCard";
import Link from "next/link";
import { Response } from "@/lib/types";

export const MoviesList = async ({
  listLabel,
  data,
  label,
  movieId,
}: {
  listLabel: string;
  data: Response;
  label: string;
  movieId: string;
}) => {
  return (
    <div className="flex flex-col gap-8 mt-8 mx-5 md:mx-15 lg:mx-25 xl:mx-40 2xl:mx-105">
      <MoviesListHeader listLabel={listLabel} label={label} movieId={movieId} />
      <div className="grid grid-cols-2 gap-5 md:hidden">
        {data.results.slice(0, 2).map((movie) => (
          <Link href={`/${movie.id}`} key={movie.id}>
            <MoviesListMovieCard
              img={movie.poster_path}
              rating={movie.vote_average}
              movieName={movie.title}
            />
          </Link>
        ))}
      </div>
      <div className="hidden md:block md:grid md:gap-5 md:grid-cols-5">
        {data.results.slice(0, 5).map((movie) => (
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
};

const MoviesListHeader = ({
  listLabel,
  label,
  movieId,
}: {
  listLabel: string;
  label: string;
  movieId: string;
}) => {
  return (
    <div className="flex justify-between items-center w-full">
      <h3 className="text-2xl font-semibold">{label}</h3>
      <Link href={`/seeMore/${listLabel}?movieId=${movieId}`}>
        <Button variant="ghost" className="text-sm">
          See more <ArrowRight />
        </Button>
      </Link>
    </div>
  );
};
