import "./CvPage.css";
import Navbar from "./Navbar.jsx";
import arcframeImage from "./assets/Images/Arcframe.avif";
import concreteCanvasImage from "./assets/Images/concrete-canvas.avif";
import studentManagementImage from "./assets/Images/Student-management.avif";

const skills = [
  { label: "Frontend", values: ["HTML", "CSS", "JavaScript", "React", "Vite", "Framer", "Zola", "Lovable"] },
  { label: "Tools", values: ["Git", "GitHub", "VS Code", "Figma", "Codex", "Cline"] },
  { label: "Backend", values: ["Node.js (Basics)", "REST APIs", "FAST API"] },
  { label: "Other", values: ["Responsive Design", "UI/UX"] },
];

const projects = [
  {
    title: "Student Management System",
    description:
      "Console-based C++ app to manage records with clean CRUD flow and file handling.",
    stack: "C++",
    live: "#",
    code: "https://github.com/",
    image: studentManagementImage,
    imageAlt: "Student Management System project screenshot",
  },
  {
    title: "Arcframe Portfolio",
    description:
      "Personal portfolio focused on speed, expressive design, and clear project storytelling.",
    stack: "React, Vite, CSS",
    live: "/portfolio",
    code: "https://github.com/aditya7e4-spec/Arcframe",
    image: arcframeImage,
    imageAlt: "Arcframe portfolio project screenshot",
  },
  {
    title: "Real Estate Landing Experience",
    description:
      "Marketing website with streamlined lead flow and WhatsApp-based conversion journey.",
    stack: "Lovable, Form UX",
    live: "https://concrete-canvas-guide.lovable.app",
    code: "https://github.com/",
    image: concreteCanvasImage,
    imageAlt: "Real Estate Landing Experience project screenshot",
  },
];

const experience = [
  {
    role: "Freelance Web Developer",
    year: "2025",
    points: [
      "Built a marketing website for a real estate agency with conversion-focused layout decisions.",
      "Implemented lead forms and chatbot sections aligned to business goals.",
      "Improved page speed and content hierarchy to support SEO and engagement.",
      "Worked directly with requirements, design, and deployment."
    ],
  },
];

function CvPage() {
  return (
    <div className="cv-shell">
      <div className="cv-backdrop" aria-hidden="true" />

      <Navbar />

      <main className="cv-main">
        <section className="cv-hero">
          <div>
            <p className="cv-kicker">Curriculum Vitae</p>
            <h1>Aditya </h1>
            <h2>Frontend Developer/ UI Designer</h2>
            <p className="cv-tagline">
              I build fast, responsive, modern websites using React and Vite.
            </p>
            <div className="cv-actions">
              <a href="/portfolio">View Projects</a>
              <a href="/Aditya-Sahu-CV.pdf" download>
                Download CV
              </a>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h3>About Me</h3>
          <p>
            I’m a self-taught frontend developer with a strong interest in
            building clean and user-friendly web applications. I enjoy learning
            new technologies, solving problems, and turning ideas into real
            products through code. Currently looking for junior developer,
            internship, or freelance opportunities to gain real-world
            experience.
          </p>
        </section>

        <section className="cv-section">
          <h3>Skills</h3>
          <div className="cv-skill-grid">
            {skills.map((group) => (
              <article key={group.label} className="cv-skill-card">
                <h4>{group.label}</h4>
                <p>{group.values.join(" | ")}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h3>Projects</h3>
          <div className="cv-project-grid">
            {projects.map((project) => (
              <article key={project.title} className="cv-project-card">
                <img
                  className="cv-project-shot"
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                />
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <p className="cv-stack">Tech: {project.stack}</p>
                <div className="cv-links">
                  <a
                    href={project.live}
                    target={
                      project.live.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a href={project.code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h3>Experience</h3>
          {experience.map((item) => (
            <article key={item.role} className="cv-experience-card">
              <h4>
                {item.role} - {item.year}
              </h4>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="cv-section cv-two-col">
          <article>
            <h3>Education</h3>
            <p>I.Sc - Co operative college - 2024-26</p>
          </article>
          <article>
            <h3>Contact</h3>
            <p>Email: aditya7e4@gmail.com</p>
            <p>Phone: +91 9876543210</p>
            <p>
              GitHub:{" "}
              <a href="https://github.com/aditya7e4-spec" target="_blank" rel="noreferrer">
                github.com
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/aditya-63a032212/" target="_blank" rel="noreferrer">
                linkedin.com
              </a>
            </p>
          </article>
        </section>
      </main>

      <footer className="cv-footer">
        <p>(c) 2026 Aditya | Built with React + Vite</p>
      </footer>
    </div>
  );
}

export default CvPage;
