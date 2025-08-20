import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-zinc-900/10 dark:border-white/10 bg-gradient-to-br from-zinc-100 via-emerald-50 to-white dark:from-zinc-950 dark:via-emerald-900 dark:to-black px-4 py-12 text-center text-zinc-600 dark:text-white/80">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
            Ready to Start a Project?
          </h3>
          <p className="text-lg text-zinc-700 dark:text-white/80 mb-6">
            Let's collaborate to bring your ideas to life with cutting-edge web
            solutions.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        <div className="border-t border-zinc-900/10 dark:border-white/10 pt-8">
          <p className="text-lg font-medium text-zinc-800 dark:text-white/90 mb-2">
            &copy; 2025 Alex Benjamin. All rights reserved.
          </p>
          <p className="text-zinc-600 dark:text-white/70 mb-4">
            Crafted with passion and attention to detail.
          </p>
          
        </div>
      </div>

      {/* Back to top arrow */}
      <button
        onClick={scrollToTop}
        className="hidden md:inline-flex absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
        aria-label="Back to top"
        title="Back to top"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
