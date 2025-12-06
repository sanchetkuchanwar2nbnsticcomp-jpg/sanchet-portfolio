import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeProvider";
import "./About.css";
import ProfileImg from "../assets/profile.jpeg";

export default function About() {
  const { theme } = useTheme();

  return (
    <div id="about" className={`about-container ${theme}`}>
      <motion.div className="about-card" data-aos="fade-up">

        <img src={ProfileImg} alt="Profile" className="about-img" />

        <div className="about-text">
          <h2>About Me</h2>

          <p>
            I'm <span>Sanchet</span>, a passionate Full-Stack Developer who loves
            building scalable applications using <b>Java, Spring Boot, React, and SQL.</b>
          </p>

          <p>
            I enjoy turning complex problems into simple, elegant solutions and writing
            clean, maintainable code.
          </p>

          {/* EDUCATION SECTION */}
          <h3>🎓 Education</h3>

          <div className="education-wrapper">
            <div className="education-entry">
              <p className="degree"><b>Bachelor of Engineering (BE)</b></p>
              <p className="course">Computer Science Engineering</p>
              <p className="year">2021 – 2025</p>
              <p className="cgpa">CGPA: <b>8.15</b></p>
            </div>

            <div className="education-entry">
              <p className="degree"><b>Higher Secondary (12th)</b></p>
              <p className="course">Science Stream</p>
              <p className="year">2020 – 2021</p>
              <p className="cgpa">Percentage: <b>89.8%</b></p>
            </div>

            <div className="education-entry">
              <p className="degree"><b>Secondary School (10th)</b></p>
              <p className="course">General Studies</p>
              <p className="year">2018 – 2019</p>
              <p className="cgpa">Percentage: <b>77.6%</b></p>
            </div>
          </div>

          <h3>🚀 Currently Learning</h3>
          <p>
            Exploring Microservices, Advanced Spring Boot, and Cloud Deployment
            to build scalable production-grade applications.
          </p>

          <div className="about-buttons">
            <a href="#projects" className="primary glow-btn">📁 View Projects</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
