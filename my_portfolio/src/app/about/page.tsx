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
      </main>
    </div>
  );
}
