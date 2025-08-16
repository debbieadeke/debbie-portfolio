import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Let’s <span className="gradient-text">Talk</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-neutral-300">
          I’m open to internships, part-time roles, and collaborations.  
          If you have a project or an idea, let’s bring it to life.
        </p>

        <div className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
          <a href="mailto:okakadebbie15@gmail.com" className="card flex items-center justify-center gap-2 p-4 hover:border-pink-500/40">
            <Mail size={18} className="text-pink-300" /> okakadebbie15@gmail.com
          </a>
          <a href="tel:+254705506380" className="card flex items-center justify-center gap-2 p-4 hover:border-pink-500/40">
            <Phone size={18} className="text-pink-300" /> +254 0705 506 380
          </a>
          <a href="https://github.com/debbieadeke" target="_blank" className="card flex items-center justify-center gap-2 p-4 hover:border-pink-500/40">
            <Github size={18} className="text-pink-300" /> github.com/debbieadeke
          </a>
          <a href="https://linkedin.com/in/debbieokaka" target="_blank" className="card flex items-center justify-center gap-2 p-4 hover:border-pink-500/40">
            <Linkedin size={18} className="text-pink-300" /> linkedin.com/in/debbieokaka
          </a>
        </div>
      </div>
    </section>
  );
}
