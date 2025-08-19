import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 dark:from-indigo-900 dark:via-violet-900 dark:to-purple-900 px-4 py-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-emerald-700 dark:text-emerald-400">
          Technical Expertise
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-900/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 shadow-[0_10px_20px_rgba(16,185,129,0.25)] transition hover:-translate-y-2">
            <div className="text-2xl text-emerald-400">
              <i className="fa-solid fa-code" />
            </div>
            <h3 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-white">
              Frontend Development
            </h3>
            <p className="mt-1 text-zinc-700 dark:text-white/80">
              HTML, CSS, Tailwind, Bootstrap, JavaScript, React
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-900/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 shadow-[0_10px_20px_rgba(16,185,129,0.25)] transition hover:-translate-y-2">
            <div className="text-2xl text-emerald-400">
              <i className="fa-solid fa-server" />
            </div>
            <h3 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-white">
              Backend Development
            </h3>
            <p className="mt-1 text-zinc-700 dark:text-white/80">
              Node.js, Express, Python, Django
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
