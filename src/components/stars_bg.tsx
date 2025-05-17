'use client';

import React, { useState,useEffect , useCallback } from 'react';

export function StarsBg() {
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

    return (
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
    )
}

export default StarsBg;