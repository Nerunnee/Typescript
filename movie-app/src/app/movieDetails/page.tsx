import { Button } from "@/components/ui/button";
import { Star, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function MovieDetails() {
  return (
    <div>
      <MovieDetail />
    </div>
  );
}

const movieStaffInfos = [
  { label: "Director", name: "Jon M. Chu" },
  { label: "Writers", name: "Cynthia Erivo · Ariana Grande · Jeff Goldblum" },
  { label: "Stars", name: "Cynthia Erivo · Ariana Grande · Jeff Goldblum" },
];

const MovieDetail = () => {
  return (
    <div>
      <MovieDetailMovieTitle />
      <MovieDetailMovieDesc />
      <div></div>
    </div>
  );
};

const MovieDetailMovieTitle = () => {
  return (
    <div>
      <div className="flex justify-between px-5 mt-8 mb-4">
        <div>
          <h3 className="text-2xl font-semibold">Wicked</h3>
          <p className="text-sm">2024.11.26 · PG · 2h 40m</p>
        </div>
        <div className="flex items-center gap-1 text-sm mr-3">
          <Star fill="#FDE047" stroke="none" />
          <div>
            <div className="flex">
              <p>6.9</p>
              <span className="text-gray-400">/</span>
              <span className="text-gray-400">10</span>
            </div>
            <p className="text-gray-400">37k</p>
          </div>
        </div>
      </div>

      <div>
        <img src="/wicked.jpg" alt="Movie Image" className="relative" />
        <div className="flex items-center gap-3 absolute top-105 ml-3 text-white mb-3">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full text-black"
          >
            <Play />
          </Button>
          <p>Play Trailer</p>
          <p>2:35</p>
        </div>
      </div>
    </div>
  );
};

const MovieDetailMovieDesc = () => {
  return (
    <div>
      <div className="flex justify-between p-5">
        <img src="/wickedsized.jpg" alt="Movie Image" className="w-25 h-37" />
        <div className="w-50 ">
          <div className=" flex flex-wrap gap-4 mt-4 mb-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Badge key={i} variant={"outline"} className="px-2.5">
                Fairy Tale
              </Badge>
            ))}
          </div>
          <p>
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.
          </p>
        </div>
      </div>

      <div className="px-5">
        {movieStaffInfos.map((info, i) => (
          <div key={i} className="flex gap-13.25">
            <p className="w-30">{info.label}</p>
            <p>{info.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
