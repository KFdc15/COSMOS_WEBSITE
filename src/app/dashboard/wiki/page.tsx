"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

interface CelestialObject {
  id: number;
  name: string;
  type?: string;
  distance?: string;
  magnitude?: string;
  constellation?: string;
  imageUrl?: string;
  description?: string;
}

export default function WikiPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [celestialObjects, setCelestialObjects] = useState<CelestialObject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Thêm state cho autocomplete
  const [autocompleteResults, setAutocompleteResults] = useState<CelestialObject[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const fetchAutocomplete = async (query: string) => {
    if (!query) {
      setAutocompleteResults([]);
      return;
    }
    try {
      // Đúng: gọi /search/ để lấy gợi ý autocomplete
      const response = await fetch(`http://localhost:8000/api/search?name=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error("Failed to fetch autocomplete");
      const data = await response.json();
      setAutocompleteResults(data);
      setShowSuggestions(true);
    } catch {
      setAutocompleteResults([]);
      setShowSuggestions(false);
    }
  };

  // Hàm lấy chi tiết khi chọn gợi ý
  const fetchCelestialBodyDetail = async (name: string) => {
    setIsLoading(true);
    setShowSuggestions(false);
    try {
      const response = await fetch(`http://localhost:8000/api/information?name=${encodeURIComponent(name)}`);
      if (!response.ok) throw new Error("Not found");
      const data = await response.json();
      setCelestialObjects([data]); // Chỉ hiển thị thiên thể đã chọn
    } catch {
      setCelestialObjects([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Lấy tất cả các thiên thể khi trang load
    const fetchAllCelestialBodies = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8000/api/search?name=");
        if (!response.ok) throw new Error("Failed to fetch all celestial bodies");
        const data = await response.json();
        setCelestialObjects(data);
      } catch {
        setCelestialObjects([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllCelestialBodies();
  }, []);

  // Khi thay đổi input, gọi autocomplete
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    fetchAutocomplete(value);
  };

  // Khi chọn gợi ý
  const handleSuggestionClick = (name: string) => {
    setSearchQuery(name);
    fetchCelestialBodyDetail(name);
  };

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
            onChange={handleInputChange}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
            onFocus={() => {
              if (autocompleteResults.length > 0) setShowSuggestions(true);
            }}
          />
          {showSuggestions && autocompleteResults.length > 0 && (
            <ul className="absolute z-10 left-0 right-0 bg-white text-black rounded shadow mt-1 max-h-48 overflow-auto">
              {autocompleteResults.map((obj) => (
                <li
                  key={obj.id ?? obj.name}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  onMouseDown={() => handleSuggestionClick(obj.name)}
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="text-white/70">Loading...</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {celestialObjects.length === 0 ? (
            <div className="text-white/60">No objects found.</div>
          ) : (
            celestialObjects.map((object) => (
              <Card key={object.id ?? object.name} className="overflow-hidden bg-white/10 border-white/20">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-black/20" />
                  {object.imageUrl && (
                    <img
                      src={object.imageUrl}
                      alt={object.name}
                      className="w-full h-full object-cover"
                    />
                  )}
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
};