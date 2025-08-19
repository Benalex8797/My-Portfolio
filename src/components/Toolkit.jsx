import React from "react";

const tools = [
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    name: "VS Code",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    name: "React",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    name: "Next.js",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    name: "Figma",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
    name: "Tailwind CSS",
  },
  {
    src: "https://img.icons8.com/ios-filled/50/000000/hdd.png",
    name: "Local Storage",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    name: "Node.js",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    name: "Express",
  },
  {
    src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    name: "Postman",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    name: "GitHub",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
    name: "Firebase",
  },
  {
    src: "https://img.icons8.com/ios-filled/50/000000/api-settings.png",
    name: "REST API",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
];

const Toolkit = () => {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-cyan-50 to-indigo-50 dark:from-sky-900 dark:via-cyan-900 dark:to-indigo-900 px-4 py-12">
      <h3 className="text-center text-2xl font-bold text-emerald-400">
        My Toolkit
      </h3>
      <div className="mx-auto mt-8 grid max-w-5xl grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="group flex w-full flex-col items-center rounded-xl border border-zinc-900/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-3 sm:p-4 shadow-[0_10px_20px_rgba(16,185,129,0.25)] transition-transform hover:-translate-y-1"
          >
            <img
              src={tool.src}
              alt={tool.name}
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-white [animation:spin_10s_linear_infinite] group-hover:scale-110 transition"
            />
            <span className="mt-2 text-xs sm:text-sm text-zinc-900 dark:text-white/90 text-center">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Toolkit;
