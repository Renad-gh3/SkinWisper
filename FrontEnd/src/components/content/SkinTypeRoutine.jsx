import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SkinTypeRoutine.css"; // Assuming you have some CSS for styling

const SkinTypeRoutine = ({ category }) => {
  const [routineData, setRoutineData] = useState([]); // Data fetched from backend
  const [selectedRoutine, setSelectedRoutine] = useState("Morning"); // Morning or Evening

  // Fetch data from the backend based on selected category and selectedRoutine
  useEffect(() => {
    const fetchRoutineData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/SkinType/list"
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

      {/* Display routine stages */}
      <div className="routine-steps">
        {filteredRoutine.length > 0 ? (
          filteredRoutine.map((item, index) => (
            <div key={index} className="routine-stage-container">
              {/* Stage 1 */}
              <div className="routine-stage">
                <h3>Stage 1: {item.stage1}</h3>
                <p>
                  <strong>Product:</strong> {item.S1product}
                </p>
                <p>
                  <strong>Suggestion:</strong> {item.S1suggestion}
                </p>
              </div>

              {/* Stage 2 */}
              <div className="routine-stage">
                <h3>Stage 2: {item.stage2}</h3>
                <p>
                  <strong>Product:</strong> {item.S2product}
                </p>
                <p>
                  <strong>Suggestion:</strong> {item.S2suggestion}
                </p>
              </div>

              {/* Stage 3 */}
              <div className="routine-stage">
                <h3>Stage 3: {item.stage3}</h3>
                <p>
                  <strong>Product:</strong> {item.S3product}
                </p>
                <p>
                  <strong>Suggestion:</strong> {item.S3suggestion}
                </p>
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

export default SkinTypeRoutine;
