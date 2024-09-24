"use client";

import { useState, useEffect } from "react";

function useTypingEffect(text: string, speed: number = 50) {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);
    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayedText;
}

export default function Home() {
  const typedText = useTypingEffect("Hello, my name is Levi Mickelson", 150);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          {typedText}
          <span className="animate-blink">|</span>
        </h1>
        <h3 className="text-xl text-gray-600">Details about me...</h3>
      </div>
    </div>
  );
}
