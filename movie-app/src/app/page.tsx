"use client";
import { Header } from "./about/_components/Header";
import { Hero } from "./about/_components/Hero";
import { MoviesList } from "./about/_components/MovieList";
import { Footer } from "./about/_components/Footer";
import { useEffect } from "react";
import { getUpcomingMovies } from "../../utils/getData";

export default function Home() {
  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await getUpcomingMovies();
      console.log(movieData);
    };
    fetchMovies();
  }, []);
  const listLabel: string = "";
  return (
    <div className="2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
      <Header />
      <Hero
        play="Now Playing:"
        movieName="Wicked"
        rating={6.9}
        rating2={10}
        desc="Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads."
      />
      <MoviesList listLabel="Upcoming" />
      <MoviesList listLabel="Top Rated" />
      <MoviesList listLabel="Popular" />
      <Footer />
    </div>
  );
}
