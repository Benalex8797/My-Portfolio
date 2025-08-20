import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const typingRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady || !typingRef.current) return;
    const paragraph = typingRef.current;
    const text =
      "I'm a passionate Full-Stack Developer who transforms ideas into exceptional digital experiences. With expertise in modern web technologies, I craft scalable applications that combine beautiful design with robust functionality. Let's build something amazing together!";
    let index = 0;
    let isDeleting = false;

    let timer = 0;
    const typeEffect = () => {
      if (!isDeleting) {
        paragraph.textContent = text.substring(0, index + 1);
        index++;
        if (index === text.length) {
          isDeleting = true;
          timer = window.setTimeout(typeEffect, 2000);
          return;
        }
      } else {
        paragraph.textContent = text.substring(0, index - 1);
        index--;
        if (index === 0) {
          isDeleting = false;
        }
      }
      timer = window.setTimeout(typeEffect, isDeleting ? 20 : 40);
    };

    typeEffect();
    return () => window.clearTimeout(timer);
  }, [isReady]);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-[65vh] lg:min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-emerald-50 dark:from-slate-900 dark:via-purple-900 dark:to-emerald-900 pt-6 md:pt-6"
    >
      {/* Social sidebar for md+ screens */}
      <div className="hidden md:flex flex-col items-center gap-2 absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 dark:bg-slate-800/30 backdrop-blur-xl border border-white/30 dark:border-slate-700/50 rounded-2xl p-3 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:scale-105">
        <span className="h-8 w-px bg-gradient-to-b from-emerald-400/60 to-transparent" />
        <a
          href="https://github.com/Benalex8797"
          className="group rounded-full bg-white/90 dark:bg-slate-700/90 backdrop-blur-sm p-2 text-zinc-900 dark:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-slate-600 hover:ring-2 hover:ring-gray-300 dark:hover:ring-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 active:bg-gray-200 dark:active:bg-slate-500"
          aria-label="GitHub"
          title="GitHub"
        >
          <i className="fa-brands fa-github group-hover:text-gray-700 dark:group-hover:text-emerald-400 transition-colors duration-300" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/benjamin-alex-42b974350"
          className="group rounded-full bg-white/90 dark:bg-slate-700/90 backdrop-blur-sm p-2 text-zinc-900 dark:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-100 dark:hover:bg-slate-600 hover:ring-2 hover:ring-blue-300 dark:hover:ring-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 active:bg-blue-200 dark:active:bg-slate-500"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <i className="fa-brands fa-linkedin group-hover:text-blue-600 dark:group-hover:text-emerald-400 transition-colors duration-300" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://twitter.com/Atamilliondoll1"
          className="group rounded-full bg-white/90 dark:bg-slate-700/90 backdrop-blur-sm p-2 text-zinc-900 dark:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-sky-100 dark:hover:bg-slate-600 hover:ring-2 hover:ring-sky-300 dark:hover:ring-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 active:bg-sky-200 dark:active:bg-slate-500"
          aria-label="Twitter"
          title="Twitter"
        >
          <i className="fa-brands fa-square-x-twitter group-hover:text-sky-500 dark:group-hover:text-emerald-400 transition-colors duration-300" />
          <span className="sr-only">Twitter</span>
        </a>
        <a
          href="https://www.instagram.com/direct/inbox/"
          className="group rounded-full bg-white/90 dark:bg-slate-700/90 backdrop-blur-sm p-2 text-zinc-900 dark:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-pink-100 dark:hover:bg-slate-600 hover:ring-2 hover:ring-pink-300 dark:hover:ring-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 active:bg-pink-200 dark:active:bg-slate-500"
          aria-label="Instagram"
          title="Instagram"
        >
          <i className="fa-brands fa-square-instagram group-hover:text-pink-500 dark:group-hover:text-emerald-400 transition-colors duration-300" />
          <span className="sr-only">Instagram</span>
        </a>
        <a
          href="https://wa.me/2348139788891?text=Hello%20Benjamin%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
          className="group rounded-full bg-white/90 dark:bg-slate-700/90 backdrop-blur-sm p-2 text-zinc-900 dark:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-green-100 dark:hover:bg-slate-600 hover:ring-2 hover:ring-green-300 dark:hover:ring-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 active:bg-green-200 dark:active:bg-slate-500"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <i className="fa-brands fa-whatsapp group-hover:text-green-600 dark:group-hover:text-emerald-400 transition-colors duration-300" />
          <span className="sr-only">WhatsApp</span>
        </a>
        <span className="h-8 w-px bg-gradient-to-b from-transparent to-emerald-400/60" />
      </div>
      <div className="pointer-events-none absolute -top-10 right-10 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />

      {/* Additional floating background elements */}
      <div className="pointer-events-none absolute top-20 left-1/4 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl animate-pulse" />
      <div
        className="pointer-events-none absolute bottom-20 right-1/4 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/3 h-24 w-24 rounded-full bg-emerald-500/15 blur-xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Floating geometric shapes */}
      <div
        className="pointer-events-none absolute top-32 right-32 w-16 h-16 border border-emerald-400/20 rotate-45 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="pointer-events-none absolute bottom-32 left-32 w-12 h-12 border border-purple-400/20 rotate-12 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Advanced Particle System */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 bg-white/40 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:gap-8 lg:gap-16 px-4 md:pl-24 lg:pl-32 pt-4 pb-2 md:pt-4 md:pb-2 md:grid-cols-2">
        <div className="space-y-5 md:mt-8">
          <h1 className="mt-8 md:mt-8 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-white animate-fade-in">
            Alex Benjamin
          </h1>
          <h2 className="mt-8 md:mt-6 text-xl md:text-2xl font-semibold text-white/90">
            Full Stack Developer
          </h2>
          <p
            ref={typingRef}
            className="min-h-16 max-w-xl text-balance text-white/80"
          ></p>
          <div>
            <a
              href="#contact"
              className="inline-block rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-3 font-semibold text-black shadow hover:from-emerald-400 hover:to-emerald-500"
            >
              Let's Connect
            </a>
          </div>
          <div className="pt-2 md:hidden">
            <ul className="flex flex-wrap items-center justify-start gap-3">
              <li>
                <a
                  href="https://github.com/Benalex8797"
                  className="group inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-zinc-900 shadow hover:translate-y-[-2px] hover:shadow-lg hover:scale-105 transition-all duration-200 hover:bg-gray-100"
                >
                  <i className="fa-brands fa-github group-hover:text-gray-700 transition-colors" />
                  <span className="group-hover:text-gray-700 transition-colors">
                    GitHub
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/benjamin-alex-42b974350"
                  className="group inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-zinc-900 shadow hover:translate-y-[-2px] hover:shadow-lg hover:scale-105 transition-all duration-200 hover:bg-blue-100"
                >
                  <i className="fa-brands fa-linkedin group-hover:text-blue-600 transition-colors" />
                  <span className="group-hover:text-blue-600 transition-colors">
                    LinkedIn
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Atamilliondoll1"
                  className="group inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-zinc-900 shadow hover:translate-y-[-2px] hover:shadow-lg hover:scale-105 transition-all duration-200 hover:bg-sky-100"
                >
                  <i className="fa-brands fa-square-x-twitter group-hover:text-sky-500 transition-colors" />
                  <span className="group-hover:text-sky-500 transition-colors">
                    Twitter
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/direct/inbox/"
                  className="group inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-zinc-900 shadow hover:translate-y-[-2px] hover:shadow-lg hover:scale-105 transition-all duration-200 hover:bg-pink-100"
                >
                  <i className="fa-brands fa-square-instagram group-hover:text-pink-500 transition-colors" />
                  <span className="group-hover:text-pink-500 transition-colors">
                    Instagram
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348139788891?text=Hello%20Benjamin%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
                  className="group inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-zinc-900 shadow hover:translate-y-[-2px] hover:shadow-lg hover:scale-105 transition-all duration-200 hover:bg-green-100"
                >
                  <i className="fa-brands fa-whatsapp group-hover:text-green-600 transition-colors" />
                  <span className="group-hover:text-green-600 transition-colors">
                    WhatsApp
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mx-auto h-48 w-48 sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-[360px] lg:w-[360px] mt-6 md:mt-10">
          <div className="absolute inset-0 rounded-full border-2 border-emerald-400/50 shadow-[0_0_40px_theme(colors.emerald.500/40%)]" />
          <img
            src="/assets/img3.jpeg"
            alt="Alex Benjamin"
            className="relative z-10 h-full w-full rounded-full object-cover shadow-xl [animation:float_3s_ease-in-out_infinite]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
