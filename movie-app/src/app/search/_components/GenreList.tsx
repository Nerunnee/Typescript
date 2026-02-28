"use client";
import { Genre } from "@/lib/api";
import { useRouter } from "next/navigation";
import { GenreCreative } from "./OneGenre";

export const GenreList = ({
  selectedGenre,
  genres,
}: {
  selectedGenre: string | string[] | undefined;
  genres: Genre[];
}) => {
  const router = useRouter();

  const onSelectGenre = (newGenre: string) => {
    if (!selectedGenre) {
      router.push(`/search?genre=${newGenre}`);
      return;
    }
    const oldGenres = String(selectedGenre)
      .split(",")
      .filter((value) => value);

    const isIncluded = oldGenres.includes(newGenre);

    if (!isIncluded) {
      let newGenres = [...oldGenres, newGenre];
      router.push(`/search?genre=${newGenres}`);
    } else {
      const newGenres = oldGenres.filter((genre) => genre !== newGenre);
      router.push(`/search?genre=${newGenres}`);
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-1 mb-5">
        <p>Search by genre</p>
        <p>See lists of movies by genre</p>
      </div>
      <div className="flex flex-wrap gap-4 mt-5 lg:w-96.75">
        {genres.map((genre) => {
          return (
            <div key={genre.id} onClick={() => onSelectGenre(String(genre.id))}>
              <GenreCreative
                genre={genre}
                isSelected={String(selectedGenre)
                  .split(",")
                  .includes(String(genre.id))}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
