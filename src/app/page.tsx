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
import StarsBg from "@/components/stars_bg";


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

  const PlanetComponent = planets[selectedPlanet].component;
  const desc = planets[selectedPlanet].desc;

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-4 sm:p-8 md:p-16 lg:p-20 gap-8 sm:gap-12 md:gap-16 font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <StarsBg />

      <main className="flex flex-col md:flex-row items-center justify-center w-full h-full z-10 gap-8 px-4 md:px-8 lg:px-16">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-full sm:w-[100px] md:w-[350px] lg:w-[400px] mt-10 aspect-square">
            <PlanetComponent />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-white flex flex-col gap-4 items-center text-center max-w-md mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {planets[selectedPlanet].title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl px-4">{desc}</p>
        </div>
      </main>
      <FootBar selected={selectedPlanet} setSelected={setSelectedPlanet} />
    </div>
  );
}
