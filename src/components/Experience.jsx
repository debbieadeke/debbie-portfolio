import React from "react";

const ROLES = [
  {
  title: "Software Developer (Part-Time)",
  org: "Greyglass Technologies — Nairobi",
  date: "May 2024 – Present",
  tech: ["Laravel", "PHP", "MySQL", "Docker", "React", "Git"],
  bullets: [
    "Collaborate with a senior developer on the development and improvement of a Laravel-based enterprise application.",
    "Contribute to both front-end and back-end tasks while new modules and features are actively being built.",
    "Assist in developing and refining HR and manufacturing modules, implementing UI components and supporting backend logic as required.",
    "Integrate frontend interfaces with backend APIs and database operations using Laravel and MySQL.",
    "Use Docker as the primary local development environment to ensure consistency across builds and deployments.",
    "Manage hosting-related tasks including domains, cPanel configurations, email setups, and routine system backups.",
    "Build small internal features and test components, including a mini messaging application to strengthen React and component-based development skills.",
  ],
},
  {
    title: "UI/UX Design & Web Development Intern",
    org: "Radio Africa Group — Nairobi",
    date: "Jan 2024 – Apr 2024",
    tech: ["HTML", "CSS", "JavaScript", "WordPress", "Figma"],
    bullets: [
      "Designed wireframes and UI components under the guidance of a senior designer.",
      "Translated designs into accessible and responsive HTML, CSS, and JavaScript interfaces.",
      "Developed a custom radio station website tailored to organizational needs.",
      "Applied web accessibility and responsive design best practices.",
      "Designed a logo for the internal Central Management System (CMS) with branding considerations.",
      "Worked with a local WordPress development environment for theme customization and testing.",
    ],
  },
  {
    title: "Volunteer (IT Support & Operations)",
    org: "Kijani Bloom Limited — Nairobi",
    date: "Apr 2023 – May 2023",
    bullets: [
      "Provided IT support by setting up and maintaining computers and basic office systems.",
      "Assisted with data entry and documentation tasks.",
      "Supported company events and special programs.",
    ],
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
                  <span className="text-sm text-pink-300/90">{r.date}</span>
                </div>

                <div className="mt-1 text-sm text-neutral-300">
                  {r.org}
                </div>

                {/* Tech Stack */}
                {r.tech && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {r.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-neutral-800/70 px-2.5 py-1 text-xs text-neutral-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <ul className="mt-4 list-disc space-y-1 pl-5 text-neutral-300">
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
