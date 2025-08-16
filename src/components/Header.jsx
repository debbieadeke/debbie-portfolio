import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import clsx from "clsx";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = nav.map((n) => document.querySelector(n.href));
      const scrollPos = window.scrollY + 100; // offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActive(nav[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="text-lg font-extrabold tracking-tight gradient-text">
          Debbie<span className="text-pink-400">.</span>
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setActive(n.href)}
              className={clsx(
                "text-sm transition",
                active === n.href
                  ? "text-pink-300 font-semibold"
                  : "text-neutral-300 hover:text-pink-300"
              )}
            >
              {n.label}
            </a>
          ))}
          <div className="ml-3 flex items-center gap-2">
            <a href="mailto:okakadebbie15@gmail.com" className="p-2 rounded-lg hover:bg-white/5" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://github.com/debbieadeke" target="_blank" className="p-2 rounded-lg hover:bg-white/5" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/debbieokaka" target="_blank" className="p-2 rounded-lg hover:bg-white/5" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
          <a href="#contact" className="btn btn-primary ml-2">Hire Me</a>
        </nav>

        {/* mobile */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/5"
          onClick={() => setOpen((s) => !s)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* mobile sheet */}
      <div className={clsx("md:hidden border-t border-white/5", open ? "block" : "hidden")}>
        <nav className="mx-auto max-w-6xl px-4 py-3 grid gap-3">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => {
                setActive(n.href);
                setOpen(false);
              }}
              className={clsx(
                "rounded-lg px-3 py-2",
                active === n.href
                  ? "bg-pink-500/20 text-pink-300"
                  : "hover:bg-white/5"
              )}
            >
              {n.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <a href="mailto:okakadebbie15@gmail.com" className="btn btn-outline">Email</a>
            <a href="https://github.com/debbieadeke" target="_blank" className="btn btn-outline">GitHub</a>
            <a href="https://linkedin.com/in/debbieokaka" target="_blank" className="btn btn-outline">LinkedIn</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
