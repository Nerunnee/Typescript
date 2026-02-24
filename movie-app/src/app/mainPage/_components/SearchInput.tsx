"use client";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { getSearchMovies } from "@/lib/movie-search";
import { Movie } from "@/lib/types";
import { Search, Star } from "lucide-react";
import { ChangeEventHandler, useEffect, useState } from "react";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setMovies([]);
      return;
    }

    const timer = setTimeout(async () => {
      const data = await getSearchMovies(searchValue);

      setMovies(data.results);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

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
      <div className="absolute bg-white z-50">
        {movies.map((movie) => (
          <div key={movie.id} className="flex w-83.75 p-3">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="Movie Image"
              className="w-16.75 h-25 mr-4"
            />
            <div>
              <p className="text-xl">{movie.title}</p>
              <div className="flex items-center text-sm mb-3">
                <Star fill="#FDE047" stroke="none" size={16} className="mr-1" />
                <div className="flex">
                  <p>{movie.vote_average.toFixed(1)}</p>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-400">10</span>
                </div>
              </div>
              <div className="w-53 flex justify-between">
                <p>{movie.release_date.slice(0, 4)}</p>
                <p>See more</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
