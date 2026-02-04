import { ChevronDown, Film, Moon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-5 md:hidden">
        <div className="flex gap-2 text-indigo-700">
          <Film />
          <p className="italic font-bold">Movie Z</p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline">
            <Search />
          </Button>
          <Button variant="outline">
            <Moon />
          </Button>
        </div>
      </div>

      <div className="hidden md:flex md:justify-between md:items-center md:px-15 md:py-3 2xl:w-285">
        <div className="flex gap-2 text-indigo-700">
          <Film />
          <p className="italic font-bold">Movie Z</p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" className="text-sm">
            <ChevronDown />
            Genre
          </Button>
          <Button
            variant="outline"
            className="w-94.75 flex justify-start  text-gray-500 text-sm"
          >
            <Search /> Search...
          </Button>
        </div>

        <Button variant="outline">
          <Moon />
        </Button>
      </div>
    </div>
  );
};
