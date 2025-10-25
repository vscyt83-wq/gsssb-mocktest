import React from "react";

const QuestionCard = ({ question, handleAnswer }) => {
  return (
    <div
      className="question-card"
      style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 0 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{question.question}</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {question.options.map((option, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            <button
              onClick={() => handleAnswer(option)}
              style={{
                padding: "10px 15px",
                border: "1px solid #333",
                borderRadius: "8px",
                width: "100%",
                cursor: "pointer",
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
