import React from "react";

const ROLES = [
  {
    title: "Front-End Developer (Part-Time)",
    org: "Greyglass Technologies — Nairobi",
    date: "May 2024 – Present",
    bullets: [
      "Lead front-end dev; integrate UIs with Laravel.",
      "Built HR module; contributed to manufacturing module.",
      "Manage domains, cPanel, Namecheap; server routines & backups.",
      "React mini messaging app; learning Tailwind deeply.",
      "Database operations with HeidiSQL & MySQL.",
    ],
  },
  {
    title: "UI/UX & Web Dev Intern",
    org: "Radio Africa Group — Nairobi",
    date: "Jan 2024 – Apr 2024",
    bullets: [
      "Wireframed and designed under senior guidance.",
      "Built accessible, responsive HTML/CSS/JS UIs.",
      "Custom radio station website; CMS logo & branding.",
      "Local WordPress theme work with XAMPP.",
    ],
  },
  {
    title: "Volunteer",
    org: "Kijani Bloom Limited — Nairobi",
    date: "Apr 2023 – May 2023",
    bullets: ["Events/program support", "Data entry", "IT support and setups"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          <span className="gradient-text">Experience</span>
        </h2>

        <ol className="relative mx-auto mt-10 grid max-w-3xl gap-8">
          {ROLES.map((r, i) => (
            <li key={i} className="relative pl-6">
              <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-pink-400"></span>
              <div className="card p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{r.title}</h3>
                  <div className="text-sm text-pink-300/90">{r.date}</div>
                </div>
                <div className="mt-1 text-sm text-neutral-300">{r.org}</div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-300">
                  {r.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
