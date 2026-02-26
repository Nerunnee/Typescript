import { Response } from "@/lib/types";

export const getMovieByGenreId = async (genreId: string): Promise<Response> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreId}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    },
  );

  const data = await response.json();
  return data;
};
