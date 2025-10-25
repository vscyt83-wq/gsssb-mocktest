import React from "react";

const Result = ({ score, total }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Test Completed 🎯</h2>
      <p>Your Score: {score} / {total}</p>
      <button onClick={() => window.location.reload()}>
        Retry
      </button>
    </div>
  );
};

export default Result;
