"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Book, Star, Users } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, description, icon }: StatCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default function OverviewPage() {
  const stats = [
    {
      title: "Total Objects Viewed",
      value: "2,350",
      description: "+20% from last month",
      icon: <Star className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Active Sessions",
      value: "45.2",
      description: "Avg. minutes per session",
      icon: <Activity className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Bookmarks",
      value: "127",
      description: "Saved celestial objects",
      icon: <Book className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Community",
      value: "573",
      description: "Connected astronomers",
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  const recentActivities = [
    {
      time: "2 hours ago",
      activity: "Viewed Mars surface details",
      type: "view",
    },
    {
      time: "5 hours ago",
      activity: "Bookmarked Andromeda Galaxy",
      type: "bookmark",
    },
    {
      time: "1 day ago",
      activity: "Shared Jupiter's Great Red Spot observation",
      type: "share",
    },
    {
      time: "2 days ago",
      activity: "Added notes to Orion Nebula",
      type: "note",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Overview</h1>
        <p className="text-muted-foreground mt-2">
          Your space exploration at a glance
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest space exploration activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {activity.activity}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 