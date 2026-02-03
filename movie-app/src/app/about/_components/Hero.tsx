import { Button } from "@/components/ui/button";
import { Star, Play } from "lucide-react";

type HeroProps = {
  play: string;
  movieName: string;
  rating: number;
  rating2: number;
  desc: string;
};

export const Hero = (props: HeroProps) => {
  const { play, movieName, rating, desc, rating2 } = props;
  return (
    <div className="w-full relative">
      <img src="/Feature.svg" alt="movie image" className="w-full md:mt-6" />

      <div className="flex flex-col gap-4 p-5 md:absolute  md:top-1/3 md:right-4/5 md:translate-x-1/2 md:w-101">
        <div className="flex justify-between items-center md:text-white md:flex-col md:items-start">
          <div>
            <p className="text-sm md:text-base">{play}</p>
            <p className="text-2xl font-semibold md:text-4xl">{movieName}</p>
          </div>
          <div className="flex md:text-lg">
            <Star fill="#FDE047" stroke="none" />
            <p className="font-semibold">{rating}</p>
            <span className="text-gray-400">/</span>
            <span className="text-gray-400">{rating2}</span>
          </div>
        </div>

        <p className="text-sm md:text-white md:my-4">{desc}</p>
        <Button className="w-36.25 md:bg-white md:text-black">
          <Play />
          Watch trailer
        </Button>
      </div>
    </div>
  );
};
