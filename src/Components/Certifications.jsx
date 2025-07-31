import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";

const certifications = [
  {
    title: "Full Stack Development Certificate",
    platform: "Guvi Zen Class",
    year: "2025",
    description:
      "Comprehensive MERN Stack development training covering React, Node.js, MongoDB, and Express.js",
    skills: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript"],
    color: "from-green-400 to-blue-500",
    link: "https://v2.zenclass.in/certificateDownload/ma7TB04TuJanMScB?download=true",
  },
  {
    title: "JavaScript Fundamentals",
    platform: "Guvi Zen Class",
    year: "2025",
    description:
      "Advanced JavaScript concepts including ES6+, async programming, and modern development practices",
    skills: ["ES6+", "Async/Await", "DOM Manipulation", "API Integration"],
    color: "from-yellow-400 to-orange-500",
    link: "#",
  },
  {
    title: "React Developer Certification",
    platform: "Development Academy",
    year: "2025",
    description:
      "React fundamentals, hooks, routing, state management, and performance optimization",
    skills: ["JSX", "Hooks", "React Router", "Redux"],
    color: "from-cyan-400 to-blue-500",
    link: "https://v2.zenclass.in/certificateDownload/IhaGbhysRjQtjgNO?download=true",
  },
  {
    title: "Backend Development with Node.js",
    platform: "Guvi Zen Class",
    year: "2025",
    description:
      "Backend concepts with Node.js, REST APIs, Express middleware, and error handling",
    skills: ["Node.js", "Express", "REST API", "JWT"],
    color: "from-green-400 to-emerald-500",
    link: "https://v2.zenclass.in/certificateDownload/qYUQILWd14s2AkAq?download=true",
  },
  {
    title: " Accenture Nordics's Software Engineering",
    platform: "Accenture Forage",
    year: "2025",
    description:
      "Demonstrated architecture planning, secure coding, testing, and Agile delivery in a real-world scenario-based simulation.",
    skills: ["Security & SDLC", "Architecture", "Methodologies"],
    color: "from-green-400 to-emerald-500",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_gSfuRxZMk36Zn2yyk_1753610804264_completion_certificate.pdf",
  },
];

const Certifications = () => {
  return (
    <section className="py-16 px-4 bg-gray-50" id="certification">
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center">
          <div className="flex items-center space-x-3">
            <FaMedal className="text-4xl bg-gradient-to-r from-purple-400 to-blue-500 text-white p-[2px] rounded-full shadow-md" />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Certifications
            </h2>
          </div>
        </div>

        <p className="text-center text-gray-500 mb-10 text-lg">
          Professional certifications and achievements in web development
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${cert.color} rounded-xl text-white shadow-lg`}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-100 mb-2">
                  {cert.platform} • {cert.year}
                </p>
                <p className="text-sm text-white/90 mb-4">{cert.description}</p>
                <p className="font-semibold mb-2">Skills Covered:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-white/30 backdrop-blur-sm text-sm px-3 py-1 rounded-full text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={cert.link}
                  className="inline-flex items-center gap-2 bg-white text-purple-600 font-medium px-4 py-2 rounded-md hover:bg-purple-100 transition"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
