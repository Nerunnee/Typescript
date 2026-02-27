"use client";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { getSearchMovies } from "@/lib/movie-search";
import { Movie } from "@/lib/types";
import { ArrowRight, Search, Star } from "lucide-react";
import { ChangeEventHandler, useEffect, useState } from "react";
import Link from "next/link";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [toggled, setToggled] = useState(false);

  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setMovies([]);
      setToggled(false);
      return;
    }

    const timer = setTimeout(async () => {
      const data = await getSearchMovies(searchValue);

      setToggled(true);
      setMovies(data.results);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const handleClose = () => {
    setToggled(false);
    setSearchValue("");
  };

  return (
    <div className="relative w-fit">
      <InputGroup className="max-w-xs">
        <InputGroupInput
          value={searchValue}
          onChange={onChangeSearchValue}
          placeholder="Search..."
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>

      {toggled && (
        <div className="absolute bg-white z-50 rounded-xl">
          {movies.slice(0, 4).map((movie) => (
            <div key={movie.id} className="w-83.75 px-3">
              <div className="flex w-77.75 p-2">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="Movie Image"
                  className="w-16.75 h-25 mr-4"
                />
                <div className="dark:text-black">
                  <p className="font-semibold">{movie.title}</p>
                  <div className="flex items-center text-sm mb-3">
                    <Star
                      fill="#FDE047"
                      stroke="none"
                      size={16}
                      className="mr-1"
                    />
                    <div className="flex">
                      <p>{movie.vote_average.toFixed(1)}</p>
                      <span className="text-gray-400">/</span>
                      <span className="text-gray-400">10</span>
                    </div>
                  </div>
                  <div className="w-53 flex justify-between">
                    <p>{movie.release_date.slice(0, 4)}</p>
                    <Link href={`/${movie.id}`} key={movie.id}>
                      <Button
                        variant="ghost"
                        className="text-sm"
                        onClick={handleClose}
                      >
                        See more <ArrowRight />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 w-full border my-2"></div>
            </div>
          ))}
          <Link href={`/search?searchValue=${searchValue}`}>
            <Button
              variant={"ghost"}
              className="px-3 mb-2 dark:text-black"
              onClick={handleClose}
            >
              See all results for {searchValue.toUpperCase()}
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
