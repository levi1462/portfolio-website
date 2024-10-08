"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "./contexts/ThemeContexts";
import { ThemeToggle } from "./components/ThemeToggle";
import { ArrowRight, Menu } from "lucide-react";
// tests
function useTypingEffect(text: string, speed: number = 50) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, speed);
    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return { displayedText, isTypingComplete };
}

export default function Home() {
  const { displayedText, isTypingComplete } = useTypingEffect(
    "Hello, my name is Levi Mickelson",
    125
  );
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      <nav
        className={`${
          theme === "dark"
            ? "bg-gray-800 bg-opacity-50"
            : "bg-white bg-opacity-90"
        } backdrop-blur-md shadow-sm`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span
                className={`text-2xl font-bold ${
                  theme === "dark"
                    ? "text-teal-400"
                    : "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                }`}
              >
                LM
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {["About", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className={`${
                    theme === "dark"
                      ? "text-gray-300 hover:bg-gray-700 hover:text-teal-400"
                      : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                  } px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105`}
                >
                  {item}
                </Link>
              ))}
              <ThemeToggle />
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                } hover:text-gray-900 focus:outline-none focus:text-gray-900`}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["About", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className={`${
                    theme === "dark"
                      ? "text-gray-300 hover:bg-gray-700 hover:text-teal-400"
                      : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                  } block px-3 py-2 rounded-md text-base font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="px-3 py-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 min-h-[5rem] ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            <span
              className={`bg-clip-text text-transparent ${
                theme === "dark"
                  ? "bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"
                  : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              }`}
            >
              {displayedText}
            </span>
            {!isTypingComplete && (
              <span
                className={`inline-block w-1 h-8 sm:h-10 ml-1 ${
                  theme === "dark" ? "bg-teal-400" : "bg-blue-600"
                } animate-blink`}
              ></span>
            )}
          </h1>
          <h3
            className={`text-xl sm:text-2xl mt-4 opacity-80 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Full-stack Developer & Web Designer
          </h3>
          <div className="mt-8 flex justify-center">
            <Link href="/about" passHref>
              <button
                className={`group bg-transparent border-2 ${
                  theme === "dark"
                    ? "border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900"
                    : "border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white"
                } px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  theme === "dark"
                    ? "focus:ring-teal-400"
                    : "focus:ring-blue-400"
                } flex items-center`}
              >
                More About Me
                <ArrowRight className="ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
