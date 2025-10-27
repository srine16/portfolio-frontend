import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Spring Boot", "Node.js", "Express.js", "Bootstrap"],
    },
    {
      category: "AI & Data Science",
      items: ["Machine Learning", "TensorFlow", "Pandas", "NumPy", "Scikit-learn"],
    },
    {
      category: "Databases & Tools",
      items: ["MySQL", "MongoDB", "Git", "Postman", "VS Code", "IntelliJ IDEA"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h1 data-aos="fade-up">Technical Skills</h1>
        <p data-aos="fade-up" data-aos-delay="150">
          A collection of technologies, tools, and frameworks that I use to design,
          develop, and deliver high-quality software and intelligent systems.
        </p>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="skill-card"
              data-aos="zoom-in"
              data-aos-delay={200 + index * 100}
            >
              <h3>{skillGroup.category}</h3>
              <ul>
                {skillGroup.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
