import { Response } from "@/lib/types";

export const getMovies = async (listLabel: string): Promise<Response> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${listLabel}?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    },
  );
  const data = await res.json();
  return data;
};
