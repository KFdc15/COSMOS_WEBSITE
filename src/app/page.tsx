"use client";
import React, { useState } from "react";
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
import Footer from "@/components/Footer";

const planets = [
  {
    name: "Sun",
    component: Sun3D,
    desc: "Khám phá Trái Đất xanh tươi, nơi sự sống phát triển mạnh mẽ.",
  },
  {
    name: "Mercury",
    component: Mercury3D,
    desc: "Khám phá Trái Đất xanh tươi, nơi sự sống phát triển mạnh mẽ.",
  },
  {
    name: "Venus",
    component: Venus3D,
    desc: "Khám phá Trái Đất xanh tươi, nơi sự sống phát triển mạnh mẽ.",
  },
  {
    name: "Earth",
    component: Earth3D,
    desc: "Khám phá Trái Đất xanh tươi, nơi sự sống phát triển mạnh mẽ.",
  },
  {
    name: "Mars",
    component: Mars3D,
    desc: "Khám phá Sao Hỏa đỏ rực, hành tinh bí ẩn của hệ Mặt Trời.",
  },
  {
    name: "Jupiter",
    component: Jupiter3D,
    desc: "Khám phá Sao Mộc khổng lồ với cơn bão Đốm Đỏ nổi tiếng.",
  },
  {
    name: "Saturn",
    component: Saturn3D,
    desc: "Khám phá Trái Đất xanh tươi, nơi sự sống phát triển mạnh mẽ.",
  },
  {
    name: "Uranus",
    component: Uranus3D,
    desc: "Khám phá Trái Đất xanh tươi, nơi sự sống phát triển mạnh mẽ.",
  },
  {
    name: "Neptune",
    component: Neptune3D,
    desc: "Khám phá Trái Đất xanh tươi, nơi sự sống phát triển mạnh mẽ.",
  },
  
];

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState(0);

  const PlanetComponent = planets[selectedPlanet].component;
  const desc = planets[selectedPlanet].desc;

  return (
<<<<<<< HEAD
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <div className="fixed inset-0 -z-10 bg-black">
        {/* Các ngôi sao */}
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-80"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 6px 1px white`,
            }}
          />
        ))}
      </div>
      <main className="flex flex-row items-center justify-center w-full h-full z-10">
        <PlanetComponent />
        <div className="text-white text-xl max-w-xs text-left">
          <p>{desc}</p>
=======
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <NavBar />
        <div className="fixed inset-0 -z-10 bg-black">
          {/* Các ngôi sao */}
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-80"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: `0 0 6px 1px white`,
              }}
            />
          ))}
>>>>>>> b0d94292be12f4dff0c961164eff0823c82099bd
        </div>
        <main className="flex flex-row items-center justify-center w-full h-full gap-16 z-10">
          <PlanetComponent />
          <div className="text-white text-xl max-w-xs text-left">
            <p>{desc}</p>
          </div>
        </main>

        <FootBar selected={selectedPlanet} setSelected={setSelectedPlanet} />
      
      </div>
      <div className="fixed bottom-0 left-0 w-full z-10">
        <Footer />
      </div>
    </>
  );
}
