"use client";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { getSearchMovies } from "@/lib/movie-search";
import { Movie } from "@/lib/types";
import { Search } from "lucide-react";
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
          <h1 key={movie.id}>{movie.title}</h1>
        ))}
      </div>
    </div>
  );
};
