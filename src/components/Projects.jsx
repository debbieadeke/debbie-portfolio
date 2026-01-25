import React, { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS = [
  {
    title: "The Lash & Brow Studio",
    desc: "Fully designed and developed a live website with appointment booking and payment integration.",
    link: "https://thelashandbrowstudio.beauty",
    tags: ["WordPress", "UI/UX", "Payment Integration"],
    images: [
      "/images/lash-brow-studio-1.png",
      "/images/lash-brow-studio-2.png",
      "/images/lash-brow-studio-3.png",
    ],
  },
  {
    title: "Pharmacy Management System (Final Year Project)",
    desc: "Built as part of my final year project, this system allows a pharmacy to manage inventory, sales, and customer data.",
    link: "#",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    images: [
      "/images/pharmacy-system-1.png",
      "/images/pharmacy-system-2.png",
    ],
  },
  {
    title: "Radio Station Website (Internship Project)",
    desc: "Developed basic pages during my attachment, including homepage, show schedule, and contact page.",
    link: "#",
    tags: ["HTML", "CSS", "JavaScript", "WordPress (local build)"],
    images: [
      "/images/radio-station-1.png",
      "/images/radio-station-2.png",
    ],
  },
  {
    title: "Law Firm Management System (School Project)",
    desc: "Management system using Spring Boot, Thymeleaf, and Maven. Supports fetching data, displaying cases, and assigning roles.",
    link: "#",
    tags: ["Java", "Spring Boot", "Thymeleaf", "Maven", "MySQL"],
    images: [
      "/images/law-firm-system-1.png",
      "/images/law-firm-system-2.png",
    ],
  },
  {
    title: "Ongoing Professional Laravel Project",
    desc: "Currently developing a full system for a company using Laravel and MySQL. Confidential project, not publicly showcaseable.",
    link: "#",
    tags: ["Laravel", "MySQL", "UI Integration", "UX Considerations"],
    images: ["/images/company-logo.png"],
  },
];

export default function Projects() {
  // Track current image index per project
  const [currentIndex, setCurrentIndex] = useState(
    PROJECTS.map(() => 0)
  );

  const prevImage = (index) => {
    setCurrentIndex((prev) =>
      prev.map((val, i) =>
        i === index
          ? (val - 1 + PROJECTS[i].images.length) % PROJECTS[i].images.length
          : val
      )
    );
  };

  const nextImage = (index) => {
    setCurrentIndex((prev) =>
      prev.map((val, i) =>
        i === index
          ? (val + 1) % PROJECTS[i].images.length
          : val
      )
    );
  };

  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          <span className="gradient-text">Projects</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p, index) => (
            <div
              key={p.title}
              className="card group flex flex-col overflow-hidden rounded-xl border border-neutral-800 hover:border-pink-500/40 transition relative"
            >
              {/* Image Carousel */}
              <div className="relative w-full h-48">
                <img
                  src={p.images[currentIndex[index]]}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                {p.images.length > 1 && (
                  <>
                    <button
                      onClick={() => prevImage(index)}
                      className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/60 transition"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => nextImage(index)}
                      className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/60 transition"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  {p.link !== "#" && (
                    <ExternalLink
                      className="opacity-60 group-hover:opacity-100"
                      size={18}
                    />
                  )}
                </div>
                <p className="mt-2 text-sm text-neutral-300 flex-1">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-neutral-800/70 px-2.5 py-1 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-neutral-400">
          More on my GitHub:{" "}
          <a
            href="https://github.com/debbieadeke"
            target="_blank"
            className="text-pink-300 underline-offset-4 hover:underline"
          >
            github.com/debbieadeke
          </a>
        </div>
      </div>
    </section>
  );
}
