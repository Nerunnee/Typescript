import { Button } from "@/components/ui/button";
import { Star, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <Carousel>
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="w-full relative 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
              <img
                src="/Feature.jpg"
                alt="movie image"
                className="w-full md:mt-6 2xl:h-150 object-cover object-top"
              />

              <div className="absolute top-1/4 left-2/12 md:top-3/6 md:left-1/12 2xl:left-1/5">
                <CarouselPrevious className="w-6 h-6 md:w-10 md:h-10 lg:w-15 lg:h-15 lg:text-2xl 2xl:bg-black 2xl:text-white" />
              </div>
              <div className="absolute top-1/4 right-2/12 md:top-3/6 md:right-1/12 2xl:right-1/5">
                <CarouselNext className="w-6 h-6 md:w-10 md:h-10 lg:w-15 lg:h-15 2xl:bg-black 2xl:text-white" />
              </div>

              <div></div>

              <div className="flex flex-col gap-4 p-5 md:absolute md:text-sm md:w-70 md:top-1/6 md:right-6/12 md:gap-1 lg:text-base lg:w-101 lg:top-1/3 lg:right-3/4 lg:translate-x-1/2 lg:gap-4 2xl:top-1/3 2xl:right-3/5">
                <div className="flex justify-between items-center md:text-white md:flex-col md:items-start">
                  <div>
                    <p className="text-sm md:text-base">{play}</p>
                    <p className="text-2xl font-semibold lg:text-4xl">
                      {movieName}
                    </p>
                  </div>
                  <div className="flex md:text-lg">
                    <Star fill="#FDE047" stroke="none" />
                    <p className="font-semibold">{rating}</p>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-400">{rating2}</span>
                  </div>
                </div>

                <p className="text-sm md:text-white md:my-4 lg:text-xs">
                  {desc}
                </p>
                <Button className="w-36.25 md:bg-white md:text-black">
                  <Play />
                  Watch traile
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
