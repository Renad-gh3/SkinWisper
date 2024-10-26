// ProblemPage.js
import { useState } from 'react'
import TestHeader from '../problemPage/TestHeader.jsx'
import ExploremenuOfproblem from '../ExploremenuOfproblem/ExploremeuOfproblem.jsx'
import ProblemContent from '../problemContent/problemContent.jsx'

const ProblemPage = () => {
  const[category,setCategory]=useState("All")
  return (
    <div className='app' width='100%'>
      <TestHeader />
      <ExploremenuOfproblem category={category}setCategory={setCategory}/>
      < ProblemContent category={category} /> 
    </div>
  );
};

export default ProblemPage



