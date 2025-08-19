import React from "react";

const projects = [
  {
    img: "/assets/Screenshot 2025-05-21 182820.png",
    title: "Project Site",
    desc: "A Responsive Personal site project built with HTML, CSS, JAVASCRIPT, LOCAL STORAGE.",
    url: "https://benalex8797.github.io/project-site/",
  },
  {
    img: "/assets/guess game.png",
    title: "Guess Game",
    desc: "Simple number guessing game built with HTML, CSS, JAVASCRIPT & LOCAL STORAGE.",
    url: "https://benalex8797.github.io/guess-game/",
  },
  {
    img: "/assets/Todo-list.png",
    title: "To-Do List",
    desc: "Task management app built with HTML, CSS, JAVASCRIPT & LOCAL STORAGE.",
    url: "https://benalex8797.github.io/todo-list/",
  },
  {
    img: "/assets/watchlist.png",
    title: "Watchlist",
    desc: "App to track and filter favorite movies using local storage. Built with HTML, CSS, JAVASCRIPT.",
    url: "https://benalex8797.github.io/watchlist/",
  },
  {
    img: "/assets/reg-form.png",
    title: "Registration Form",
    desc: "Dynamic register that groups students by class & grade. Built with VANILLA JS, HTML, CSS.",
    url: "https://benalex8797.github.io/reg-form/",
  },
  {
    img: "/assets/quiz game.png",
    title: "Quiz-Game",
    desc: "Interactive quiz game with local storage & admin page functionality, built with HTML, CSS, JAVASCRIPT.",
    url: "https://benalex8797.github.io/task-manager/",
  },
  {
    img: "/assets/foodies.png",
    title: "Responsive-Restaurant-Website",
    desc: "A fully responsive and visually engaging restaurant website built with HTML, CSS, JavaScript, and Bootstrap.",
    url: "https://eatery-site.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-y border-zinc-900/10 dark:border-white/10 bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 dark:from-indigo-900 dark:via-violet-900 dark:to-purple-900 px-4 py-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-emerald-600 dark:text-emerald-400">
          Projects
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-zinc-900/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4 shadow-[0_10px_20px_rgba(16,185,129,0.25)] transition hover:-translate-y-2"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-44 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <h3 className="mt-3 text-lg font-semibold text-emerald-700 dark:text-emerald-400">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-700 dark:text-white/80">
                {p.desc}
              </p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener"
                className="mt-3 inline-block text-emerald-700 dark:text-emerald-300 underline"
              >
                View on live link
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
