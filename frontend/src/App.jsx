import React from "react";
import Quiz from "./components/Quiz.jsx";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", margin: "20px 0" }}>
        <h1>GSSSB Mock Test — Maths & Reasoning</h1>
        <p>Test your knowledge with previous year questions (MCQs)</p>
      </header>
      <main>
        <Quiz />
      </main>
      <footer style={{ textAlign: "center", marginTop: "40px", fontSize: "0.9rem", color: "#555" }}>
        &copy; 2025 GSSSB Mock Test
      </footer>
    </div>
  );
}

export default App;
