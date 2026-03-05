import { getMovieByGenreId } from "@/lib/get-movies-by-genre-id";
import Link from "next/link";
import { MoviesListMovieCard } from "@/app/shared/MovieListMovieCard";
import { getMovieByGenres } from "@/lib/get-genre";
import { GenreList } from "./GenreList";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

export const SearchGenre = async ({
  searchParams,
}: {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
    page: string | undefined;
  }>;
}) => {
  const { genre, genre: selectedGenre, page } = await searchParams;

  const { results, total_pages } = await getMovieByGenreId(String(genre), page);
  const { genres } = await getMovieByGenres();

  const selectedGenreNames = String(genre)
    .split(",")
    .filter(Boolean)
    .map((id) => genres.find((g) => String(g.id) === id)?.name)
    .filter(Boolean)
    .join(", ");

  const pages = Array(total_pages)
    .fill(0)
    .map((_, index) => index + 1);

  const currentPage = Number(page) || 1;

  return (
    <div className="flex flex-col px-5 md:px-15 lg:flex-row lg:gap-7">
      <div className="max-w-97">
        <p className="text-2xl mt-3 mb-8">Search filter</p>
        <GenreList genres={genres} selectedGenre={selectedGenre} />
      </div>

      <div className="lg:border lg:bg-gray-100 lg:mt-20"></div>

      <div className="lg:mt-11">
        <p className="my-8 font-semibold text-xl">
          {results.length} titles in {selectedGenreNames}
        </p>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {results.map((movie) => (
            <Link href={`/${movie.id}`} key={movie.id}>
              <MoviesListMovieCard
                img={movie.poster_path}
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
                    href={`?genre=${genre}&page=${pageNumber}`}
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
    </div>
  );
};
