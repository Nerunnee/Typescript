import { Film, Mail, Phone } from "lucide-react";
import { Header } from "./about/_components/Header";
import { Hero } from "./about/_components/Hero";
import { MoviesList } from "./about/_components/MovieList";

export default function Home() {
  const listLabel: string = "";
  return (
    <div>
      <Header />
      <Hero
        play="Now Playing:"
        movieName="Wicked"
        rating={610}
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

const Footer = () => {
  return (
    <div className="bg-indigo-700 text-white flex flex-col gap-7 px-5 pt-10 pb-5 mt-8">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <Film />
          <p className="italic font-bold">Movie Z</p>
        </div>
        <p>© 2024 Movie Z. All Rights Reserved.</p>
      </div>
      <div className="flex justify-between">
        <div>
          <p>Contact information</p>
          <div className="mt-3 mb-6 flex gap-3 items-center">
            <Mail />
            <div>
              <p>Email:</p>
              <p>support@movieZ.com</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Phone />
            <div>
              <p>Phone:</p>
              <p>+976 (11) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p>Follow us</p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Youtube</p>
        </div>
      </div>
    </div>
  );
};
