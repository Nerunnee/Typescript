import { Button } from "@/components/ui/button";
import { Star, Play } from "lucide-react";

export default function MovieDetails() {
  return (
    <div>
      <MovieDetail />
    </div>
  );
}

const MovieDetail = () => {
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

        <div className="flex items-center gap-3 absolute top-105 ml-3 text-white">
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
