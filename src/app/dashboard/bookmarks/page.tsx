"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, FolderOpen, Star, Trash2 } from "lucide-react";

interface BookmarkedObject {
  id: number;
  name: string;
  type: string;
  dateAdded: string;
  imageUrl: string;
  notes?: string;
  collection?: string;
}

interface Collection {
  name: string;
  description: string;
  objectCount: number;
  icon: React.ReactNode;
}

export default function BookmarksPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarkedObjects, setBookmarkedObjects] = useState<BookmarkedObject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookmarks = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/api/favourite", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error("Failed to fetch bookmarks");
        const data = await response.json();
        // Map lại dữ liệu nếu cần, tùy theo backend trả về
        setBookmarkedObjects(
          data.map((item: any) => ({
            id: item.id,
            name: item.celestial_body_name || item.name,
            type: item.celestial_body_type || item.type,
            dateAdded: item.date_added || "",
            imageUrl: item.image_url || "/images/default.jpg",
            notes: item.notes,
            collection: item.collection_name || "",
          }))
        );
      } catch (error) {
        setBookmarkedObjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookmarks();
  }, []);

  const filteredObjects = bookmarkedObjects.filter(object =>
    object.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    object.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (object.collection?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false)
  );

  // Nếu bạn muốn giữ collections tĩnh, giữ nguyên phần collections như cũ
  const collections: Collection[] = [
    {
      name: "Galaxies",
      description: "Collection of distant galaxies",
      objectCount: 12,
      icon: <Star className="h-5 w-5" />,
    },
    {
      name: "Nebulae",
      description: "Beautiful cosmic clouds",
      objectCount: 8,
      icon: <FolderOpen className="h-5 w-5" />,
    },
    {
      name: "Star Clusters",
      description: "Groups of stars",
      objectCount: 6,
      icon: <Star className="h-5 w-5" />,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white/90">Bookmarks</h1>
        <p className="text-muted-foreground mt-2">
          Your saved celestial objects and collections
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search bookmarks..."
          className="pl-8 bg-white/10 border-white/20 text-white/90"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="objects" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2 bg-white/10">
          <TabsTrigger value="objects" className="data-[state=active]:bg-white/20 text-white/90">Objects</TabsTrigger>
          <TabsTrigger value="collections" className="data-[state=active]:bg-white/20 text-white/90">Collections</TabsTrigger>
        </TabsList>

        <TabsContent value="objects" className="space-y-4 mt-6">
          {isLoading ? (
            <div className="text-white/70">Loading...</div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {filteredObjects.map((object) => (
                <Card key={object.id} className="overflow-hidden bg-white/10 border-white/20">
                  <div className="relative h-48">
                    <img
                      src={object.imageUrl}
                      alt={object.name}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white/90">{object.name}</CardTitle>
                    <CardDescription className="text-white/70">
                      {object.type} • Added {object.dateAdded}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {object.notes && (
                        <p className="text-sm text-white/70">
                          {object.notes}
                        </p>
                      )}
                      {object.collection && (
                        <div className="flex items-center gap-2 text-sm text-white/70">
                          <FolderOpen className="h-4 w-4" />
                          <span>{object.collection}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="collections" className="space-y-4 mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection, index) => (
              <Card key={index} className="cursor-pointer hover:bg-white/20 bg-white/10 border-white/20">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    {collection.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg text-white/90">{collection.name}</CardTitle>
                    <CardDescription className="text-white/70">
                      {collection.objectCount} objects
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/70">
                    {collection.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}