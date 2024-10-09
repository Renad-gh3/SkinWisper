import React, { useState, useEffect } from "react";
import axios from "axios";
import "./problemContent.css";

const ProblemContent = () => {
  const [problemData, setProblemData] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState(null); // Store selected problem
  const [showStages, setShowStages] = useState({
    description: true,
    solution: true,
  });

  // Fetch data from backend when the component loads
  useEffect(() => {
    const fetchProblemData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/SkinProblem/list"
        );
        setProblemData(response.data.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching problem data:", error);
      }
    };

    fetchProblemData();
  }, []);

  const handleProblemSelect = (problem) => {
    setSelectedProblem(problem); // Set selected problem when user clicks
  };

  const toggleStage = (stage) => {
    setShowStages((prev) => ({
      ...prev,
      [stage]: !prev[stage], // Toggle the stages (description and solution)
    }));
  };

  return (
    <div className="problem-container">
      <h2>Discover Your Skin Problem</h2>
      <p>
        Select a skin problem type to learn more about the issue and find the
        best solutions.
      </p>

      {/* Problem List */}
      <div className="problem-list">
        {problemData.map((item, index) => (
          <div
            key={index}
            className={`problem-item ${
              selectedProblem &&
              selectedProblem.SkinProblem === item.SkinProblem
                ? "active"
                : ""
            }`}
            onClick={() => handleProblemSelect(item)}
          >
            <h3>{item.SkinProblem}</h3> {/* Use SkinProblem from backend */}
          </div>
        ))}
      </div>

      {/* Display Problem Description and Solution if a problem is selected */}
      {selectedProblem && (
        <div className="problem-details">
          {/* Problem Description Box */}
          <div className="routine-stage">
            <div
              className="routine-step-header"
              onClick={() => toggleStage("description")}
            >
              <h3>Problem Description</h3>
              <span>{showStages.description ? "-" : "+"}</span>
            </div>
            {showStages.description && (
              <div className="routine-step-details">
                <p>{selectedProblem.ProblemDescription}</p>{" "}
                {/* Use ProblemDescription from backend */}
              </div>
            )}
          </div>

          {/* Solution Box */}
          <div className="routine-stage">
            <div
              className="routine-step-header"
              onClick={() => toggleStage("solution")}
            >
              <h3>Solution</h3>
              <span>{showStages.solution ? "-" : "+"}</span>
            </div>
            {showStages.solution && (
              <div className="routine-step-details">
                <p>{selectedProblem.Solution}</p>{" "}
                {/* Use Solution from backend */}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemContent;
