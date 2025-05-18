"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

interface CelestialObject {
  name: string;
  type: string;
  distance: string;
  magnitude: string;
  constellation: string;
  imageUrl: string;
  description: string;
}

export default function WikiPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const celestialObjects: CelestialObject[] = [
    {
      name: "Andromeda Galaxy",
      type: "Galaxy",
      distance: "2.537 million light years",
      magnitude: "-21.5",
      constellation: "Andromeda",
      imageUrl: "/images/andromeda.jpg",
      description: "The Andromeda Galaxy is a spiral galaxy approximately 2.5 million light-years from Earth.",
    },
    {
      name: "Orion Nebula",
      type: "Nebula",
      distance: "1,344 light years",
      magnitude: "4.0",
      constellation: "Orion",
      imageUrl: "/images/orion-nebula.jpg",
      description: "The Orion Nebula is a diffuse nebula situated in the Milky Way.",
    },
    {
      name: "Pleiades",
      type: "Star Cluster",
      distance: "444 light years",
      magnitude: "1.6",
      constellation: "Taurus",
      imageUrl: "/images/pleiades.jpg",
      description: "The Pleiades is an open star cluster containing middle-aged, hot B-type stars.",
    },
    {
      name: "Crab Nebula",
      type: "Supernova Remnant",
      distance: "6,523 light years",
      magnitude: "8.4",
      constellation: "Taurus",
      imageUrl: "/images/crab-nebula.jpg",
      description: "The Crab Nebula is a supernova remnant in the constellation of Taurus.",
    },
  ];

  const filteredObjects = celestialObjects.filter(object =>
    object.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    object.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    object.constellation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white/90">Wiki Objects</h1>
        <p className="text-muted-foreground mt-2">
          Explore the vast collection of celestial objects
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search objects..."
            className="pl-8 bg-white/10 border-white/20 text-white/90"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-white/20 bg-white/10 text-white/90 hover:bg-white/20 h-10 py-2 px-4">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredObjects.map((object, index) => (
          <Card key={index} className="overflow-hidden bg-white/10 border-white/20">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-black/20" />
              <img
                src={object.imageUrl}
                alt={object.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-white/90">{object.name}</CardTitle>
              <CardDescription className="text-white/70">{object.type} in {object.constellation}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-white/50">Distance</p>
                    <p className="font-medium text-white/90">{object.distance}</p>
                  </div>
                  <div>
                    <p className="text-white/50">Magnitude</p>
                    <p className="font-medium text-white/90">{object.magnitude}</p>
                  </div>
                </div>
                <p className="text-sm text-white/70">
                  {object.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 