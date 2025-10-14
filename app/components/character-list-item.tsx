"use client";

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { Link } from "react-router";
import type { Character } from "rickmortyapi";

const CharacterListItem = ({
  name,
  image,
  id,
  status,
  species,
  location,
  index,
}: Character & { index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const statusColor =
    {
      Alive: "bg-primary text-primary-foreground",
      Dead: "bg-destructive text-destructive-foreground",
      unknown: "bg-muted text-muted-foreground",
    }[status] || "bg-muted text-muted-foreground";

  return (
    <Link to={`/character/${id}`}>
      <Card
        className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary relative"
        style={{
          animationDelay: `${index * 0.05}s`,
          animation:
            "bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
          opacity: 0,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl portal-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative overflow-hidden aspect-square">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? "scale-125 rotate-2" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge
            className={`absolute top-3 right-3 ${statusColor} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
          >
            {status}
          </Badge>
        </div>
        <CardContent className="p-4 space-y-2 relative z-10">
          <h3
            className={`font-bold text-lg text-balance transition-all duration-300 ${
              isHovered ? "text-green-400 scale-105" : ""
            }`}
          >
            {name}
          </h3>
          <p className="text-sm text-muted-foreground transition-transform duration-300 group-hover:translate-x-1">
            {species}
          </p>
          <p className="text-xs text-muted-foreground truncate transition-transform duration-300 group-hover:translate-x-1">
            📍 {location.name}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CharacterListItem;
