import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects"; 
import Contact from "./components/Contact"; 
import { ThemeProvider } from "./context/ThemeProvider";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// GLOBAL styles
import "./styles/global.css";

function AppContent() {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    // Fix mobile viewport height issue
    const updateVH = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };
    updateVH();
    window.addEventListener("resize", updateVH);

    return () => window.removeEventListener("resize", updateVH);
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
