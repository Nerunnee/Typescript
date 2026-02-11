import { MoviesListMovieCard } from "@/components/MovieListMovieCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Response } from "@/lib/types";

export const MoviesList = async ({
  listLabel,
  data,
  label,
}: {
  listLabel: string;
  data: Response;
  label: string;
}) => {
  return (
    <div className="flex flex-col gap-8 mt-8 mx-5 md:mx-15 lg:mx-20 2xl:px-30 2xl:w-285">
      <MoviesListHeader listLabel={listLabel} label={label} />
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.results.map((movie) => (
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
}: {
  listLabel: string;
  label: string;
}) => {
  return (
    <div className="flex justify-between items-center w-full">
      <h3 className="text-2xl font-semibold">{label}</h3>
      <Link href={`/seeMore/${listLabel}?label=${label}`}>
        <Button variant="ghost" className="text-sm">
          See more <ArrowRight />
        </Button>
      </Link>
    </div>
  );
};
