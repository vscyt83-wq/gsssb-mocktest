import React, { useEffect, useState } from "react";
import axios from "axios";
import QuestionCard from "./QuestionCard.jsx";
import Result from "./Result.jsx";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // ✅ Fetch questions from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/questions")
      .then((res) => setQuestions(res.data))
      .catch((err) => console.error("Error fetching questions:", err));
  }, []);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }

    const next = currentIndex + 1;
    if (next < questions.length) {
      setCurrentIndex(next);
    } else {
      setShowResult(true);
    }
  };

  if (showResult)
    return <Result score={score} total={questions.length} />;

  if (questions.length === 0)
    return <p>Loading questions...</p>;

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h2>
        Question {currentIndex + 1} / {questions.length}
      </h2>
      <QuestionCard
        question={questions[currentIndex]}
        handleAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
