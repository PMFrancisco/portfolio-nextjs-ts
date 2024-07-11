import React from "react";
import { Landing } from "@/components/organisms/Landing";
import { Star } from "@/components/molecules/Star";

export default function Home() {
  const numBlocks = 30;

  const getRandomPosition = () => {
    const left = Math.floor(Math.random() * 1280);
    const top = Math.floor(Math.random() * 700);
    return { left, top };
  };

  return (
    <div className="relative h-screen">
      {[...Array(numBlocks)].map((_, index) => (
        <Star
          key={index}
          style={{
            left: getRandomPosition().left,
            top: getRandomPosition().top,
          }}
        />
      ))}
      <div className="absolute inset-0">
        <Landing />
      </div>
    </div>  
  );
};
