import React from "react";

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        className="modal-content"
        style={{
          backgroundColor: "#0d1117",
          color: "#e6edf3",
          padding: "2rem",
          borderRadius: "12px",
          maxWidth: "600px",
          width: "90%",
          boxShadow: "0 0 25px rgba(88, 166, 255, 0.3)",
        }}
      >
        <h2 style={{ color: "#58a6ff", marginBottom: "1rem" }}>
          {project.title}
        </h2>
        <p><strong>Category:</strong> {project.category}</p>
        <p><strong>Year:</strong> {project.year}</p>
        <p><strong>Technologies:</strong> {project.tech}</p>
        <p style={{ marginTop: "1rem" }}>{project.description}</p>

        <div style={{ marginTop: "1.5rem" }}>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#58a6ff",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            🔗 View on GitHub
          </a>
        </div>

        <button
          onClick={onClose}
          style={{
            marginTop: "1.5rem",
            backgroundColor: "#238636",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
