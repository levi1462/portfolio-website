"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
//import { ArrowRight } from "lucide-react";

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
  const typedText = useTypingEffect("Hello, my name is Levi Mickelson", 200);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex flex-col">
      <nav className="bg-gray-800 bg-opacity-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-teal-400">LM</span>
            </div>
            <div className="flex items-center space-x-4">
              {["About", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-300 hover:bg-gray-700 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6 h-20 min-h-[5rem]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
              {typedText}
            </span>
            <span className="inline-block w-1 h-10 ml-1 bg-teal-400 animate-blink"></span>
          </h1>
          <h3 className="text-2xl text-gray-300 mt-4 opacity-80">
            Full-stack Developer & Web Designer
          </h3>
          <div className="mt-8 flex justify-center">
            <button className="group bg-transparent border-2 border-teal-400 text-teal-400 px-6 py-3 rounded-full font-semibold hover:bg-teal-400 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 flex items-center">
              More About Me
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
