import React from "react";

const testimonials = [
  {
    img: "/assets/mr brown.jpeg",
    name: "Victor Edeh",
    role: "Project Manager",
    text: '"Working with this developer was a breeze! Highly recommend."',
  },
  {
    img: "/assets/precious.jpg",
    name: "Precious",
    role: "Graphic Designer",
    text: '"Delivered on time and exceeded expectations. Top-notch quality."',
  },
  {
    img: "/assets/alice.jpg",
    name: "Alice Johnson",
    role: "UX Designer",
    text: '"A true professional! The designs were stunning and user-friendly."',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-amber-50 via-emerald-50 to-green-50 dark:from-amber-900 dark:via-emerald-900 dark:to-green-900 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-emerald-700 dark:text-emerald-400">
          Testimonials
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-zinc-900/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 text-center shadow-[0_10px_20px_rgba(16,185,129,0.25)] transition hover:-translate-y-2 hover:shadow-[0_12px_28px_rgba(16,185,129,0.35)]"
            >
              <img
                src={t.img}
                alt={t.name}
                className="mx-auto h-20 w-20 rounded-full border-2 border-emerald-400 object-cover shadow [animation:float_3s_ease-in-out_infinite]"
              />
              <div className="mt-3 text-white font-semibold">{t.name}</div>
              <div className="text-sm text-white/70">{t.role}</div>
              <p className="mt-2 text-white/80 italic">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
