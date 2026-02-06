import { MoviesListMovieCard } from "@/components/MovieListMovieCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const MoviesList = ({ listLabel }: { listLabel: string }) => {
  return (
    <div className="flex flex-col gap-8 mt-8 mx-5 md:mx-15 lg:mx-20">
      <MoviesListHeader listLabel={listLabel} />
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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

const MoviesListHeader = ({ listLabel }: { listLabel: string }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <h3 className="text-2xl font-semibold">{listLabel}</h3>
      <Link href="/seeMore">
        <Button variant="ghost" className="text-sm">
          See more <ArrowRight />
        </Button>
      </Link>
    </div>
  );
};
