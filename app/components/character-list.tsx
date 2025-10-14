import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "rickmortyapi";
import { Button } from "~/components/ui/button";
import CharacterListItem from "~/components/character-list-item";
import CharacterListItemSkeleton from "~/components/character-list-item-skeleton";

const CharacterList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["characters", page],
    queryFn: async () => {
      const res = await getCharacters({ page });

      return res.data;
    },
  });

  if (isLoading)
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <CharacterListItemSkeleton key={i} index={i} />
        ))}
      </div>
    );

  if (isError || !data || !data.results || !data?.info)
    return (
      <p className="text-center text-red-500 mt-10">Error fetching data</p>
    );

  const { results, info } = data;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {results.map((c, index) => (
          <CharacterListItem index={index} key={c.id} {...c} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 pt-8">
        <Button
          onClick={() => setPage(page - 1)}
          disabled={!info.prev}
          variant="outline"
        >
          Previous
        </Button>
        <span className="text-muted-foreground">
          Page {page} of {info.pages}
        </span>
        <Button
          onClick={() => setPage(page + 1)}
          disabled={!info.next}
          variant="outline"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default CharacterList;
