import React, { useState } from "react";

const projects = [
  {
    img: "/assets/Screenshot 2025-05-21 182820.png",
    title: "Personal Portfolio Site",
    desc: "A modern, responsive personal portfolio showcasing my skills and projects. Built with clean HTML, CSS, and JavaScript, featuring smooth animations and local storage for enhanced user experience.",
    url: "https://benalex8797.github.io/project-site/",
    category: "frontend",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
  },
  {
    img: "/assets/guess game.png",
    title: "Interactive Number Guessing Game",
    desc: "An engaging number guessing game that challenges players to guess the correct number within a range. Features score tracking, hints, and persistent game state using local storage.",
    url: "https://benalex8797.github.io/guess-game/",
    category: "game",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
  },
  {
    img: "/assets/Todo-list.png",
    title: "Smart Task Manager",
    desc: "A comprehensive task management application that helps users organize their daily activities. Features task creation, editing, completion tracking, and data persistence across sessions.",
    url: "https://benalex8797.github.io/todo-list/",
    category: "app",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
  },
  {
    img: "/assets/watchlist.png",
    title: "Movie Watchlist Tracker",
    desc: "A dynamic movie management app that allows users to create personalized watchlists, filter by genres, and track their viewing progress. Built with a focus on user experience and data organization.",
    url: "https://benalex8797.github.io/watchlist/",
    category: "app",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
  },
  {
    img: "/assets/reg-form.png",
    title: "Student Registration System",
    desc: "A comprehensive student registration form with dynamic class grouping and grade management. Features form validation, data organization, and responsive design for educational institutions.",
    url: "https://benalex8797.github.io/reg-form/",
    category: "form",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    img: "/assets/quiz game.png",
    title: "Interactive Quiz Platform",
    desc: "A feature-rich quiz application with admin functionality and local storage integration. Includes question management, score tracking, and an intuitive user interface for both players and administrators.",
    url: "https://benalex8797.github.io/task-manager/",
    category: "game",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
  },
  {
    img: "/assets/foodies.png",
    title: "Modern Restaurant Website",
    desc: "A fully responsive restaurant website that delivers an exceptional dining experience online. Features beautiful imagery, menu showcases, and seamless navigation across all devices using Bootstrap framework.",
    url: "https://eatery-site.vercel.app/",
    category: "frontend",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    img: "/assets/hearth shot.png",
    title: "Business Consultant Platform",
    desc: "A professional business consultant website built with modern technologies. Features smooth animations, responsive design, and a sophisticated user interface that reflects the quality of professional services offered.",
    url: "https://hearth-website-32y4.vercel.app/",
    category: "fullstack",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Supabase"],
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full Stack" },
    { id: "app", label: "Applications" },
    { id: "game", label: "Games" },
    { id: "form", label: "Forms" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="border-y border-zinc-900/10 dark:border-white/10 bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 dark:from-indigo-900 dark:via-violet-900 dark:to-purple-900 px-4 py-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-emerald-600 dark:text-emerald-400">
          Projects
        </h2>

        {/* Filter Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-emerald-600 text-white shadow-lg scale-105"
                  : "bg-white/80 dark:bg-slate-800/80 text-zinc-700 dark:text-white/80 hover:bg-emerald-100 dark:hover:bg-slate-700/80 hover:scale-105"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project Count */}
        <p className="text-center mt-4 text-zinc-600 dark:text-zinc-400">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p, index) => (
            <div
              key={p.title}
              className="group relative rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-white/10 p-4 shadow-[0_8px_32px_rgba(16,185,129,0.15)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all duration-500 hover:-translate-y-3 overflow-hidden perspective-1000 hover-lift"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "fadeInUp 0.8s ease-out forwards",
                opacity: 0,
              }}
            >
              {/* 3D Card Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 via-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-y-12" />

              {/* Content wrapper */}
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-xl group-hover:rotate-y-6 transition-transform duration-500">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating tech badges */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2">
                    <div className="bg-emerald-500/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                      {p.category}
                    </div>
                  </div>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-600 transition-colors duration-300 group-hover:scale-105 transform origin-left">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-700 dark:text-white/80 group-hover:text-zinc-800 dark:group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {p.desc}
                </p>

                {/* Technology Tags with enhanced styling */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full transition-all duration-300 hover:scale-110 hover:bg-emerald-200 dark:hover:bg-emerald-800/50"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                  {p.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full hover:scale-110 transition-transform duration-300">
                      +{p.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Enhanced button with 3D effect */}
                <div className="mt-3 transform group-hover:scale-105 transition-transform duration-300">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener"
                    className="inline-block rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 py-2 text-white font-medium hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform hover:-translate-y-1"
                  >
                    <span className="flex items-center gap-2">
                      <span>View Live</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
