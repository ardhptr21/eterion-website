"use client";

import { useEffect, useState } from "react";

interface Props {
  starCount?: number;
}

export default function FallStar({ starCount = 15 }: Props) {
  const [stars, setStars] = useState<
    {
      top: string;
      left: string;
      animationDelay: string;
      animationDuration: string;
      opacity: number;
      fontSize: string;
    }[]
  >([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const generated = Array.from({ length: starCount }).map(() => ({
      top: `${Math.ceil(Math.random() * -100)}px`,
      left: `${Math.ceil(Math.random() * 100)}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${2 + Math.random() * 2}s`,
      opacity: Math.random() * 0.8 + 0.2,
      fontSize: `${Math.random() * 8 + 8}px`,
    }));
    setStars(generated);
    setReady(true);
  }, [starCount]);

  if (!ready) return null;

  return (
    <>
      {stars.map((star, index) => (
        <span
          key={index}
          className="absolute star pointer-events-none select-none"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration,
            opacity: star.opacity,
            fontSize: star.fontSize,
            color: "white",
          }}
        >
          ✦
        </span>
      ))}

      <style jsx>{`
        @keyframes fallingStar {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(400px) translateX(100px) scale(0.5);
            opacity: 0;
          }
        }
        .star {
          animation-name: fallingStar;
          animation-timing-function: ease-in;
          animation-iteration-count: infinite;
          font-weight: bold;
          text-shadow: 0 0 6px white, 0 0 10px white;
          z-index: 40;
        }
      `}</style>
    </>
  );
}
