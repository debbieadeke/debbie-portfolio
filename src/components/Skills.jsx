import React from "react";

const TECH = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind CSS",
  "PHP", "Laravel", "MySQL", "HeidiSQL", "Docker",
  "Git & GitHub", "Figma", "Responsive Design", "UI/UX", "WordPress",
];

const SOFT = [
  "Problem Solving", "Communication", "Team Collaboration",
  "Adaptability", "Time Management", "Initiative", "Research & Documentation",
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          <span className="gradient-text">Skills</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Technical</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {TECH.map((t) => (
                <span key={t} className="rounded-lg border border-white/10 bg-neutral-800/60 px-3 py-2 text-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-semibold">Soft Skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {SOFT.map((t) => (
                <span key={t} className="rounded-lg border border-white/10 bg-neutral-800/60 px-3 py-2 text-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
