import { Card, CardContent } from "~/components/ui/card";

const CharacterListItemSkeleton = ({ index }: { index: number }) => {
  return (
    <Card
      key={index}
      className="relative overflow-hidden rounded-lg border border-border bg-card animate-pulse w-58 md:w-60"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="aspect-square bg-muted relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent animate-shimmer" />
      </div>

      <CardContent className="p-4 space-y-3">
        <div className="h-6 bg-muted rounded w-3/4">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent animate-shimmer" />
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 bg-muted rounded w-1/2">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent animate-shimmer" />
          </div>
        </div>

        <div className="h-4 bg-muted rounded w-2/3">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent animate-shimmer" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterListItemSkeleton;
