import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";
import Modal from "./Modal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "Forest Guard — AI for Climate Action",
      year: "2025",
      category: "AI & Sustainability",
      description:
        "An AI-powered deforestation detection platform using satellite data and CNN-based image classification. Built to align with UN SDG 13 (Climate Action).",
      tech: "Python, TensorFlow, Flask, OpenCV, React",
      link: "https://github.com/",
    },
    {
      title: "Student Management System",
      year: "2024",
      category: "Full-Stack Development",
      description:
        "A CRUD-based web app enabling secure student record management with login authentication, dashboards, and SQL integration.",
      tech: "Java, Spring Boot, MySQL, React",
      link: "https://github.com/",
    },
    {
      title: "Personal Portfolio Platform",
      year: "2024",
      category: "Frontend Engineering",
      description:
        "A responsive personal portfolio site showcasing my technical, academic, and AI research projects — built from scratch for scalability and UX.",
      tech: "React, AOS, CSS3, JavaScript",
      link: "https://github.com/",
    },
    {
      title: "AI-Driven Academic Recommender",
      year: "2023",
      category: "Machine Learning",
      description:
        "Developed an NLP-based recommendation model that personalizes learning resources using clustering and classification algorithms.",
      tech: "Python, Scikit-learn, Flask, Pandas",
      link: "https://github.com/",
    },
    {
      title: "Health Risk Prediction System",
      year: "2023",
      category: "AI & Healthcare",
      description:
        "Predictive analytics project leveraging supervised ML models to forecast potential health risks with 90% accuracy.",
      tech: "Python, XGBoost, Django, SQL",
      link: "https://github.com/",
    },
    {
      title: "E-Commerce Web Application",
      year: "2022",
      category: "Software Engineering",
      description:
        "Full-stack e-commerce app implementing user authentication, payment gateway, and inventory management.",
      tech: "React, Node.js, Express, MongoDB",
      link: "https://github.com/",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h1 data-aos="fade-up">Featured Projects</h1>
        <p data-aos="fade-up" data-aos-delay="150">
          A selection of my most impactful software and AI projects — blending
          technical precision with design thinking.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-content">
                <h2>{project.title}</h2>
                <p className="category">{project.category}</p>
                <p className="year">{project.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
}
