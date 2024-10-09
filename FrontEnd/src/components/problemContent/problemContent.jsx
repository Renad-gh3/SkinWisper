import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './problemContent.css';

const ProblemContent = () => {
  const [problemData, setProblemData] = useState([]);
  const [activeProblem, setActiveProblem] = useState(null);

  // Fetch data from backend when the component loads
  useEffect(() => {
    const fetchProblemData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/SkinType/list');
        setProblemData(response.data.data); // Assumes the response contains the data in a field called 'data'
      } catch (error) {
        console.error('Error fetching problem data:', error);
      }
    };

    fetchProblemData();
  }, []);

  // Toggle the display of problem details
 /* const handleToggle = (index) => {
    setActiveProblem(activeProblem === index ? null : index);
  };
*/
const handleProblemSelect = (problem) => {
    setSelectedProblem(problem);
  };
  return (
    <div className="problem-container">
      <h2>Discover Your Skin Problem</h2>
      <p>Select a skin problem type to learn more about the issue and find the best solutions.</p>

   {/* Problem List */}
   <div className="problem-list">
        {problemData.map((item, index) => (
          <div 
            key={index} 
            className={`problem-item ${selectedProblem && selectedProblem.problemName === item.problemName ? 'active' : ''}`}
            onClick={() => handleProblemSelect(item)}
          >
            <h3>{item.problemName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProblemContent;
