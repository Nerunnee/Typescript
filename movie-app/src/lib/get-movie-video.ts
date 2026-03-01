export const getMovieByVideos = async (
  movieId: string,
): Promise<MovieVideos> => {
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

export interface MovieVideos {
  id: number;
  results: Video[];
}

export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
