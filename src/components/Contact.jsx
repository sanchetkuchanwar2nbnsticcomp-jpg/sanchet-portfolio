import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeProvider";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const { theme } = useTheme();

  // --- EmailJS Handler ---
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_4pa48uj",      // Service ID
      "template_1fiiiwl",     // Template ID
      {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      },
      "fe_CCcPHdMc1vra5P"     // Public Key
    )
    .then(() => {
      alert("📨 Message sent successfully!");
      e.target.reset();
    })
    .catch((err) => {
      alert("❌ Something went wrong. Check the console.");
      console.log(err);
    });
  };

  return (
    <div id="contact" className={`contact-container ${theme}`}>

      {/* Top Info */}
      <motion.div
        className="contact-info"
        data-aos="fade-down"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Let's Connect 🤝</h2>

        <div className="info-grid">
          <p><strong>Name :</strong> Sanchet Kuchanwar</p>
          <p><strong>Phone No :</strong> +91 8446592672</p>
          <p><strong>Email :</strong> kuchanwarsanchet@gmail.com</p>
          <p><strong>Location :</strong> Pune, India</p>
          
        </div>

        <div className="social-icons">
          <a href="mailto:kuchanwarsanchet@gmail.com"><FaEnvelope /></a>
          <a href="https://github.com/sanchetkuchanwar2nbnsticcomp-jpg" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sanchet-kuchanwar-356510230/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </motion.div>

      {/* Form Section */}
      <motion.div
        className="contact-card"
        data-aos="fade-up"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>📬 Send a Message</h3>

        <form className="contact-form" onSubmit={sendEmail}>
          <input id="name" name="name" type="text" placeholder="Your Name" required />
          <input id="email" name="email" type="email" placeholder="Your Email" required />
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required />

          <button type="submit" className="primary">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
