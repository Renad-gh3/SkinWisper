import React, { useState } from "react";
import "./Header.css";
import headerImage from "../../assets/headerSkin.png";

const Header = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState("");
  const [headerText, setHeaderText] = useState({
    title: "Discover Your Skin Type!",
    subtitle: "Take Our Quick Test Now",
  });

  const questions = [
    {
      text: "How does your skin feel shortly after washing your face?",
      options: [
        "Tight or dry",
        "Smooth and balanced",
        "Oily in some areas",
        "Oily all over",
      ],
    },
    {
      text: "How does your skin typically look by midday?",
      options: [
        "Flaky or rough",
        "The same as in the morning",
        "Shiny in some areas",
        "Very shiny and oily",
      ],
    },
    {
      text: "How often do you experience breakouts?",
      options: [
        "Rarely or never",
        "Only occasionally",
        "Often in specific areas",
        "Very frequently",
      ],
    },
    {
      text: "How does your skin react to skincare products or new environments?",
      options: [
        "Irritated or sensitive",
        "Tolerates products well",
        "Varies by product",
        "Rarely reacts",
      ],
    },
    {
      text: "Do you notice visible pores on your face?",
      options: [
        "Barely visible",
        "Moderately visible",
        "Larger in T-zone",
        "Very noticeable",
      ],
    },
  ];

  const handleOptionClick = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const calculateResult = () => {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach((answer) => {
      if (answer === 0) counts.A++;
      if (answer === 1) counts.B++;
      if (answer === 2) counts.C++;
      if (answer === 3) counts.D++;
    });

    const max = Math.max(counts.A, counts.B, counts.C, counts.D);
    let skinType = "";
    if (counts.A === max) skinType = "Dry or sensitive skin";
    if (counts.B === max) skinType = "Normal skin";
    if (counts.C === max) skinType = "Combination skin";
    if (counts.D === max) skinType = "Oily skin";

    setResult(skinType);

    // Update header text dynamically
    setHeaderText({
      title: `Your skin type is: ${skinType}`,
      subtitle: "",
    });

    // Close the quiz
    setShowQuiz(false);
  };

  const retakeTest = () => {
    setShowQuiz(true);
    setAnswers([]);
    setResult("");
    setHeaderText({
      title: "Discover Your Skin Type!",
      subtitle: "Take Our Quick Test Now",
    });
  };

  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="header-overlay">
        <div className="header-content">
          <h1>{headerText.title}</h1>
          <p>{headerText.subtitle}</p>
          {!result && (
            <button
              onClick={() => setShowQuiz(true)}
              className="get-started-button"
            >
              GET STARTED
            </button>
          )}
        </div>
      </div>

      {showQuiz && (
        <>
          <div
            className="quiz-overlay"
            onClick={() => setShowQuiz(false)}
          ></div>{" "}
          {/* Overlay */}
          <div className="quiz-popup">
            <div className="quiz-questions">
              <h2>Determine Your Skin Type</h2>
              {questions.map((question, index) => (
                <div key={index} className="question-block">
                  <p>{question.text}</p>
                  <div className="options">
                    {question.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        className={`option-button ${
                          answers[index] === optionIndex ? "selected" : ""
                        }`}
                        onClick={() => handleOptionClick(index, optionIndex)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button
                className="see-result-button"
                onClick={calculateResult}
                disabled={
                  answers.length !== questions.length ||
                  answers.includes(undefined)
                }
              >
                See Result
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
