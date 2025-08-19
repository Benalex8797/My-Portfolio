import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" | "error" | ""
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    if (name.length < 2) {
      setStatusType("error");
      setStatus("Please enter your full name (at least 2 characters).");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
      setStatusType("error");
      setStatus("Please enter a valid email address.");
      return;
    }

    if (message.length < 10) {
      setStatusType("error");
      setStatus(
        "Please provide a bit more detail in your message (10+ characters)."
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/myzwvqog", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      let data = null;
      try {
        data = await response.json();
      } catch {
        // ignore JSON parse errors
      }
      if (response.ok) {
        e.currentTarget.reset();
        setStatusType("success");
        setStatus("Message sent successfully!");
        setTimeout(() => {
          setStatus("");
          setStatusType("");
        }, 4000);
      } else {
        const apiError =
          data && Array.isArray(data.errors) && data.errors.length > 0
            ? data.errors[0].message
            : null;
        setStatusType("error");
        setStatus(apiError || "Oops! Something went wrong.");
      }
    } catch {
      setStatusType("error");
      setStatus("Error connecting to server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-zinc-900/10 dark:border-white/10 bg-gradient-to-br from-amber-50 via-emerald-50 to-green-50 dark:from-amber-900 dark:via-emerald-900 dark:to-green-900 px-4 py-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-emerald-700 dark:text-emerald-400">
          Contact Me
        </h2>
        <p className="mt-2 text-zinc-700 dark:text-white/80">
          Have a project or want to connect? Let's talk!
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <form
            onSubmit={onSubmit}
            noValidate
            aria-busy={isSubmitting}
            className="max-w-xl space-y-4 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-lg"
          >
            <input
              name="_subject"
              defaultValue="New message from portfolio contact form"
              type="hidden"
            />
            <input
              name="_gotcha"
              type="text"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
            <div>
              <label
                htmlFor="contact-name"
                className="mb-1 block text-sm font-medium text-zinc-700 dark:text-white/80"
              >
                Name
              </label>
              <input
                name="name"
                required
                id="contact-name"
                autoComplete="name"
                placeholder="Your Name"
                className="w-full rounded-lg border-2 border-emerald-300 dark:border-emerald-700 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-500 dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:focus:border-emerald-400 shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-1 block text-sm font-medium text-zinc-700 dark:text-white/80"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                id="contact-email"
                autoComplete="email"
                placeholder="Your Email"
                className="w-full rounded-lg border-2 border-emerald-300 dark:border-emerald-700 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-500 dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:focus:border-emerald-400 shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="mb-1 block text-sm font-medium text-zinc-700 dark:text-white/80"
              >
                Message
              </label>
              <textarea
                name="message"
                required
                id="contact-message"
                placeholder="Your Message"
                rows={5}
                className="w-full resize-none rounded-lg border-2 border-emerald-300 dark:border-emerald-700 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-500 dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:focus:border-emerald-400 shadow-sm"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-700 px-5 py-3 font-semibold text-white hover:from-emerald-500 hover:to-emerald-600 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <i className="fa-solid fa-spinner animate-spin" /> Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
            {status && (
              <p
                role="status"
                aria-live="polite"
                className={`pt-2 ${
                  statusType === "success" ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>

          <div className="self-start">
            <div className="rounded-xl border border-zinc-900/10 dark:border-white/10 bg-zinc-900/5 dark:bg-white/5 p-6 text-zinc-800 dark:text-white/90 shadow">
              <p className="mb-2 flex items-center gap-2">
                <i className="fas fa-envelope" />
                <a
                  href="mailto:benalex8797@gmail.com?subject=Inquiry&body=Hello%20Benjamin%2C"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  benalex8797@gmail.com
                </a>
              </p>
              <p className="mb-2 flex items-center gap-2">
                <i className="fas fa-phone-alt" />
                <a href="tel:+2348139788891">+234 813 788 891</a>
              </p>
              <p className="mb-2 flex items-center gap-2">
                <i className="fab fa-whatsapp" />
                <a
                  href="https://wa.me/2348139788891"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +234 813 788 891
                </a>
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt" /> Kaduna, Nigeria
              </p>
            </div>
            <div className="mt-6 overflow-hidden rounded-xl border border-white/10 shadow">
              <iframe
                className="h-[350px] w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126898.40830805936!2d7.3650503!3d10.4806526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105579d689a9b6d3%3A0x6e47b0892cf9aafa!2sPlot%20No%207%2C%20Kaduna-Abuja%20Express%20Way%2C%20Federal%20Housing%2C%20Kaduna%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1716732050061!5m2!1sen!2sng"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
