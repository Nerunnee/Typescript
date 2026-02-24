import { MoviesListMovieCard } from "@/components/MovieListMovieCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getMovies } from "../../../lib/getData";
import Link from "next/link";

const labelMap: Record<string, string> = {
  upcoming: "Upcoming",
  top_rated: "Top Rated",
  popular: "Popular",
};

const SeeMore = async ({
  params,
  searchParams,
}: {
  params: Promise<{ listLabel: string }>;
  searchParams?: { [key: string]: string };
}) => {
  const { listLabel } = await params;
  const label = labelMap[listLabel] ?? listLabel;
  const movie = await getMovies(listLabel);

  return (
    <div className="px-5 md:px-15 2xl:px-167">
      <h3 className="text-2xl font-semibold my-8">{label}</h3>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movie.results.map((movie) => (
          <Link href={`/${movie.id}`} key={movie.id}>
            <MoviesListMovieCard
              img={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              rating={movie.vote_average}
              movieName={movie.title}
            />
          </Link>
        ))}
      </div>
      <Pagination className="flex justify-end mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default SeeMore;
