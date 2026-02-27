import { SearchGenre } from "./_components/SearchGenre";
import { SearchTitle } from "./_components/SearchTitle";

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { genre, searchValue } = await searchParams;

  return (
    <div>
      {genre && <SearchGenre searchParams={searchParams} />}
      {searchValue && <SearchTitle searchParams={searchParams} />}
    </div>
  );
}
