import React, { useEffect, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show floating bar when near bottom or contact section
      if (
        scrollPosition > windowHeight * 0.7 ||
        scrollPosition > documentHeight - windowHeight * 1.5
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Contact Bar */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="flex flex-col gap-3">
          {/* Quick Contact Button */}
          <button className="group relative bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Send Email
            </span>
          </button>

          {/* WhatsApp Quick Contact */}
          <a
            href="https://wa.me/2348139788891?text=Hello%20Benjamin%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
            className="group relative bg-green-600 hover:bg-green-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener"
          >
            <i className="fa-brands fa-whatsapp text-lg" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              WhatsApp
            </span>
          </a>
        </div>
      </div>

      {/* Main Contact Section */}
      <section
        id="contact"
        className="border-y border-zinc-900/10 dark:border-white/10 bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 dark:from-emerald-900 dark:via-teal-900 dark:to-sky-900 px-4 py-16"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-8">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-zinc-700 dark:text-white/80 mb-8">
            I'm passionate about creating exceptional digital experiences and
            always excited to discuss new opportunities, innovative projects, or
            simply connect with fellow developers and creative minds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-300">
                Get In Touch
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:benalex8797@gmail.com"
                  className="flex items-center justify-center gap-3 p-3 bg-white/80 dark:bg-slate-800/80 rounded-lg hover:bg-emerald-50 dark:hover:bg-slate-700/80 transition-colors duration-300 group"
                >
                  <svg
                    className="w-5 h-5 text-emerald-600 group-hover:text-emerald-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-zinc-700 dark:text-white/80 group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
                    benalex8797@gmail.com
                  </span>
                </a>

                <a
                  href="https://wa.me/2348139788891?text=Hello%20Benjamin%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
                  className="flex items-center justify-center gap-3 p-3 bg-white/80 dark:bg-slate-800/80 rounded-lg hover:bg-emerald-50 dark:hover:bg-slate-700/80 transition-colors duration-300 group"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fa-brands fa-whatsapp text-lg text-green-600 group-hover:text-green-700" />
                  <span className="text-zinc-700 dark:text-white/80 group-hover:text-green-700 dark:group-hover:text-green-300">
                    +234 813 978 8891
                  </span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-300">
                Connect & Collaborate
              </h3>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/Benalex8797"
                  className="p-3 bg-white/80 dark:bg-slate-800/80 rounded-lg hover:bg-emerald-50 dark:hover:bg-slate-700/80 transition-all duration-300 hover:scale-110 group"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fa-brands fa-github text-2xl text-zinc-700 dark:text-white/80 group-hover:text-emerald-600" />
                </a>

                <a
                  href="https://www.linkedin.com/in/benjamin-alex-42b974350"
                  className="p-3 bg-white/80 dark:bg-slate-800/80 rounded-lg hover:bg-emerald-50 dark:hover:bg-slate-700/80 transition-all duration-300 hover:scale-110 group"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fa-brands fa-linkedin text-2xl text-zinc-700 dark:text-white/80 group-hover:text-emerald-600" />
                </a>

                <a
                  href="https://twitter.com/Atamilliondoll1"
                  className="p-3 bg-white/80 dark:bg-slate-800/80 rounded-lg hover:bg-emerald-50 dark:hover:bg-slate-700/80 transition-all duration-300 hover:scale-110 group"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fa-brands fa-square-x-twitter text-2xl text-zinc-700 dark:text-white/80 group-hover:text-emerald-600" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl p-6 backdrop-blur-sm">
            <p className="text-zinc-700 dark:text-white/80 mb-4">
              I'm currently available for exciting freelance opportunities,
              full-time positions, and collaborative projects. Whether you have
              a specific project in mind or just want to explore possibilities,
              I'd love to hear from you.
            </p>
            <a
              href="mailto:benalex8797@gmail.com"
              className="inline-block bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
