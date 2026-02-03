import { Film, Moon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-2 py-1 md:hidden">
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

      <div className="hidden md:flex md:justify-between md:items-center md:px-5 md:py-3">
        <div className="flex gap-2 text-indigo-700">
          <Film />
          <p className="italic font-bold">Movie Z</p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline">Genre</Button>
          <Button
            variant="outline"
            className="w-94.75 flex justify-start  text-gray-500"
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
