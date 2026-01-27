import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import debbieprofile from "../assets/images/debbie-profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-14">
          {/* subtle glow */}
          <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-500/20 via-fuchsia-500/20 to-pink-500/20 blur-2xl" />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center"
          >
            {/* Left Column - Intro */}
            <div>
              <p className="text-sm uppercase tracking-wider text-pink-300/80">
                Full-Stack Web Developer • UI/UX • Laravel-Based Systems
              </p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">
                <span className="gradient-text">Debbie Adeke Okaka</span>
              </h1>
              <p className="mt-4 text-neutral-300">
                I design and build clean, accessible interfaces and contribute
                to full-stack systems using Laravel. Experienced with real-world
                projects, Docker-based workflows, and modern UI practices.
                Currently expanding my skills in React and Python for
                data-driven applications.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#projects" className="btn btn-primary">
                  View Projects <ArrowRight size={18} />
                </a>
                <a
                  href="mailto:okakadebbie15@gmail.com"
                  className="btn btn-outline"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Right Column - Photo + Card */}
            {/* Right Column - Photo + Card */}
            <div className="order-first md:order-last flex flex-col items-center gap-6">
              {/* Professional Photo */}
              <img
                src={debbieprofile}
                alt="Debbie Adeke Okaka"
                className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-pink-400/60"
              />

              {/* Developer & Baker Card */}
              <div className="card p-6 w-full">
                <h3 className="text-lg font-semibold">Developer & Baker</h3>
                <p className="mt-2 text-sm text-neutral-300">
                  I’m a developer and self-taught baker. I enjoy creating clean,
                  accessible UIs as much as I enjoy decorating cakes and
                  pastries — details matter in everything I build. 🍰
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-neutral-300">
                  <div className="rounded-lg bg-neutral-800/70 p-3 hover:bg-pink-500/40 transition">
                    UI/UX
                  </div>
                  <div className="rounded-lg bg-neutral-800/70 p-3 hover:bg-pink-500/40 transition">
                    Docker
                  </div>
                  <div className="rounded-lg bg-neutral-800/70 p-3 hover:bg-pink-500/40 transition">
                    Laravel
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
