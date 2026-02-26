export const getMovieByGenres = async (): Promise<MovieGenre> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
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

export interface MovieGenre {
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}
