import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Research.css";

export default function Research() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const researchProjects = [
    {
      title: "Forest Guard — AI for Climate Action (UN SDG 13)",
      year: "2025",
      focus:
        "A machine learning system designed to detect and predict deforestation patterns using satellite imagery and environmental datasets.",
      tools: "Python, TensorFlow, Pandas, NumPy, OpenCV, Flask",
      impact:
        "Supports climate conservation efforts by enabling proactive forest monitoring and data-driven decision-making for sustainability.",
    },
    {
      title: "AI-Enhanced Academic Recommendation System",
      year: "2024",
      focus:
        "Developed a data-driven system that recommends personalized study resources using natural language processing and clustering algorithms.",
      tools: "Python, Scikit-learn, NLP, React, Flask",
      impact:
        "Improved user engagement and academic performance by tailoring content to individual learning patterns.",
    },
    {
      title: "Predictive Health Analytics using ML",
      year: "2023",
      focus:
        "Built an end-to-end predictive model that forecasts potential health risks based on patient lifestyle and genetic data.",
      tools: "Python, Pandas, Matplotlib, XGBoost, Django",
      impact:
        "Enabled early risk identification and preventive healthcare planning with a 90% accuracy rate.",
    },
  ];

  return (
    <section id="research" className="research-section">
      <div className="research-container">
        <h1 data-aos="fade-up">Research & Innovation</h1>
        <p data-aos="fade-up" data-aos-delay="150">
          My research integrates <strong>Artificial Intelligence</strong>,
          <strong> sustainability</strong>, and <strong>data systems</strong> to
          solve real-world problems through intelligent, ethical, and impactful
          technologies.
        </p>

        <div className="research-grid">
          {researchProjects.map((project, index) => (
            <div
              key={index}
              className="research-card"
              data-aos="fade-up"
              data-aos-delay={200 + index * 150}
            >
              <div className="research-header">
                <h2>{project.title}</h2>
                <span className="year">{project.year}</span>
              </div>
              <p className="focus">{project.focus}</p>
              <p className="tools">
                <strong>Tools:</strong> {project.tools}
              </p>
              <p className="impact">{project.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
