import { ChevronDown, Film, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { SearchInput } from "./SearchInput";

const movieGenres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Adventure" },
  { id: 3, name: "Animation" },
  { id: 4, name: "Comedy" },
  { id: 5, name: "Crime" },
  { id: 6, name: "Documentary" },
  { id: 7, name: "Drama" },
  { id: 8, name: "Family" },
  { id: 9, name: "Fantasy" },
  { id: 10, name: "History" },
  { id: 11, name: "Horror" },
  { id: 12, name: "Music" },
  { id: 13, name: "Mystery" },
  { id: 14, name: "Romance" },
  { id: 15, name: "Sci-Fi" },
  { id: 16, name: "Sport" },
  { id: 17, name: "Thriller" },
  { id: 18, name: "War" },
  { id: 19, name: "Western" },
  { id: 20, name: "Musical" },
];

export const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-5 md:hidden">
        <div className="flex gap-2 text-indigo-700">
          <Film />
          <p className="italic font-bold">Movie N</p>
        </div>

        <div className="flex gap-3">
          <SearchInput />
          <ModeToggle />
        </div>
      </div>

      <div className="hidden md:flex md:justify-between md:items-center md:px-15 md:py-3 2xl:w-285 2xl:px-30">
        <div className="flex gap-2 text-indigo-700">
          <Film />
          <p className="italic font-bold">Movie N</p>
        </div>

        <div className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-sm">
                <ChevronDown />
                Genre
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col p-5 ml-122">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-2xl font-semibold">
                  Genres
                </DropdownMenuLabel>
                <DropdownMenuItem>
                  See lists of movies by genre
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="w-134.25 flex flex-wrap gap-4 mt-4">
                {movieGenres.map((genre) => (
                  <Badge key={genre.id} variant={"outline"} className="px-2.5">
                    {genre.name}
                  </Badge>
                ))}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <SearchInput />
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};
