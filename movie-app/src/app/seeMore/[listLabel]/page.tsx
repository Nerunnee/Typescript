import { MoviesListMovieCard } from "@/components/MovieListMovieCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { getMovies } from "../../../lib/getData";
import Link from "next/link";
import { getSimilarMovies } from "@/lib/get-similar-movie";

const labelMap: Record<string, string> = {
  upcoming: "Upcoming",
  top_rated: "Top Rated",
  popular: "Popular",
  similar: "More Like",
};

const SeeMore = async ({
  params,
  searchParams,
}: {
  params: Promise<{
    movieId: string;
    listLabel: string;
  }>;
  searchParams: { page: string | undefined };
}) => {
  const { listLabel, movieId } = await params;
  const { page } = await searchParams;
  const label = labelMap[listLabel] ?? listLabel;
  const movies = movieId
    ? await getSimilarMovies(movieId, listLabel)
    : await getMovies(listLabel, page);

  const { total_pages } = movies;

  const pages = Array(total_pages)
    .fill(0)
    .map((_, index) => index + 1);

  const currentPage = Number(page) || 1;

  return (
    <div className="px-5 md:px-15 2xl:px-167">
      <h3 className="text-2xl font-semibold my-8">{label}</h3>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies.results.map((movie) => (
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
          {pages.map((pageNumber, index) => {
            if (Number(pageNumber) + 3 < currentPage) return null;
            if (Number(pageNumber) - 3 > currentPage) return null;

            return (
              <PaginationItem key={index}>
                <PaginationLink
                  href={`?page=${pageNumber} `}
                  isActive={pageNumber === currentPage}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          })}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default SeeMore;
