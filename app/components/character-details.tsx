import { useParams, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getCharacter } from "rickmortyapi";
import { Button } from "~/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Spinner } from "~/components/ui/spinner";
import { Badge } from "~/components/ui/badge";

const CharacterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: character,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["character", id],
    queryFn: async () => {
      const res = await getCharacter(Number(id));
      return res.data;
    },
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="relative">
          <Spinner className="w-12 h-12 text-primary portal-spin" />
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
        </div>
      </div>
    );
  }

  if (!character || isError) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-muted-foreground">Character not found</p>
        <Link to="/">
          <Button className="mt-4">Back to Characters</Button>
        </Link>
      </div>
    );
  }

  const statusColor =
    {
      Alive: "bg-primary text-primary-foreground",
      Dead: "bg-destructive text-destructive-foreground",
      unknown: "bg-muted text-muted-foreground",
    }[character.status] || "bg-muted text-muted-foreground";

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/">
        <Button
          variant="ghost"
          className="mb-6 hover:scale-105 transition-transform fixed top-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Characters
        </Button>
      </Link>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Character Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 portal-spin" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/30 blur-2xl rounded-full float" />
          <div
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/30 blur-2xl rounded-full float"
            style={{ animationDelay: "1s" }}
          />

          <Card className="relative overflow-hidden border-2 border-primary/50 hover:border-primary transition-all duration-300 hover:scale-105 hover:rotate-1">
            <img
              src={character.image || "/placeholder.svg"}
              alt={character.name}
              className="w-full h-auto"
              style={{
                animation: "tada 1s ease-out",
              }}
            />
          </Card>
        </div>

        {/* Character Info */}
        <div className="space-y-6">
          <div style={{ animation: "swing 1s ease-out" }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance hover:scale-105 transition-transform cursor-default">
              {character.name}
            </h1>
            <div className="flex flex-wrap gap-2">
              <Badge
                className={`${statusColor} hover:scale-110 transition-transform cursor-default`}
                style={{
                  animation: "bounce-in 0.6s ease-out",
                  animationDelay: "0.1s",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                {character.status}
              </Badge>
              <Badge
                variant="outline"
                className="hover:scale-110 transition-transform cursor-default"
                style={{
                  animation: "bounce-in 0.6s ease-out",
                  animationDelay: "0.2s",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                {character.species}
              </Badge>
              {character.type && (
                <Badge
                  variant="outline"
                  className="hover:scale-110 transition-transform cursor-default"
                  style={{
                    animation: "bounce-in 0.6s ease-out",
                    animationDelay: "0.3s",
                    opacity: 0,
                    animationFillMode: "forwards",
                  }}
                >
                  {character.type}
                </Badge>
              )}
              <Badge
                variant="outline"
                className="hover:scale-110 transition-transform cursor-default"
                style={{
                  animation: "bounce-in 0.6s ease-out",
                  animationDelay: "0.4s",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                {character.gender}
              </Badge>
            </div>
          </div>

          <Card
            style={{
              animation: "rubber-band 1s ease-out",
              animationDelay: "0.3s",
            }}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <CardTitle>Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="hover:translate-x-2 transition-transform duration-300">
                <p className="text-sm text-muted-foreground">Origin</p>
                <p className="font-medium">{character.origin.name}</p>
              </div>
              <div className="hover:translate-x-2 transition-transform duration-300">
                <p className="text-sm text-muted-foreground">
                  Last Known Location
                </p>
                <p className="font-medium">{character.location.name}</p>
              </div>
              <div className="hover:translate-x-2 transition-transform duration-300">
                <p className="text-sm text-muted-foreground">Episodes</p>
                <p className="font-medium">
                  {character.episode.length} episodes
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
