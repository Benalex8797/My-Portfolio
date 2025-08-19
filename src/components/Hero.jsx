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
      "I'm a passionate Full-Stack Developer specializing in creating modern web applications with clean architecture and best practices. With expertise in both front-end and back-end technologies, I build scalable and maintainable software solutions.";
    let index = 0;
    let isDeleting = false;

    let timer = 0;
    const typeEffect = () => {
      if (!isDeleting) {
        paragraph.textContent = text.substring(0, index + 1);
        index++;
        if (index === text.length) {
          isDeleting = true;
          timer = window.setTimeout(typeEffect, 1500);
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
      className="relative min-h-[85vh] md:min-h-[70vh] lg:min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-emerald-50 dark:from-slate-900 dark:via-purple-900 dark:to-emerald-900 pt-6 md:pt-8"
    >
      <div className="pointer-events-none absolute -top-10 right-10 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:gap-12 lg:gap-16 px-4 py-6 md:py-8 md:grid-cols-2">
        <div className="space-y-5">
          <h1 className="mt-8 md:mt-12 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-white animate-fade-in">
            Alex Benjamin
          </h1>
          <h2 className="mt-8 md:mt-10 text-xl md:text-2xl font-semibold text-white/90">
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
          <div className="pt-2">
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

        <div className="relative mx-auto h-48 w-48 sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-[360px] lg:w-[360px]">
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
