import { Badge } from "@/components/ui/badge";
import { Genre as GenreType } from "@/lib/api";

type GenreProps = {
  genre: GenreType;
  isSelected: Boolean;
};
export const GenreCreative = ({ genre, isSelected }: GenreProps) => {
  return (
    <Badge
      variant={isSelected ? "default" : "outline"}
      className="px-2.5 cursor-pointer"
    >
      {genre.name}
    </Badge>
  );
};
