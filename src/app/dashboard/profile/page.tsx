"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, Medal, Star, Award, Clock, Edit2 } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
}

interface Statistic {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export default function ProfilePage() {
  const achievements: Achievement[] = [
    {
      title: "First Light",
      description: "Made your first celestial observation",
      date: "March 15, 2024",
      icon: <Star className="h-5 w-5 text-yellow-500" />,
    },
    {
      title: "Galaxy Hunter",
      description: "Observed 10 different galaxies",
      date: "March 18, 2024",
      icon: <Medal className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Night Owl",
      description: "Logged 50 hours of observation time",
      date: "March 20, 2024",
      icon: <Clock className="h-5 w-5 text-purple-500" />,
    },
  ];

  const statistics: Statistic[] = [
    {
      label: "Objects Viewed",
      value: "127",
      icon: <Camera className="h-5 w-5" />,
    },
    {
      label: "Achievements",
      value: "15",
      icon: <Award className="h-5 w-5" />,
    },
    {
      label: "Observation Hours",
      value: "52",
      icon: <Clock className="h-5 w-5" />,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Profile</h1>
          <p className="text-muted-foreground mt-2">
            Manage your profile and view your achievements
          </p>
        </div>
        <Button variant="outline" size="sm">
          <Edit2 className="h-4 w-4 mr-2" />
          Edit Profile
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Your profile details and preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center">
                  <Camera className="h-8 w-8 text-muted-foreground" />
                </div>
                <button className="absolute bottom-0 right-0 rounded-full bg-primary p-1.5 text-white">
                  <Edit2 className="h-4 w-4" />
                </button>
              </div>
              <div>
                <h3 className="text-lg font-medium">John Stargazer</h3>
                <p className="text-sm text-muted-foreground">Amateur Astronomer</p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Location</label>
                <Input value="New York, USA" readOnly />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Telescope</label>
                <Input value="Celestron NexStar 8SE" readOnly />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Experience Level</label>
                <Input value="Intermediate" readOnly />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {statistics.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {stat.icon}
                      <span className="text-sm font-medium">{stat.label}</span>
                    </div>
                    <span className="text-lg font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Member Since</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">March 2024</p>
              <p className="text-sm text-muted-foreground">Active Member</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Achievements</CardTitle>
          <CardDescription>Your latest astronomical accomplishments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    {achievement.icon}
                  </div>
                  <div>
                    <CardTitle className="text-base">{achievement.title}</CardTitle>
                    <CardDescription>{achievement.date}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 