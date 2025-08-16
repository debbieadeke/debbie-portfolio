import React from "react";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Messaging Mini-App (React)",
    desc: "Lightweight chat UI exploring React state & component patterns.",
    link: "https://github.com/debbieadeke",
    tags: ["React", "State", "Components"],
  },
  {
    title: "Custom Radio Website",
    desc: "Responsive website tailored to organizational needs.",
    link: "https://github.com/debbieadeke",
    tags: ["HTML", "CSS", "JS", "Accessibility"],
  },
  {
    title: "HR Module (UI)",
    desc: "UI for employee and leave management integrated with Laravel.",
    link: "https://github.com/debbieadeke",
    tags: ["Laravel (UI integration)", "UX", "MySQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          <span className="gradient-text">Projects</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <a key={p.title} href={p.link} target="_blank" className="card group p-6 hover:border-pink-500/40 transition">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <ExternalLink className="opacity-60 group-hover:opacity-100" size={18} />
              </div>
              <p className="mt-2 text-sm text-neutral-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-lg bg-neutral-800/70 px-2.5 py-1 text-xs">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-neutral-400">
          More on my GitHub:{" "}
          <a href="https://github.com/debbieadeke" target="_blank" className="text-pink-300 underline-offset-4 hover:underline">
            github.com/debbieadeke
          </a>
        </div>
      </div>
    </section>
  );
}
