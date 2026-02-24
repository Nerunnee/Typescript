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
import { getMovieByGenres } from "@/lib/genre";
import Link from "next/link";

export const Header = async () => {
  const { genres } = await getMovieByGenres();

  return (
    <div>
      <div className="flex justify-between items-center p-5 md:hidden">
        <Link href={`/`}>
          <div className="flex gap-2 text-indigo-700">
            <Film />
            <p className="italic font-bold">Movie N</p>
          </div>
        </Link>

        <div className="flex gap-3">
          <SearchInput />
          <ModeToggle />
        </div>
      </div>

      <div className="hidden md:w-screen md:flex md:justify-between md:items-center md:px-15 md:py-3">
        <Link href={`/`}>
          <div className="flex gap-2 text-indigo-700">
            <Film />
            <p className="italic font-bold">Movie N</p>
          </div>
        </Link>

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
                {genres.map((genre) => (
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
