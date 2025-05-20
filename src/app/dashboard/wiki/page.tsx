"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

interface CelestialObject {
  id: number;
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
  const [celestialObjects, setCelestialObjects] = useState<CelestialObject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCelestialObjects = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:8000/api/information');
      if (!response.ok) throw new Error("Failed to fetch celestial bodies");
      const data = await response.json();
      setCelestialObjects(data);
    } catch (error) {
      console.error(error);
      setCelestialObjects([]);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSearchResults = async (query: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:8000/api/search?q=${encodeURIComponent(searchQuery)}`);
      if (!response.ok) throw new Error("Failed to fetch search results");
      const data = await response.json();
      setCelestialObjects(data);
    } catch (error) {
      console.error(error);
      setCelestialObjects([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      fetchCelestialObjects();
    } else {
      fetchSearchResults(searchQuery);
    }
  }, [searchQuery]);

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

      {isLoading ? (
        <div className="text-white/70">Loading...</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {celestialObjects.length === 0 ? (
            <div className="text-white/60">No objects found.</div>
          ) : (
            celestialObjects.map((object) => (
              <Card key={object.id} className="overflow-hidden bg-white/10 border-white/20">
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
            ))
          )}
        </div>
      )}
    </div>
  );
}
