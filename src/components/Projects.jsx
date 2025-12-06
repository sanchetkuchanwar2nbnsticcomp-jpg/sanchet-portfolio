import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeProvider";
import "./Projects.css";


export default function Projects() {
  const { theme } = useTheme();

  const projectData = [
    {
      title: "EV Charging Station Management System",
      description:
        "A full-stack web platform for booking and managing EV charging stations. Includes live slot availability, user authentication, admin panel, and database-driven scheduling. Designed for real-world scalability and cloud deployment.",
      tech: ["React", "Spring Boot", "MySQL", "REST API"],
      github: "https://github.com/sanchetkuchanwar2nbnsticcomp-jpg/EV-Charging-Station/tree/master",
    },
    {
      title: "AI Chat Assistant",
      description:
        "A responsive chat interface powered by an AI API. Features message persistence, real-time typing UI, authentication, and clean modern UX. Designed with reusable components, secure API handling, and a smooth chat-like experience similar to modern messaging platforms.",
      tech: ["React", "Python", "Flask"],
      github: "https://github.com/sanchetkuchanwar2nbnsticcomp-jpg/Chat-ai",
    },
  ];

  return (
    <div id="projects" className={`projects-container ${theme}`}>
      <motion.h2 data-aos="fade-up" className="projects-title">
        Projects
      </motion.h2>

      <div className="project-grid">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.25 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-buttons">
              <a href={project.github} target="_blank" className="github-btn">
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
