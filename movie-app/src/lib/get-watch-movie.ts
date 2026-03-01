import { Response } from "./types";

export const getMovieByWatch = async (movieId: string): Promise<Response> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
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
