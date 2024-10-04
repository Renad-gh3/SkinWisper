import React, { useState } from 'react';
import './SkinTypeRoutine.css';

const SkinRoutine = () => {
  const [selectedRoutine, setSelectedRoutine] = useState('Morning');
  const [activeStep, setActiveStep] = useState(null);

  const routineContent = {
    "Morning": [
      { 
        stage: "First, apply the cleanser", 
        product: "Gentle Cleanser", 
        suggestion: "Use a gentle cleanser to refresh your skin." 
      },
      { 
        stage: "Next, apply the treatment", 
        product: "Hydrating Serum", 
        suggestion: "This serum locks in moisture and balances your skin." 
      },
      { 
        stage: "Finally, protect your skin", 
        product: "SPF Moisturizer", 
        suggestion: "Apply an SPF moisturizer to protect your skin from UV rays." 
      }
    ],
    "Evening": [
      { 
        stage: "First, cleanse your face", 
        product: "Hydrating Cleanser", 
        suggestion: "Use this to remove makeup and impurities." 
      },
      { 
        stage: "Next, treat your skin", 
        product: "Retinol Serum", 
        suggestion: "Apply retinol to help with skin regeneration overnight." 
      },
      { 
        stage: "Lastly, moisturize deeply", 
        product: "Night Cream", 
        suggestion: "Use a rich cream to nourish your skin as you sleep." 
      }
    ]
  };

  const routine = routineContent[selectedRoutine];

  const handleToggle = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

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
        {routine.map((item, index) => (
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