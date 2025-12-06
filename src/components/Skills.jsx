import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeProvider";
import "./Skills.css";

export default function Skills() {
  const { theme } = useTheme();

  const skillData = [
    {
      title: "Programming & Frameworks",
      icon: "💻",
      skills: [
        "Java", "Spring Boot", "React.js", "JavaScript",
        "JSP", "Servlets", "SQL", "Python", "HTML", "CSS"
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        "Git", "GitHub", "Power BI", "Tomcat",
        "VS Code", "Eclipse", "IntelliJ IDEA", "PyCharm"
      ],
    },
    {
      title: "Cloud & Deployment",
      icon: "☁️",
      skills: ["AWS"],
    },
  ];

  return (
    <div id="skills" className={`skills-container ${theme}`}>
      <motion.div className="skills-card" data-aos="fade-up">

        <h2 className="skills-title">Skills</h2>

        <div className="skills-section-wrapper">
          {skillData.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="category-title">
                {category.icon} {category.title}
              </h3>

              <div className="skills-grid">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-chip">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
