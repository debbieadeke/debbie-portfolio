import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-6 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} Debbie Adeke — All rights reserved.
      </footer>
    </>
  );
}
