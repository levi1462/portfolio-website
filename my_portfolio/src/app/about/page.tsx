"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string[];
}

interface TimelineItemProps extends TimelineItem {
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  company,
  description,
  isLeft,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${
        isLeft ? "flex-row-reverse" : ""
      } transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className={`order-1 w-5/12 ${isLeft ? "text-right" : ""}`}>
        <h3 className="mb-1 font-bold text-teal-400 text-xl">{title}</h3>
        <h4 className="mb-1 font-semibold text-lg text-gray-200">{company}</h4>
        <p className="text-sm font-medium text-gray-400 mb-2">{date}</p>
        <ul
          className={`text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 ${
            isLeft ? "list-none" : "list-disc pl-4"
          }`}
        >
          {description.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="z-20 flex items-center order-1 bg-teal-400 shadow-xl w-8 h-8 rounded-full">
        <div className="mx-auto font-semibold text-lg text-gray-900"></div>
      </div>
      <div className="order-1 w-5/12 px-6 py-4"></div>
    </div>
  );
};

interface Skill {
  skill: string;
  level: number;
}

const SkillBar: React.FC<Skill> = ({ skill, level }) => {
  const [width, setWidth] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [level]);

  return (
    <div className="mb-4" ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-teal-400">{skill}</span>
        <span className="text-sm font-medium text-teal-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-teal-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

interface Project {
  title: string;
  description: string[];
  technologies: string[];
}

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  technologies,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-gray-800 rounded-lg shadow-xl p-6 mb-6 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h3 className="text-xl font-bold text-teal-400 mb-2">{title}</h3>
      <ul className="text-gray-300 mb-4 list-disc pl-4">
        {description.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h4 className="text-sm font-semibold text-gray-400 mb-2">
          Technologies used:
        </h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-teal-400 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const timeline = [
    {
      date: "January 2023 - Present",
      title: "Application Developer",
      company: "CFCU Community Credit Union",
      description: [
        "Played a key role in the transition to CFCU's new digital banking platform by developing full-stack applications for 80,000+ members.",
        "Designed and implemented frontend features using JavaScript, React, HTML, and CSS.",
        "Developed REST and SOAP APIs using Java and Spring Boot, containerized with Docker.",
        "Integrated encryption algorithms and third-party APIs to enhance data security.",
      ],
    },
    {
      date: "Summer 2022",
      title: "Intern",
      company: "CFCU Community Credit Union",
      description: [
        "Created a full-stack social event platform for employees.",
        "Developed frontend using JavaScript, HTML, and CSS with features like event registration and leaderboards.",
        "Designed a REST API using Java, Spring Boot, and MongoDB.",
      ],
    },
    {
      date: "Summer 2021",
      title: "Intern",
      company: "Healthix",
      description: [
        "Developed a Java-based web service for converting PDFs to text documents.",
        "Deployed using Apache Tomcat and Spring Boot.",
        "Tracked metrics with SQL Server and H2 Database.",
      ],
    },
  ];

  const skills = [
    { skill: "Java", level: 90 },
    { skill: "Spring Boot", level: 85 },
    { skill: "JavaScript", level: 90 },
    { skill: "React", level: 85 },
    { skill: "Python", level: 80 },
    { skill: "Docker", level: 75 },
    { skill: "Kubernetes", level: 70 },
  ];

  const projects = [
    {
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
    },
    {
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
    },
    {
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
    },
  ];

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

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          About Me
        </h1>
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-xl p-6 text-gray-300 mb-12">
          <p className="mb-4">
            Hello! I'm Levi Mickelson, a passionate full-stack developer with a
            strong foundation in both front-end and back-end technologies. I
            graduated from Binghamton University with a Bachelor of Science in
            Computer Science, achieving a GPA of 3.49/4.00 and making the Dean's
            List multiple times.
          </p>
          <p className="mb-4">
            My journey in the world of programming began during my university
            years and has since evolved into a professional career where I've
            worked on a variety of projects, from digital banking platforms to
            social event applications. I'm constantly learning and adapting to
            new technologies and methodologies in the ever-evolving tech
            landscape.
          </p>
          <p className="mb-4">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or diving into a good book on
            the latest tech innovations. I'm always excited to take on new
            challenges and create efficient, user-friendly applications that
            make a difference.
          </p>
        </div>

        <h2 className="text-3xl font-semibold text-teal-400 mt-12 mb-6">
          Professional Experience
        </h2>
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-xl p-6 mb-12 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-400"></div>
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.date}
              title={item.title}
              company={item.company}
              description={item.description}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        <h2 className="text-3xl font-semibold text-teal-400 mt-12 mb-6">
          Skills
        </h2>
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-xl p-6 mb-12">
          {skills.map((skill, index) => (
            <SkillBar key={index} {...skill} />
          ))}
        </div>

        <h2 className="text-3xl font-semibold text-teal-400 mt-12 mb-6">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-teal-400 hover:bg-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            View All Projects
          </Link>
        </div>
      </main>
    </div>
  );
}
