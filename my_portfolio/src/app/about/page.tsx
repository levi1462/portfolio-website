"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <nav className="bg-gray-800 bg-opacity-50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold relative group">
                <span className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-400 group-hover:from-teal-400 group-hover:via-blue-500 group-hover:to-purple-600 transition-all duration-300">
                  LM
                </span>
              </Link>
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
    </div>
  );
}
