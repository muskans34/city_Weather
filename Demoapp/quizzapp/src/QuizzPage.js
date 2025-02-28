import React, { useState } from "react";

const QuizPage = () => {
  const quizzes = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "Which programming language is used for React?",
      options: ["Python", "Java", "JavaScript", "C#"],
      answer: "JavaScript",
    },
    {
      question: "What is the boiling point of water?",
      options: ["90°C", "100°C", "80°C", "120°C"],
      answer: "100°C",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: option,
    });
  };

  const calculateScore = () => {
    let totalScore = 0;
    quizzes.forEach((quiz, index) => {
      if (selectedAnswers[index] === quiz.answer) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizzes.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Quiz App</h1>
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-800">
          Question {currentQuestionIndex + 1} of {quizzes.length}
        </h2>
        <p className="mt-4 text-gray-700">{quizzes[currentQuestionIndex].question}</p>
        <div className="mt-4 space-y-2">
          {quizzes[currentQuestionIndex].options.map((option, index) => (
            <label
              key={index}
              className="block p-2 border rounded cursor-pointer hover:bg-gray-100"
            >
              <input
                type="radio"
                name={`quiz-${currentQuestionIndex}`}
                value={option}
                checked={selectedAnswers[currentQuestionIndex] === option}
                onChange={() => handleOptionChange(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`py-2 px-4 rounded ${
              currentQuestionIndex === 0
                ? "bg-gray-300 text-gray-600"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Previous
          </button>
          {currentQuestionIndex < quizzes.length - 1 ? (
            <button
              onClick={handleNext}
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Next
            </button>
          ) : (
            <button
              onClick={calculateScore}
              className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Submit
            </button>
          )}
        </div>
        {score !== null && (
          <div className="mt-4 text-lg font-semibold text-green-600">
            Your Score: {score} / {quizzes.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
