import React from "react";
import { useNavigate } from "react-router-dom";
import "./ClassesPage.css";

const sampleClasses = [
  {
    id: 1,
    title: "English",
    description: "Advanced grammar and conversation skills",
    students: 25,
    subjectCode: "ENG101"
  },
  {
    id: 2,
    title: "Math",
    description: "Algebra, geometry, and problem-solving",
    students: 28,
    subjectCode: "MATH201"
  },
  {
    id: 3,
    title: "Science",
    description: "Experiments, concepts, and quizzes",
    students: 30,
    subjectCode: "SCI301"
  }
];

function ClassesPage() {
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/class/${id}`);
  };

  return (
    <div className="classes-page">
      <h2>📘 My Classes</h2>
      <div className="class-cards-container">
        {sampleClasses.map((cls) => (
          <div key={cls.id} className="class-card-full">
            <h3>{cls.title}</h3>
            <p>{cls.description}</p>
            <p><strong>Code:</strong> {cls.subjectCode}</p>
            <p><strong>Students:</strong> {cls.students}</p>
            <button onClick={() => handleView(cls.id)}>View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassesPage;
