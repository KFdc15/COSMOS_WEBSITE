"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "@/components/navbar";
import Earth3D from "@/components/earth";
import Mars3D from "@/components/mars";
import Jupiter3D from "@/components/jupiter";
import Mercury3D from "@/components/mercury";
import Saturn3D from "@/components/saturn";
import Uranus3D from "@/components/uranus";
import Neptune3D from "@/components/neptune";
import Venus3D from "@/components/venus";
import Sun3D from "@/components/sun";
import FootBar from "@/components/footbar";


const planets = [
  {
    name: "Sun",
    component: Sun3D,
    title:"Sun",
    desc: "Khám phá Trái Đất xanh tươi, nơi sự sống phát triển mạnh mẽ.",
  },
  {
    name: "Mercury",
    component: Mercury3D,
    title:"Mercury",
    desc: "Khám phá Trái Đất xanh tươi, nơi sự sống phát triển mạnh mẽ.",
  },
  {
    name: "Venus",
    component: Venus3D,
    title:"Venus",
    desc: "Khám phá Trái Đất xanh tươi, nơi sự sống phát triển mạnh mẽ.",
  },
  {
    name: "Earth",
    component: Earth3D,
    title:"Earth",
    desc: "Khám phá Trái Đất xanh tươi, nơi sự sống phát triển mạnh mẽ.",
  },
  {
    name: "Mars",
    component: Mars3D,
    title:"Mars",
    desc: "Khám phá Sao Hỏa đỏ rực, hành tinh bí ẩn của hệ Mặt Trời.",
  },
  {
    name: "Jupiter",
    component: Jupiter3D,
    title:"Jupiter",
    desc: "Khám phá Sao Mộc khổng lồ với cơn bão Đốm Đỏ nổi tiếng.",
  },
  {
    name: "Saturn",
    component: Saturn3D,
    title:"Saturn",
    desc: "Khám phá Trái Đất xanh tươi, nơi sự sống phát triển mạnh mẽ.",
  },
  {
    name: "Uranus",
    component: Uranus3D,
    title:"Uranus",
    desc: "Khám phá Trái Đất xanh tươi, nơi sự sống phát triển mạnh mẽ.",
  },
  {
    name: "Neptune",
    component: Neptune3D,
    title:"Neptune",
    desc: "Khám phá Trái Đất xanh tươi, nơi sự sống phát triển mạnh mẽ.",
  },
  
];

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState(0);
  const [stars, setStars] = useState<{width: number, height: number, top: number, left: number}[]>([]);
  useEffect(() => {
    const generatedStars = Array.from({ length: 80 }, () => ({
      width: Math.random() * 2 + 1,
      height: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));
    setStars(generatedStars);
  }, []);

  const PlanetComponent = planets[selectedPlanet].component;
  const desc = planets[selectedPlanet].desc;

  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <NavBar />
        <div className="fixed inset-0 -z-10 bg-black">
          {/* Các ngôi sao */}
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-80"
              style={{
                width: `${star.width}px`,
                height: `${star.height}px`,
                top: `${star.top}%`,
                left: `${star.left}%`,
                boxShadow: `0 0 6px 1px white`,
              }}
            />
          ))}
        </div>

        <main className="flex flex-row items-center justify-center w-full h-full z-10 mt-100 pr-32">
          <div className="flex-1 flex justify-center items-center">
            <PlanetComponent />
          </div>
          <div className="flex-1 text-white flex flex-col gap-4 max-w-xs text-center items-center">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {planets[selectedPlanet].title}
            </h2>
            <p className="text-xl">{desc}</p>
          </div>
        </main>
        <FootBar selected={selectedPlanet} setSelected={setSelectedPlanet} />
      </div>
  );
}
