"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, Star, Clock, Bookmark, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ExploreCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  objects: CelestialObject[];
}

interface CelestialObject {
  name: string;
  type: string;
  imageUrl: string;
  description: string;
  visibility: string;
  bestTime: string;
}

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories: ExploreCategory[] = [
    {
      title: "Featured",
      description: "Handpicked celestial wonders",
      icon: <Star className="h-5 w-5" />,
      objects: [
        {
          name: "Saturn's Rings",
          type: "Planet Feature",
          imageUrl: "/images/saturn-rings.jpg",
          description: "The most extensive planetary ring system of any planet in the Solar System.",
          visibility: "Visible with small telescope",
          bestTime: "Opposition in August 2024",
        },
        {
          name: "Great Red Spot",
          type: "Atmospheric Feature",
          imageUrl: "/images/jupiter-spot.jpg",
          description: "A persistent high-pressure region in Jupiter's atmosphere.",
          visibility: "Visible with medium telescope",
          bestTime: "Best at night",
        },
      ],
    },
    {
      title: "Tonight's Best",
      description: "Optimal viewing conditions",
      icon: <Clock className="h-5 w-5" />,
      objects: [
        {
          name: "Mars",
          type: "Planet",
          imageUrl: "/images/mars.jpg",
          description: "The Red Planet is particularly bright tonight.",
          visibility: "Visible to naked eye",
          bestTime: "Evening",
        },
        {
          name: "Betelgeuse",
          type: "Star",
          imageUrl: "/images/betelgeuse.jpg",
          description: "A red supergiant star in Orion.",
          visibility: "Visible to naked eye",
          bestTime: "Early night",
        },
      ],
    },
  ];

  // Filter objects based on search query
  const filteredObjects = searchQuery
    ? categories
        .flatMap(category => category.objects)
        .filter(object => 
          object.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          object.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
          object.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
    : categories.find(cat => cat.title.toLowerCase() === selectedCategory)?.objects || [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white/90">Explore</h1>
        <p className="text-muted-foreground mt-2">
          Discover the wonders of the cosmos
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <div className="w-full bg-white/10 backdrop-blur-md rounded-xl overflow-hidden flex items-center px-4 border border-white/20 focus-within:border-white/40 transition-colors">
          <Search className="h-5 w-5 text-white/50 mr-2 flex-shrink-0" />
          <Input
            type="text"
            placeholder="Search celestial objects..."
            className="flex-1 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-white/50 h-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Only show categories when not searching */}
      {!searchQuery && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card
              key={category.title}
              className={`cursor-pointer transition-colors bg-white/10 border-white/20 ${
                selectedCategory === category.title.toLowerCase()
                  ? "border-primary"
                  : ""
              }`}
              onClick={() => {
                setSelectedCategory(category.title.toLowerCase());
                setSearchQuery("");
              }}
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  {category.icon}
                </div>
                <div>
                  <CardTitle className="text-lg text-white/90">{category.title}</CardTitle>
                  <CardDescription className="text-white/70">{category.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}

      {/* Search Results or Selected Category Objects */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredObjects.map((object, index) => (
          <Card key={index} className="overflow-hidden bg-white/10 border-white/20">
            <div className="relative h-48">
              <img
                src={object.imageUrl}
                alt={object.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/90">
                <Bookmark className="h-4 w-4" />
              </button>
            </div>
            <CardHeader>
              <CardTitle className="text-white/90">{object.name}</CardTitle>
              <CardDescription className="text-white/70">{object.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-white/70">
                  {object.description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-white/50">Visibility</p>
                    <p className="font-medium text-white/90">{object.visibility}</p>
                  </div>
                  <div>
                    <p className="text-white/50">Best Time</p>
                    <p className="font-medium text-white/90">{object.bestTime}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {/* No results message */}
        {filteredObjects.length === 0 && (
          <div className="col-span-2 text-center py-12">
            <p className="text-white/70">No celestial objects found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}