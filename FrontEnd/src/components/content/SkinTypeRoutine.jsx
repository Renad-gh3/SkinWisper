/*import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SkinTypeRoutine.css"; // Assuming you have some CSS for styling

const SkinTypeRoutine = ({ category }) => {
  const [routineData, setRoutineData] = useState([]); // Data fetched from backend
  const [selectedRoutine, setSelectedRoutine] = useState("Morning"); // Morning or Evening
  const [showStages, setShowStages] = useState({
    stage1: false,
    stage2: false,
    stage3: false,
  });

  // Toggle the visibility of each stage
  const toggleStage = (stage) => {
    setShowStages((prev) => ({
      ...prev,
      [stage]: !prev[stage],
    }));
  };

  // Fetch data from the backend based on selected category and selectedRoutine
  useEffect(() => {
    const fetchRoutineData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/SkinType/list"
        ); // Change the URL to your API endpoint
        setRoutineData(response.data.data); // Assuming the backend response has a 'data' field with the list of routines
      } catch (error) {
        console.error("Error fetching routine data:", error);
      }
    };

    fetchRoutineData();
  }, [category, selectedRoutine]); // Fetch when skin type or period changes

  // Filter routine data based on skinType and period (morning/evening)
  const filteredRoutine = routineData.filter(
    (routine) =>
      routine.skinType.toLowerCase() === category.toLowerCase() &&
      routine.period.toLowerCase() === selectedRoutine.toLowerCase()
  );

  return (
    <div className="routine-container">
      <h2>Products in This Routine</h2>
      <p>
        SkinWhisper's carefully curated products create a routine that you and
        your skin will love.
      </p>

      {/* Toggle Buttons for Morning/Evening/}
      <div className="routine-toggle-container">
        <div className="routine-toggle">
          <button
            className={selectedRoutine === "Morning" ? "active" : ""}
            onClick={() => setSelectedRoutine("Morning")}
          >
            Morning
          </button>
          <button
            className={selectedRoutine === "Evening" ? "active" : ""}
            onClick={() => setSelectedRoutine("Evening")}
          >
            Evening
          </button>
        </div>
      </div>

      {/* Display routine stages }
      <div className="routine-steps">
        {filteredRoutine.length > 0 ? (
          filteredRoutine.map((item, index) => (
            <div key={index} className="routine-stage-container">
              {/* Stage 1}
              <div className="routine-stage">
                <div
                  className="routine-step-header"
                  onClick={() => toggleStage("stage1")}
                >
                  <h3>{item.stage1}</h3>
                  <span>{showStages.stage1 ? "-" : "+"}</span>
                </div>
                {showStages.stage1 && (
                  <div className="routine-step-details">
                    <p>
                      <strong>Product:</strong> {item.S1product}
                    </p>
                    <p>
                      <strong>Suggestion:</strong> {item.S1suggestion}
                    </p>
                  </div>
                )}
              </div>

              {/* Stage 2 }
              <div className="routine-stage">
                <div
                  className="routine-step-header"
                  onClick={() => toggleStage("stage2")}
                >
                  <h3>{item.stage2}</h3>
                  <span>{showStages.stage2 ? "-" : "+"}</span>
                </div>
                {showStages.stage2 && (
                  <div className="routine-step-details">
                    <p>
                      <strong>Product:</strong> {item.S2product}
                    </p>
                    <p>
                      <strong>Suggestion:</strong> {item.S2suggestion}
                    </p>
                  </div>
                )}
              </div>

              {/* Stage 3 }
              <div className="routine-stage">
                <div
                  className="routine-step-header"
                  onClick={() => toggleStage("stage3")}
                >
                  <h3>{item.stage3}</h3>
                  <span>{showStages.stage3 ? "-" : "+"}</span>
                </div>
                {showStages.stage3 && (
                  <div className="routine-step-details">
                    <p>
                      <strong>Product:</strong> {item.S3product}
                    </p>
                    <p>
                      <strong>Suggestion:</strong> {item.S3suggestion}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No routine found for this skin type and period.</p>
        )}
      </div>
    </div>
  );
};

export default SkinTypeRoutine;*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SkinTypeRoutine.css";

const SkinTypeRoutine = ({ category }) => {
  const [routineData, setRoutineData] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState("Morning");
  const [showStages, setShowStages] = useState({ stage1: false, stage2: false, stage3: false });

  const toggleStage = (stage) => {
    setShowStages((prev) => ({
      ...prev,
      [stage]: !prev[stage],
    }));
  };

  useEffect(() => {
    const fetchRoutineData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/SkinType/list");
        setRoutineData(response.data.data);
      } catch (error) {
        console.error("Error fetching routine data:", error);
      }
    };

    fetchRoutineData();
  }, [category, selectedRoutine]);

  const filteredRoutine = routineData.filter(
    (routine) =>
      routine.skinType.toLowerCase() === category.toLowerCase() &&
      routine.period.toLowerCase() === selectedRoutine.toLowerCase()
  );

  return (
    <div className="routine-container">
      <h2>Products in This Routine</h2>
      <p>
        SkinWhisper's carefully curated products create a routine that you and
        your skin will love.
      </p>

      {/* Toggle Buttons for Morning/Evening */}
      <div className="routine-toggle-container">
        <div className="routine-toggle">
          <button
            className={selectedRoutine === "Morning" ? "active" : ""}
            onClick={() => setSelectedRoutine("Morning")}
          >
            Morning
          </button>
          <button
            className={selectedRoutine === "Evening" ? "active" : ""}
            onClick={() => setSelectedRoutine("Evening")}
          >
            Evening
          </button>
        </div>
      </div>

      {/* Display All Stages */}
      <div className="routine-card-container">
        {filteredRoutine.length > 0 && (
          <>
            {/* Stage 1 */}
            <div className="routine-card" onClick={() => toggleStage("stage1")}>
              <div className="routine-circle">1</div>
              <div className="routine-content">
                <h3>{filteredRoutine[0].stage1}</h3>
                {showStages.stage1 && (
                  <>
                    <p>
                      <strong>Product:</strong> {filteredRoutine[0].S1product}
                    </p>
                    <p>
                      <strong>Suggestion:</strong> {filteredRoutine[0].S1suggestion}
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Stage 2 */}
            <div className="routine-card" onClick={() => toggleStage("stage2")}>
              <div className="routine-circle">2</div>
              <div className="routine-content">
                <h3>{filteredRoutine[0].stage2}</h3>
                {showStages.stage2 && (
                  <>
                    <p>
                      <strong>Product:</strong> {filteredRoutine[0].S2product}
                    </p>
                    <p>
                      <strong>Suggestion:</strong> {filteredRoutine[0].S2suggestion}
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Stage 3 */}
            <div className="routine-card" onClick={() => toggleStage("stage3")}>
              <div className="routine-circle">3</div>
              <div className="routine-content">
                <h3>{filteredRoutine[0].stage3}</h3>
                {showStages.stage3 && (
                  <>
                    <p>
                      <strong>Product:</strong> {filteredRoutine[0].S3product}
                    </p>
                    <p>
                      <strong>Suggestion:</strong> {filteredRoutine[0].S3suggestion}
                    </p>
                  </>
                )}
              </div>
            </div>
          </>
        )}
         {filteredRoutine.length === 0 && (
            <p className="no-routine-message">No routine found for this skin type and period.</p>
          )}
      </div>
    </div>
  );
};

export default SkinTypeRoutine;
