import { useTheme } from "../context/ThemeProvider";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  const { theme } = useTheme();

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section className={`hero-container ${theme}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 2 },
            move: { speed: 0.5 },
            opacity: { value: 0.4 },
          },
        }}
      />

      <motion.div
        className={`hero-card ${theme}`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1>Hi, I'm Sanchet 👋</h1>

        <h2>
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              1500,
              "Java & Spring Boot",
              1500,
              "React & SQL",
              1500,
            ]}
            speed={60}
            repeat={Infinity}
          />
        </h2>

        <p>I build responsive, user-focused apps using Java, Spring, SQL & React.</p>

        <div className="hero-buttons">
          <a href="#contact" className="primary">Hire Me</a>
          <a href="https://drive.google.com/file/d/10YY5E4noSoIpM6oBlmBqGSrK-0IlQ4fy/view?usp=drive_link" 
              target="_blank" rel="noopener noreferrer" 
              className="outline">
            View CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
