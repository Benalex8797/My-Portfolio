import React, { useEffect, useState } from "react";

const Navbar = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-colors ${
        isScrolled
          ? "bg-black/80 dark:bg-zinc-900/80 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#home" className="shrink-0">
          <img
            src="/assets/logos.png"
            alt="logo"
            className="h-10 w-10 rounded-full"
          />
        </a>

        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          {/* <button
            onClick={toggleTheme}
            className="relative rounded-full p-2 text-white/80 hover:text-emerald-400 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black/80 dark:focus:ring-offset-zinc-900/80"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            {isDark ? (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button> */}

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white/90 ring-1 ring-white/10 hover:bg-white/10 md:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" />
            </svg>
            Menu
          </button>
        </div>

        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <a
              className="relative text-white/80 hover:text-emerald-400 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-emerald-400 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"
              href="#home"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              className="relative text-white/80 hover:text-emerald-400 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-emerald-400 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"
              href="#about"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              className="relative text-white/80 hover:text-emerald-400 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-emerald-400 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"
              href="#projects"
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              className="relative text-white/80 hover:text-emerald-400 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-emerald-400 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"
              href="#skills"
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              className="relative text-white/80 hover:text-emerald-400 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-emerald-400 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"
              href="#contact"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/90 dark:bg-zinc-900/90">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {[
              { href: "#home", label: "HOME" },
              { href: "#about", label: "ABOUT" },
              { href: "#projects", label: "PROJECTS" },
              { href: "#skills", label: "SKILLS" },
              { href: "#contact", label: "CONTACT" },
            ].map((item) => (
              <li key={item.href} className="py-2">
                <a
                  className="block w-full text-white/90 hover:text-emerald-400"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
