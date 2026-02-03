import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

type HeroProps = {
  play: string;
  movieName: string;
  rating: number;
  desc: string;
};

export const Hero = (props: HeroProps) => {
  const { play, movieName, rating, desc } = props;
  return (
    <div className="w-full relative">
      <img src="/Feature.svg" alt="movie image" className="w-full md:mt-6" />

      <div className="flex flex-col gap-4 p-2 md:absolute  md:top-1/3 md:right-2/3  md:translate-x-1/2 md:w-100">
        <div className="flex justify-between items-center md:text-white">
          <div>
            <p>{play}</p>
            <p>{movieName}</p>
          </div>
          <div className="flex gap-2">
            <Star fill="#FDE047" stroke="none" />
            <p>{rating}</p>
          </div>
        </div>

        <p className="md:text-white">{desc}</p>
        <Button className="w-36.25">Watch trailer</Button>
      </div>
    </div>
  );
};
