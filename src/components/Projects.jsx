import React, { useState } from "react";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const PROJECTS = [
  {
    title: "The Lash & Brow Studio",
    desc: "Fully designed and developed a live website with appointment booking and payment integration.",
    link: "https://thelashandbrow.beauty",
    tags: ["WordPress", "UI/UX", "Payment Integration"],
    images: [
      "/images/thelashandbrow.home.png",
      "/images/thelashandbrow.home2.png",
      "/images/thelashandbrow.appointment.png",
    ],
  },
  {
    title: "Pharmacy Management System (Final Year Project)",
    desc: "Built as part of my final year project, this system allows a pharmacy to manage inventory, sales, and customer data.",
    link: "https://github.com/debbieadeke/pharmacy-management-system",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    images: [
      "/images/Picture1.jpg",
      "/images/Picture2.jpg",
      "/images/Picture3.jpg",
      "/images/Picture4.jpg",
      "/images/Picture5.jpg",
      "/images/Picture6.jpg",
    ],
  },
  {
    title: "Radio Station Website (Internship Project)",
    desc: "Developed basic pages during my attachment, including homepage, show schedule, and contact page.",
    link: "https://github.com/debbieadeke/xfm",
    tags: ["HTML", "CSS", "JavaScript", "WordPress (local build)"],
    images: [
      "/images/index.png",
      "/images/shows.png",
      "/images/events.png",
      "/images/index2.png",
      "/images/indexfull.png",
    ],
  },
  {
    title: "Law Firm Management System (School Project)",
    desc: "Management system using Spring Boot, Thymeleaf, and Maven. Supports fetching data, displaying cases, and assigning roles.",
    link: "https://github.com/debbieadeke/springboot-lawfirm-app",
    tags: ["Java", "Spring Boot", "Thymeleaf", "Maven", "MySQL","Docker"],
    images: [
      "/images/15.png",
      "/images/16.png",
      "/images/17.png",
      "/images/18.png",
      "/images/19.png",
      "/images/20.png",
      "/images/21.png",
      "/images/22.png",
      "/images/23.png",
      "/images/24.png",
      "/images/25.png",
      "/images/26.png",
    ],
  },
  {
    title: "Ongoing Professional Laravel Project",
    desc: "Currently developing a full system for a company using Laravel and MySQL. Confidential project, not publicly showcaseable.",
    link: "#",
    tags: ["Laravel", "MySQL", "UX", "UI Integration"],
    images: ["/images/blue.jpg"],
  },
];

export default function Projects() {
  // Carousel index per project
  const [currentIndex, setCurrentIndex] = useState(
    PROJECTS.map(() => 0)
  );

  // Fullscreen modal state
  const [lightbox, setLightbox] = useState({
    open: false,
    projectIndex: null,
    imageIndex: null,
  });

  const prevImage = (index) => {
    setCurrentIndex((prev) =>
      prev.map((val, i) =>
        i === index
          ? (val - 1 + PROJECTS[i].images.length) %
            PROJECTS[i].images.length
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

  const openLightbox = (projectIndex, imageIndex) => {
    setLightbox({
      open: true,
      projectIndex,
      imageIndex,
    });
  };

  const closeLightbox = () => {
    setLightbox({
      open: false,
      projectIndex: null,
      imageIndex: null,
    });
  };

  const lightboxPrev = () => {
    setLightbox((prev) => ({
      ...prev,
      imageIndex:
        (prev.imageIndex - 1 +
          PROJECTS[prev.projectIndex].images.length) %
        PROJECTS[prev.projectIndex].images.length,
    }));
  };

  const lightboxNext = () => {
    setLightbox((prev) => ({
      ...prev,
      imageIndex:
        (prev.imageIndex + 1) %
        PROJECTS[prev.projectIndex].images.length,
    }));
  };

  return (
    <>
      <section id="projects" className="section">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            <span className="gradient-text">Projects</span>
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PROJECTS.map((p, index) => (
              <div
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-neutral-800 hover:border-pink-500/40 transition"
              >
                {/* Image Carousel */}
                <div className="relative w-full h-48 cursor-pointer">
                  <img
                    src={p.images[currentIndex[index]]}
                    alt={p.title}
                    onClick={() =>
                      openLightbox(index, currentIndex[index])
                    }
                    className="w-full h-full object-cover"
                  />

                  {p.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(index)}
                        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/70"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => nextImage(index)}
                        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/70"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold">
                      {p.title}
                    </h3>
                    {p.link !== "#" && (
                      <a href={p.link} target="_blank">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-neutral-300 flex-1">
                    {p.desc}
                  </p>
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
              className="text-pink-300 hover:underline"
            >
              github.com/debbieadeke
            </a>
          </div>
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX */}
      {lightbox.open && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center">
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white hover:text-pink-400"
          >
            <X size={30} />
          </button>

          {/* Prev */}
          <button
            onClick={lightboxPrev}
            className="absolute left-5 text-white hover:text-pink-400"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <img
            src={
              PROJECTS[lightbox.projectIndex].images[
                lightbox.imageIndex
              ]
            }
            alt="Project preview"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          {/* Next */}
          <button
            onClick={lightboxNext}
            className="absolute right-5 text-white hover:text-pink-400"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
}
