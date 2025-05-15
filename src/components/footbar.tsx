"use client"
import React from "react";
import Earth3D from "@/components/earth";
import Mars3D from "@/components/mars";
import Jupiter3D from "@/components/jupiter";
import Mercury3D from "@/components/mercury";
import Saturn3D from "@/components/saturn";
import Uranus3D from "@/components/uranus";
import Neptune3D from "@/components/neptune";
import Venus3D from "@/components/venus";
import Sun3D from "@/components/sun";

const planets = [
  { name: "Sun", component: Sun3D },
  { name: "Mercury", component: Mercury3D },
  { name: "Venus", component: Venus3D },
  { name: "Earth", component: Earth3D },
  { name: "Mars", component: Mars3D },
  { name: "Jupiter", component: Jupiter3D },
  { name: "Saturn", component: Saturn3D },
  { name: "Uranus", component: Uranus3D },
  { name: "Neptune", component: Neptune3D },
];

type FootBarProps = {
  size?: number;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
};

function FootBar({ selected, setSelected }: FootBarProps) {
  return (
    <footer className="fixed bottom-16 left-0 w-full flex flex-col items-center z-50 pb-4">
      <div className="relative w-full max-w-2xl flex items-center justify-center h-24">
        <div className="flex flex-row gap-8 justify-center items-center w-full z-10 relative">
          {planets.map((planet, idx) => {
            const PlanetComponent = planet.component;
            return (
              <button
                key={planet.name}
                className="focus:outline-none group"
                onClick={() => setSelected(idx)}
                aria-label={planet.name}
                style={{ position: "relative", zIndex: 1 }}
              >
                <div
                  className={`rounded-full border-2 transition-all duration-300 flex items-center justify-center
                    ${selected === idx
                      ? "border-pink-400 scale-125 shadow-xl bg-pink-200/20"
                      : "border-white/20 bg-white/10 hover:scale-110"}
                  `}
                  style={{ width: 48, height: 48, overflow: "hidden" }}
                >
                  {/* Render hành tinh Three.js thu nhỏ */}
                  <div style={{ width: 40, height: 40 }}>
                    <PlanetComponent />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default FootBar;