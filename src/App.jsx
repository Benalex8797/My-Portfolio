import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Toolkit from "./components/Toolkit";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

// Loading Animation Component
const LoadingAnimation = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-50 via-purple-50 to-sky-50 dark:from-emerald-900 dark:via-purple-900 dark:to-sky-900">
      <div className="text-center">
        <div className="relative mx-auto mb-8">
          <div className="w-24 h-24 border-4 border-emerald-200 dark:border-emerald-800 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-emerald-500 rounded-full animate-ping"></div>
          </div>
          <div
            className="absolute inset-0 w-24 h-24 border-4 border-transparent border-r-emerald-500 rounded-full animate-spin"
            style={{ animationDirection: "reverse" }}
          ></div>
        </div>
        <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
          Alex Benjamin
        </h2>
        <p className="text-emerald-500 dark:text-emerald-300">
          Loading amazing things...
        </p>
      </div>
    </div>
  );
};

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white transition-colors duration-300">
      <LoadingAnimation isLoading={isLoading} />

      {!isLoading && (
        <>
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          <Hero />
          <About />
          <Toolkit />
          <Projects />
          <Skills />
          <Contact />
          <Testimonials />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
