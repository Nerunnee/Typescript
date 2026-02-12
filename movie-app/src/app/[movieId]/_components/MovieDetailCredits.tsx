import { MovieCredits } from "@/lib/credits";

type MovieDetailCreditsProps = {
  credits: MovieCredits;
};

export const MovieDetailCredits = ({ credits }: MovieDetailCreditsProps) => {
  const director = credits.crew.filter((credit) => credit.job === "Director");
  const writer = credits.crew.filter((credit) => credit.job === "Writer");

  return (
    <div className="flex flex-col gap-5 px-5">
      <div className="flex border-b pb-1.5 gap-13.25">
        <h3 className="w-16 font-semibold">Director</h3>
        {director.map((person) => person.name).join(" · ")}
      </div>

      <div className="flex border-b pb-1.5 gap-13.25">
        <h3 className="w-16 font-semibold">Writers</h3>
        {writer.map((person) => person.name).join(" · ")}
      </div>

      <div className="flex border-b pb-1.5 gap-13.25">
        <h3 className="w-21 font-semibold">Stars</h3>
        {credits.cast
          .slice(0, 3)
          .map((person) => person.name)
          .join(" · ")}
      </div>
    </div>
  );
};
