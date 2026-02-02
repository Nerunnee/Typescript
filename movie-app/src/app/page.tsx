import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}

const Hero = () => {
  return (
    <div className="w-full relative">
      <img src="/Feature.svg" alt="movie image" className="w-full md:mt-6" />

      <div className="flex flex-col gap-4 p-2 md:absolute  md:top-1/3 md:right-2/3  md:translate-x-1/2 md:w-100">
        <div className="flex justify-between items-center md:text-white">
          <div>
            <p>Now Playing:</p>
            <p>Wicked</p>
          </div>
          <div className="flex gap-2">
            <Star fill="#FDE047" stroke="none" />
            <p>6.9/10</p>
          </div>
        </div>

        <p className="md:text-white">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.
        </p>
        <Button className="w-36.25">Watch trailer</Button>
      </div>
    </div>
  );
};
