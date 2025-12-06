# 🌐 Sanchet's Developer Portfolio

Welcome to my personal portfolio — a showcase of my projects, skills, and experience as a **Full-Stack Developer** specializing in:

- Java & Spring Boot  
- React.js  
- SQL  
- REST APIs  
- Cloud Deployment  

This portfolio is responsive, animated, and fully theme-supported (Light/Dark Mode). It works on desktop, tablet, and mobile devices.

---

## 🚀 Live Website

🔗 **Hosted URL:**  
-  sanchet.netlify.app
---

## ✨ Features

- 🎨 Modern UI with smooth transitions
- 🌙 Light / Dark theme toggle (stored in local storage)
- 📱 Fully responsive for mobile & tablet
- 🧩 Section-based navigation (Hero, About, Skills, Projects, Contact)
- 📩 Working contact form using **EmailJS**
- 🎬 Animations using **AOS & Framer Motion**
- 🌫️ Particle background effects

---

## 🛠️ Tech Stack

| Category | Technologies |
|---------|-------------|
| **Frontend** | React.js, Vite |
| **Styling** | CSS3, Custom Styling, Responsive Layout |
| **Animations** | Framer Motion, AOS, Typewriter Effect |
| **Utilities** | React Icons, EmailJS |
| **Version Control** | Git & GitHub |
| **Hosting** | Netlify |

---

## 📂 Folder Structure

📦 portfolio
┣ 📂 public
┣ 📂 src
┃ ┣ 📂 assets
┃ ┣ 📂 components
┃ ┣ 📂 context
┃ ┣ 📂 styles
┃ ┗ App.jsx
┣ .gitignore
┣ package.json
┣ README.md


---

## 🧪 Run Locally

**```sh
# Clone repository
git clone https://github.com/<your-username>/<repo-name>.git

# Navigate into project
cd <repo-name>

# Install dependencies
npm install

# Start development server
npm run dev

🌍 Deployment Guide (Netlify)

This project is hosted on Netlify.

Steps:

1. Run the production build:
npm run build
2. Upload the dist folder to Netlify or connect your GitHub repo.
3. If errors appear, set build command and output folder:
4. Deploy and wait for the live link.

📨 Contact Form Setup (EmailJS)

1. Create an account at: https://www.emailjs.com
2. Create a service → template → public key
3. Add the credentials in Contact.jsx:
emailjs.send(
  "SERVICE_ID",
  "TEMPLATE_ID",
  formData,
  "PUBLIC_KEY"
);
**
