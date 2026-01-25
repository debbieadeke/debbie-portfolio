import React from "react";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-neutral-300">
          {/* Outgoing and organized IT professional with hands-on experience across front-end development,
          UI/UX design, server & hosting workflows, and collaborative tooling. I love turning ideas into
          responsive, accessible, and visually compelling products. */}
          I’m an organized and motivated IT professional with strong hands-on experience in 
          Laravel-based systems, UI/UX design, and front-end development. I’ve worked on live
          client websites, internal company systems, and academic projects, often collaborating
          with senior developers.

I use Docker for local development and enjoy turning ideas into responsive, accessible, and visually clear interfaces. I’m currently learning React and Python to strengthen my front-end and data skills.
        </p>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
          <div className="card p-5">
            <div className="text-sm text-neutral-400">Location</div>
            <div className="mt-1 font-semibold">Nairobi, Kenya</div>
          </div>
          <a className="card p-5 hover:border-pink-500/40 transition" href="mailto:okakadebbie15@gmail.com">
            <div className="text-sm text-neutral-400">Email</div>
            <div className="mt-1 font-semibold">okakadebbie15@gmail.com</div>
          </a>
          <a className="card p-5 hover:border-pink-500/40 transition" href="https://github.com/debbieadeke" target="_blank">
            <div className="text-sm text-neutral-400">GitHub</div>
            <div className="mt-1 font-semibold">github.com/debbieadeke</div>
          </a>
        </div>
      </div>
    </section>
  );
}
