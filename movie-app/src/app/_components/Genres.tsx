import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { getMovieByGenres } from "@/lib/get-genre";
import Link from "next/link";

export const Genres = async () => {
  const { genres } = await getMovieByGenres();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="text-sm">
            <ChevronDown />
            Genre
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col p-5 ml-24.5 md:ml-65 lg:ml-88 xl:ml-122">
          <DropdownMenuGroup>
            <DropdownMenuLabel className="text-2xl font-semibold">
              Genres
            </DropdownMenuLabel>
            <DropdownMenuItem>See lists of movies by genre</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <div className="w-45 flex flex-wrap gap-1 mt-4 md:w-80 lg:w-100 xl:w-134.25">
            {genres.map((genre) => (
              <DropdownMenuItem key={genre.id} asChild>
                <Link href={`/search?genre=${genre.id}`}>
                  <Badge
                    variant={genre ? "outline" : "default"}
                    className="px-2.5 cursor-pointer "
                  >
                    {genre.name}
                  </Badge>
                </Link>
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
