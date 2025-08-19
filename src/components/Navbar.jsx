import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Theme toggle removed

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
