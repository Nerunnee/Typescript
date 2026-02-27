import { Film } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { SearchInput } from "./SearchInput";
import Link from "next/link";
import { Genres } from "./Genres";

export const Header = () => {
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
          <Genres />
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
          <Genres />
          <SearchInput />
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};
