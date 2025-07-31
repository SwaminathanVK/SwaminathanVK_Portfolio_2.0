import React from 'react';
import event from '../assets/event.webp';
import climate from "../assets/climate.jpg";
import movie from "../assets/movie.png";
import { FaReact } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="bg-[#f5f6fa] py-20 text-gray-800 w-full" id="project">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold flex justify-center items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 animate-shine">
            <FaReact className="text-blue-400 text-4xl animate-spin slow" />
            Featured Projects
          </h2>
          <p className="text-gray-500 mt-2 text-lg">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-transform hover:scale-[1.01]"
            >
              <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="text-sm text-blue-600 space-y-1 list-disc list-inside mb-4">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1 bg-gray-800 text-white rounded-full text-sm hover:bg-gray-900"
                  >
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/SwaminathanVK?tab=repositories"
            className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full text-sm font-semibold shadow-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐙 View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

const projects = [
  {
    title: 'Event Management System',
    description: 'Collaborative task management with real-time updates and tracking.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    features: ['Real-time Updates', 'Team Collaboration', 'Task Analytics', 'File Attachments'],
    code: 'https://github.com/SwaminathanVK/EventManagement-Frontend',
    demo: 'https://famous-souffle-ff686b.netlify.app/',
    image: event,
  },
  {
    title: 'Weather Dashboard',
    description: 'Weather forecasts, interactive maps, and detailed analytics.',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS'],
    features: ['API Integration', 'Location Search', 'Interactive Maps', 'Mobile Responsive'],
    code: 'https://github.com/SwaminathanVK/-Climate-Viewer.git',
    demo: 'https://climateviewer.netlify.app/',
    image: climate,
  },
  {
    title: 'Movie Viewer',
    description:
      'Search for movies by title using the OMDb API. Displays poster, title, year, genre, plot, and more.',
    tech: ['React.js', 'API', 'JavaScript'],
    features: ['Multi-platform Support', 'Post Scheduling', 'Analytics Dashboard', 'Content Management'],
    code: 'https://github.com/SwaminathanVK/Movie-SearchingApi.git',
    demo: 'https://moviesearcherapi.netlify.app/',
    image: movie,
  },
];

export default Projects;
