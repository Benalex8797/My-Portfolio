import React, { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 dark:from-indigo-900 dark:via-violet-900 dark:to-purple-900 px-4 py-16 overflow-hidden"
    >
      {/* Background Particle System */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 bg-violet-400/30 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <h2
          className={`text-center text-3xl font-bold text-emerald-700 dark:text-emerald-400 mb-4 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          Technical Expertise
        </h2>
        <p
          className={`text-center text-lg text-zinc-700 dark:text-white/80 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          I've developed a diverse skill set through hands-on experience
          building real-world applications. From frontend frameworks to backend
          technologies, I'm constantly expanding my knowledge to deliver
          cutting-edge solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend Development */}
          <div
            className={`group rounded-2xl border border-zinc-900/10 dark:border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 shadow-[0_10px_20px_rgba(16,185,129,0.15)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all duration-500 hover:-translate-y-2 perspective-1000 hover-lift ${
              isVisible
                ? "opacity-100 translate-y-0 rotate-y-0"
                : "opacity-0 translate-y-8 rotate-y-12"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="text-3xl text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300 group-hover:scale-110 transform origin-center">
              <i className="fa-solid fa-code" />
            </div>
            <h3 className="mt-3 text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
              Frontend Development
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-white/80 leading-relaxed">
              Expert in creating responsive, accessible user interfaces using
              modern HTML5, CSS3, and JavaScript. Proficient with React
              ecosystem, Tailwind CSS, and Bootstrap for rapid development.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
                "Tailwind CSS",
                "Bootstrap",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full transition-all duration-300 hover:scale-110 hover:bg-emerald-200 dark:hover:bg-emerald-800/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Development */}
          <div
            className={`group rounded-2xl border border-zinc-900/10 dark:border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 shadow-[0_10px_20px_rgba(16,185,129,0.15)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all duration-500 hover:-translate-y-2 perspective-1000 hover-lift ${
              isVisible
                ? "opacity-100 translate-y-0 rotate-y-0"
                : "opacity-0 translate-y-8 rotate-y-12"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="text-3xl text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300 group-hover:scale-110 transform origin-center">
              <i className="fa-solid fa-server" />
            </div>
            <h3 className="mt-3 text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
              Backend Development
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-white/80 leading-relaxed">
              Building robust server-side applications with Node.js and Express.
              Experience with Python and Django for full-stack development and
              API creation.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express",
                "Python",
                "Django",
                "REST APIs",
                "MongoDB",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full transition-all duration-300 hover:scale-110 hover:bg-emerald-200 dark:hover:bg-emerald-800/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Development Tools */}
          <div
            className={`group rounded-2xl border border-zinc-900/10 dark:border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 shadow-[0_10px_20px_rgba(16,185,129,0.15)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all duration-500 hover:-translate-y-2 perspective-1000 hover-lift ${
              isVisible
                ? "opacity-100 translate-y-0 rotate-y-0"
                : "opacity-0 translate-y-8 rotate-y-12"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="text-3xl text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300 group-hover:scale-110 transform origin-center">
              <i className="fa-solid fa-tools" />
            </div>
            <h3 className="mt-3 text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
              Development Tools
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-white/80 leading-relaxed">
              Proficient with modern development workflows including Git version
              control, VS Code, and various build tools. Experience with
              responsive design and cross-browser compatibility.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Git",
                "VS Code",
                "Responsive Design",
                "Local Storage",
                "Web APIs",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full transition-all duration-300 hover:scale-110 hover:bg-emerald-200 dark:hover:bg-emerald-800/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* UI/UX Design */}
          <div
            className={`group rounded-2xl border border-zinc-900/10 dark:border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 shadow-[0_10px_20px_rgba(16,185,129,0.15)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all duration-500 hover:-translate-y-2 perspective-1000 hover-lift ${
              isVisible
                ? "opacity-100 translate-y-0 rotate-y-0"
                : "opacity-0 translate-y-8 rotate-y-12"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="text-3xl text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300 group-hover:scale-110 transform origin-center">
              <i className="fa-solid fa-palette" />
            </div>
            <h3 className="mt-3 text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
              UI/UX Design
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-white/80 leading-relaxed">
              Creating intuitive user experiences with focus on accessibility,
              performance, and modern design principles. Skilled in creating
              engaging animations and micro-interactions.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "User Experience",
                "Accessibility",
                "Performance",
                "Animations",
                "Responsive Design",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full transition-all duration-300 hover:scale-110 hover:bg-emerald-200 dark:hover:bg-emerald-800/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Problem Solving */}
          <div
            className={`group rounded-2xl border border-zinc-900/10 dark:border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 shadow-[0_10px_20px_rgba(16,185,129,0.15)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all duration-500 hover:-translate-y-2 perspective-1000 hover-lift ${
              isVisible
                ? "opacity-100 translate-y-0 rotate-y-0"
                : "opacity-0 translate-y-8 rotate-y-12"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="text-3xl text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300 group-hover:scale-110 transform origin-center">
              <i className="fa-solid fa-lightbulb" />
            </div>
            <h3 className="mt-3 text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
              Problem Solving
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-white/80 leading-relaxed">
              Strong analytical skills for debugging complex issues and
              implementing efficient solutions. Experience with algorithm
              optimization and best practices.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Debugging",
                "Algorithm Design",
                "Code Review",
                "Best Practices",
                "Documentation",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full transition-all duration-300 hover:scale-110 hover:bg-emerald-200 dark:hover:bg-emerald-800/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Continuous Learning */}
          <div
            className={`group rounded-2xl border border-zinc-900/10 dark:border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 shadow-[0_10px_20px_rgba(16,185,129,0.15)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all duration-500 hover:-translate-y-2 perspective-1000 hover-lift ${
              isVisible
                ? "opacity-100 translate-y-0 rotate-y-0"
                : "opacity-0 translate-y-8 rotate-y-12"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="text-3xl text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300 group-hover:scale-110 transform origin-center">
              <i className="fa-solid fa-graduation-cap" />
            </div>
            <h3 className="mt-3 text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
              Continuous Learning
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-white/80 leading-relaxed">
              Passionate about staying current with emerging technologies and
              industry trends. Actively contributing to open-source projects and
              sharing knowledge.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Open Source",
                "Tech Trends",
                "Knowledge Sharing",
                "Mentoring",
                "Community",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full transition-all duration-300 hover:scale-110 hover:bg-emerald-200 dark:hover:bg-emerald-800/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
