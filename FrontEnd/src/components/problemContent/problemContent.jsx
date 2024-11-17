/*import React, { useState, useEffect } from "react";
import axios from "axios";
import "./problemContent.css";

const ProblemContent = ({ category }) => {
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
          "http://localhost:5001/api/SkinProblem/list"
        );
        setProblemData(response.data.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching problem data:", error);
      }
    };

    fetchProblemData();
  }, []);

  // When category changes, find and set the selected problem
  useEffect(() => {
    if (category !== "All") {
      const foundProblem = problemData.find(
        (item) => item.SkinProblem === category
      );
      setSelectedProblem(foundProblem || null); // Set selected problem based on category
    } else {
      setSelectedProblem(null); // Reset when "All" is selected
    }
  }, [category, problemData]);

  const toggleStage = (stage) => {
    setShowStages((prev) => ({
      ...prev,
      [stage]: !prev[stage], // Toggle the stages (description and solution)
    }));
  };

  return (
    <div className="problem-container">
      {/* Display Problem Description and Solution if a problem is selected }
      {selectedProblem ? (
        <div className="problem-details">
          {/* Problem Description Box }
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
                {/* Display ProblemDescription }
              </div>
            )}
          </div>

          {/* Solution Box }
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
                <p>{selectedProblem.Solution}</p> {/* Display Solution }
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>Select a skin problem to see the details.</p>
      )}
    </div>
  );
};

export default ProblemContent;*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./problemContent.css";

const ProblemContent = ({ category }) => {
  const [problemData, setProblemData] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState(null);
//هنا في المفروض اشياء بس عشان غيرنا الديزاين تغيرت 
  useEffect(() => {
    const fetchProblemData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/SkinProblem/list"
        );
        setProblemData(response.data.data);
      } catch (error) {
        console.error("Error fetching problem data:", error);
      }
    };

    fetchProblemData();
  }, []);

  useEffect(() => {
    if (category !== "All") {
      const foundProblem = problemData.find(
        (item) => item.SkinProblem === category
      );
      setSelectedProblem(foundProblem || null);
    } else {
      setSelectedProblem(null);
    }
  }, [category, problemData]);

  return (
    <div className="problem-container">
      {selectedProblem ? (
        <div className="problem-boxes">
          {/* Problem Description */}
          <div className="problem-box">
            <h2>Problem Description</h2>
            <p>{selectedProblem.ProblemDescription}</p>
          </div>

          {/* Problem Solution */}
          <div className="problem-box">
            <h2>Solution</h2>
            <p>{selectedProblem.Solution}</p>
          </div>
        </div>
      ) : (
        <div className="problem-placeholder">
          <h2>Select a Skin Problem</h2>
          <p>Choose a category to explore detailed descriptions and solutions.</p>
        </div>
      )}
    </div>
  );
};

export default ProblemContent;
