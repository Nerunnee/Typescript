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

const SeeMore = ({ listLabel }: { listLabel: string }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold">{listLabel}</h3>
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
