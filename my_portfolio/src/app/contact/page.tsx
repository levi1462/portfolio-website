"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { ThemeProvider, useTheme } from "../contexts/ThemeContexts";
import { ThemeToggle } from "../components/ThemeToggle";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("levi.mickelson@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const { theme } = useTheme();
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
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          Contact Me
        </h1>
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-xl p-6 text-gray-300 mb-12">
          <p className="mb-6 text-center">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="w-8 flex justify-center">
                <Mail className="w-6 h-6 text-teal-400" />
              </div>
              <span className="text-lg ml-4">levi.mickelson6@gmail.com</span>
              <button
                onClick={copyEmail}
                className="bg-teal-400 text-gray-900 px-3 py-1 rounded-md text-sm font-medium hover:bg-teal-300 transition duration-300 ml-4"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-8 flex justify-center">
                <Github className="w-6 h-6 text-teal-400" />
              </div>
              <Link
                href="https://github.com/levi1462"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-teal-400 hover:text-teal-300 transition duration-300 ml-4"
              >
                github.com/levi1462
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-8 flex justify-center">
                <Linkedin className="w-6 h-6 text-teal-400" />
              </div>
              <Link
                href="https://www.linkedin.com/in/levi-mickelson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-teal-400 hover:text-teal-300 transition duration-300 ml-4"
              >
                linkedin.com/in/levi-mickelson
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-teal-400 hover:bg-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            View My Projects
            <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
          </Link>
        </div>
      </main>
    </div>
  );
}
