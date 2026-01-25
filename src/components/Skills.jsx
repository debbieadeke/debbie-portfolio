// import React from "react";

const CORE_SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Laravel (2+ years)",
  "MySQL",
  "WordPress",
  "Docker",
  "Git & GitHub",
  "UI/UX Design",
  "Responsive Design",
  "Figma",
];

const LEARNING_SKILLS = [
  "React",
  "Tailwind CSS",
  "Python (Data Science)",
];

const TOOLS = [
  "HeidiSQL",
  "VS Code",
  "Namecheap",
  "cPanel",
  "Linear",
  "Linux (basic)",
];

const SOFT = [
  "Problem Solving",
  "Communication",
  "Team Collaboration",
  "Adaptability",
  "Time Management",
  "Initiative",
  "Research & Documentation",
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          <span className="gradient-text">Skills</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Technical Skills */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Technical Skills</h3>

            {/* Core */}
            <p className="mt-4 text-sm text-neutral-400">Core / Professional</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {CORE_SKILLS.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-white/10 bg-neutral-800/60 px-3 py-2 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Learning */}
            <p className="mt-6 text-sm text-neutral-400">Currently Learning</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {LEARNING_SKILLS.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-pink-500/30 bg-pink-500/10 px-3 py-2 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Tools */}
            <p className="mt-6 text-sm text-neutral-400">Tools & Platforms</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {TOOLS.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-white/10 bg-neutral-800/60 px-3 py-2 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Soft Skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {SOFT.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-white/10 bg-neutral-800/60 px-3 py-2 text-sm"
                >
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
