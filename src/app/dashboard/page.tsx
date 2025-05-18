"use client";
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Image from 'next/image';

interface APOD {
  title: string;
  url: string;
  explanation: string;
  date: string;
  media_type: string;
}

interface ViewedObject {
  title: string;
  timestamp: string;
  type: string;
  imageUrl?: string;
}

export default function DashboardPage() {
  const [greeting, setGreeting] = useState('');
  const [apod, setApod] = useState<APOD | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [viewedObjects, setViewedObjects] = useState<ViewedObject[]>([
    {
      title: "Andromeda Galaxy",
      timestamp: "2024-03-21 15:30",
      type: "Galaxy",
      imageUrl: "/images/andromeda.jpg"
    },
    {
      title: "Black Hole M87",
      timestamp: "2024-03-21 14:45",
      type: "Black Hole",
      imageUrl: "/images/black-hole.jpg"
    },
    {
      title: "Mars Surface",
      timestamp: "2024-03-21 13:20",
      type: "Planet",
      imageUrl: "/images/mars.jpg"
    }
  ]);

  useEffect(() => {
    // Set greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');

    // Fetch APOD
    const fetchAPOD = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        const data = await response.json();
        setApod(data);
      } catch (error) {
        console.error('Error fetching APOD:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAPOD();
  }, []);

  return (
    <div className="space-y-8">
      {/* Greeting Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">{greeting}, Explorer!</h1>
        <p className="text-muted-foreground">
          {format(new Date(), 'EEEE, MMMM do, yyyy')}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* APOD Section - Updated styling */}
        <div className="w-full bg-white/10 rounded-xl p-6 text-white backdrop-blur-md flex flex-col gap-6 shadow-lg">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">
            Astronomy Picture of the Day
          </h2>
          {isLoading ? (
            <div className="space-y-4 animate-pulse">
              <div className="aspect-video bg-white/5 rounded-lg" />
              <div className="h-4 w-3/4 bg-white/5 rounded" />
              <div className="h-4 w-1/2 bg-white/5 rounded" />
            </div>
          ) : apod ? (
            <div className="space-y-4">
              {apod.media_type === "image" ? (
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img
                    src={apod.url}
                    alt={apod.title}
                    className="object-cover"
                  />
                </div>
              ) : (
                <iframe
                  src={apod.url}
                  title={apod.title}
                  className="w-full aspect-video rounded-lg"
                  allowFullScreen
                />
              )}
              <div>
                <h3 className="text-lg font-semibold">{apod.title}</h3>
                <p className="text-sm text-white/70 line-clamp-3 mt-1">
                  {apod.explanation}
                </p>
                <p className="text-xs text-white/50 mt-2">{apod.date}</p>
              </div>
            </div>
          ) : (
            <p className="text-white/70">Failed to load APOD</p>
          )}
        </div>

        {/* Recently Viewed Objects - Updated styling */}
        <div className="w-full bg-white/10 rounded-xl p-6 text-white backdrop-blur-md flex flex-col gap-6 shadow-lg">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">
            Recently Viewed Objects
          </h2>
          <div className="space-y-4">
            {viewedObjects.map((object, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="relative w-12 h-12 rounded-md overflow-hidden">
                  <div className="absolute inset-0 bg-white/5" />
                  {object.imageUrl && (
                    <img
                      src={object.imageUrl}
                      alt={object.title}
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium truncate">{object.title}</h3>
                  <p className="text-sm text-white/70">{object.type}</p>
                </div>
                <time className="text-sm text-white/50 shrink-0">
                  {format(new Date(object.timestamp), 'HH:mm')}
                </time>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}