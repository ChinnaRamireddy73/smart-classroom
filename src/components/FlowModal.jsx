// src/components/FlowModal.jsx
import React from "react";
import "./FlowModal.css";

function FlowModal({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="flow-modal-overlay">
      <div className="flow-modal">
        <h2 className="flow-title">{data.title}</h2>
        <ol className="flow-list">
          {data.steps.map((step, index) => (
            <li key={index} className="flow-step">
              <span className="step-number">Step {index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
        <button className="close-flow-btn" onClick={onClose}>✖ Close</button>
      </div>
    </div>
  );
}

export default FlowModal;
