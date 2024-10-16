"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContexts";
import { ThemeToggle } from "../components/ThemeToggle";

interface Project {
  id: number;
  title: string;
  description: string[];
  technologies: string[];
  githubUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Kubernetes Chaos Engineering",
    description: [
      "Implemented and containerized a live chat application using Python Flask, MongoDB, and Docker.",
      "Deployed the application to a Kubernetes cluster on Google Cloud Platform.",
      "Used Chaos Mesh to inject faults and examine system fault tolerance.",
    ],
    technologies: [
      "Python",
      "Flask",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "GCP",
      "Chaos Mesh",
    ],
    githubUrl: "https://github.com/yourusername/kubernetes-chaos-engineering",
    category: "Programming",
  },
  {
    id: 2,
    title: "Python Socket Programming",
    description: [
      "Engineered a multi-threaded proxy and webserver using Python socket programming.",
      "Implemented proxy server caching to reduce webserver load.",
      "Developed safe termination protocols for server threads.",
    ],
    technologies: [
      "Python",
      "Socket Programming",
      "Multi-threading",
      "Caching",
    ],
    githubUrl: "https://github.com/yourusername/python-socket-programming",
    category: "Programming",
  },
  {
    id: 3,
    title: "Stock Market Price Prediction using RNNs",
    description: [
      "Implemented and extended a research paper on stock market prediction using PyTorch and NumPy.",
      "Adapted models for S&P 500 and Apple stock data, incorporating additional features.",
      "Introduced Bidirectional LSTM (BLSTM) and optimized existing models.",
      "Conducted comprehensive evaluations using Python Pandas.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "NumPy",
      "Pandas",
      "Machine Learning",
      "RNN",
      "LSTM",
    ],
    githubUrl: "https://github.com/yourusername/stock-market-prediction-rnn",
    category: "Machine Learning",
  },
  {
    id: 4,
    title: "Responsive Portfolio Website",
    description: [
      "Designed and developed a personal portfolio website using React and Next.js.",
      "Implemented responsive design principles to ensure optimal viewing across all devices.",
      "Utilized Tailwind CSS for efficient and consistent styling.",
      "Incorporated smooth animations and transitions for enhanced user experience.",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/levi1462/portfolio-website",
    category: "Web Design",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className={`${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      } rounded-lg shadow-xl p-6 flex flex-col h-full`}
    >
      <h3
        className={`text-2xl font-bold ${
          theme === "dark" ? "text-teal-400" : "text-blue-600"
        } mb-4`}
      >
        {project.title}
      </h3>
      <ul
        className={`${
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        } mb-4 list-disc pl-5 flex-grow`}
      >
        {project.description.map((item, idx) => (
          <li key={idx} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className={`${
              theme === "dark"
                ? "bg-gray-700 text-teal-400"
                : "bg-blue-100 text-blue-600"
            } text-xs px-2 py-1 rounded`}
          >
            {tech}
          </span>
        ))}
      </div>
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            theme === "dark"
              ? "text-teal-400 hover:text-teal-300"
              : "text-blue-600 hover:text-blue-700"
          } transition duration-300 flex items-center`}
        >
          <Github className="w-5 h-5 mr-2" />
          View on GitHub
        </a>
      )}
    </motion.div>
  );
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen ${
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
        } backdrop-blur-md sticky top-0 z-50 shadow-sm`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold relative group">
                <span className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></span>
                <span
                  className={`relative bg-clip-text text-transparent ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-teal-400 to-teal-400 group-hover:from-teal-400 group-hover:via-blue-500 group-hover:to-purple-600"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-400 group-hover:via-purple-500 group-hover:to-pink-500"
                  } transition-all duration-300`}
                >
                  LM
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
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
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1
          className={`text-4xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-800"
          } mb-6 text-center`}
        >
          My Projects
        </h1>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium ${
                  selectedCategory === category
                    ? theme === "dark"
                      ? "bg-teal-400 text-gray-900"
                      : "bg-blue-600 text-white"
                    : theme === "dark"
                    ? "bg-gray-800 text-teal-400 hover:bg-gray-700"
                    : "bg-white text-blue-600 hover:bg-gray-100"
                } border ${
                  theme === "dark" ? "border-gray-700" : "border-gray-200"
                } first:rounded-l-md last:rounded-r-md focus:z-10 focus:ring-2 ${
                  theme === "dark"
                    ? "focus:ring-teal-400"
                    : "focus:ring-blue-400"
                } transition-all duration-300`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md ${
              theme === "dark"
                ? "text-gray-900 bg-teal-400 hover:bg-teal-500"
                : "text-white bg-blue-600 hover:bg-blue-700"
            } transition duration-300 ease-in-out transform hover:scale-105`}
          >
            Get in Touch
            <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
          </Link>
        </div>
      </main>
    </div>
  );
}
