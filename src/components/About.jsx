import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative border-y border-zinc-900/10 dark:border-white/10 bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 dark:from-emerald-900 dark:via-teal-900 dark:to-sky-900 px-4 pt-10 pb-16 overflow-hidden"
    >
      {/* Background floating elements */}
      <div className="pointer-events-none absolute top-10 right-10 h-32 w-32 rounded-full bg-teal-500/10 blur-2xl animate-pulse" />
      <div
        className="pointer-events-none absolute bottom-10 left-10 h-40 w-40 rounded-full bg-sky-500/10 blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Advanced Particle System */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl">
        <h2
          className={`text-center text-3xl font-bold text-emerald-600 dark:text-emerald-400 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          About Me
        </h2>
        <div className="mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div
            className={`order-2 md:order-1 transition-all duration-1000 delay-300 perspective-1000 ${
              isVisible
                ? "opacity-100 translate-x-0 rotate-y-0"
                : "opacity-0 -translate-x-8 rotate-y-12"
            }`}
          >
            <div className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/40 via-teal-400/40 to-sky-400/40 blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400/40 shadow-[0_0_40px_theme(colors.emerald.500/30%)] group-hover:shadow-[0_0_60px_theme(colors.emerald.500/50%)] transition-all duration-500" />
              <img
                src="/assets/WhatsApp Image 2025-05-18 at 4.01.26 PM.jpeg"
                alt="Alex Benjamin"
                className="relative z-10 h-full w-full rounded-2xl object-cover shadow-xl group-hover:scale-105 group-hover:rotate-y-3 transition-all duration-500"
              />

              {/* Floating elements around image */}
              <div
                className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400/60 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-teal-400/60 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute top-1/2 -left-3 w-3 h-3 bg-sky-400/60 rounded-full animate-pulse"
                style={{ animationDelay: "1.5s" }}
              />
            </div>
          </div>
          <div
            className={`order-1 md:order-2 space-y-4 text-zinc-700 dark:text-white/80 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0 rotate-y-0"
                : "opacity-0 translate-x-8 -rotate-y-12"
            }`}
          >
            <p className="leading-relaxed">
              Hi, I'm Alex! I'm a passionate Full-Stack Developer with a love
              for creating exceptional digital experiences. I specialize in
              building modern, responsive web applications that not only look
              stunning but also deliver outstanding performance and user
              experience.
            </p>
            <p className="leading-relaxed">
              My journey in web development has led me to create diverse
              projects including interactive games, productivity apps, and
              responsive websites. I'm particularly proud of my work on a
              restaurant website that showcases modern design principles, and a
              comprehensive quiz game that demonstrates my skills in state
              management and user interaction.
            </p>
            <p className="leading-relaxed">
              I'm currently expanding my expertise in backend technologies like
              Node.js and Express, while maintaining my passion for crafting
              beautiful, accessible frontend experiences. I'm always eager to
              take on new challenges and collaborate on exciting projects.
            </p>
            <p className="leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community. I'm actively seeking opportunities to
              work with innovative teams and create impactful digital solutions.
            </p>
            <div
              className={`mt-6 flex gap-3 transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              <a
                href="#projects"
                className="rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 py-2 text-white font-medium hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover-lift"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="rounded-lg border-2 border-emerald-600 px-4 py-2 text-emerald-700 dark:text-emerald-300 font-medium hover:bg-emerald-50 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 hover-lift"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
