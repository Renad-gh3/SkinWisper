import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SkinTypeRoutine.css';

const SkinRoutine = () => {
  const [selectedRoutine, setSelectedRoutine] = useState('Morning');
  const [routineData, setRoutineData] = useState([]);
  const [activeStep, setActiveStep] = useState(null);

  // Fetch data from backend when the component loads
  useEffect(() => {
    const fetchRoutineData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/SkinType/list');
        setRoutineData(response.data.data); // Assumes the response contains the data in a field called 'data'
      } catch (error) {
        console.error('Error fetching routine data:', error);
      }
    };

    fetchRoutineData();
  }, []);

  const handleToggle = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  const filteredRoutine = routineData.filter(routine => routine.period.toLowerCase() === selectedRoutine.toLowerCase());

  return (
    <div className="routine-container">
      <h2>Products In This Routine</h2>
      <p>SkinWhisper's carefully curated products create a routine that you and your skin will feel good about.</p>
      
      {/* Center the Toggle Buttons */}
      <div className="routine-toggle-container">
        <div className="routine-toggle">
          <button 
            className={selectedRoutine === 'Morning' ? 'active' : ''} 
            onClick={() => setSelectedRoutine('Morning')}
          >
            Morning
          </button>
          <button 
            className={selectedRoutine === 'Evening' ? 'active' : ''} 
            onClick={() => setSelectedRoutine('Evening')}
          >
            Evening
          </button>
        </div>
      </div>

      {/* Routine Steps */}
      <div className="routine-steps">
        {filteredRoutine.map((item, index) => (
          <div key={index} className="routine-step">
            <div className="routine-step-header" onClick={() => handleToggle(index)}>
              <h3>{index + 1}. {item.stage}</h3>
              <span>{activeStep === index ? '-' : '+'}</span>
            </div>
            {activeStep === index && (
              <div className="routine-step-details">
                <p><strong>Product:</strong> {item.product}</p>
                <p><strong>Suggestion:</strong> {item.suggestion}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkinRoutine;
