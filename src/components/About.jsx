import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="border-y border-zinc-900/10 dark:border-white/10 bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 dark:from-emerald-900 dark:via-teal-900 dark:to-sky-900 px-4 py-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-emerald-600 dark:text-emerald-400">
          About Me
        </h2>
        <div className="mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80">
              <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400/40 shadow-[0_0_40px_theme(colors.emerald.500/30%)]" />
              <img
                src="/assets/WhatsApp Image 2025-05-18 at 4.01.26 PM.jpeg"
                alt="Alex Benjamin"
                className="relative z-10 h-full w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-4 text-zinc-700 dark:text-white/80">
            <p>
              Hi, I&apos;m Alex a frontend‑focused developer who builds fast,
              accessible, and user‑friendly web apps with JavaScript, React, and
              Tailwind. I enjoy turning ideas into polished interfaces and
              shipping features that feel great to use.
            </p>
            <p>
              Recently, I’ve shipped small products like a quiz game, a movie
              watchlist, and a responsive restaurant site, focusing on clean
              component design, state management, and performance. I’m actively
              expanding my backend skills with Node.js and Express to round out
              my full‑stack capabilities.
            </p>
            <p>
              I’m open to internships and freelance work. If you’re looking for
              someone who cares about details and delivery, let’s talk.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-emerald-600 px-4 py-2 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
