// ProblemPage.js
import { useState } from 'react'
import Navbar from "../Navbar/Navbar.jsx"
import TestHeader from '../problemPage/TestHeader.jsx'
import ExploremenuOfproblem from '../ExploremenuOfproblem/ExploremeuOfproblem.jsx'
import ProblemContent from '../problemContent/problemContent.jsx'
import Footer from '../Footer/Footer.jsx'

const ProblemPage = () => {
  const[category,setCategory]=useState("All")
  return (
    <div className='app' width='100%'>
      <Navbar />
      <TestHeader />
      <ExploremenuOfproblem category={category}setCategory={setCategory}/>
      < ProblemContent category={category} /> 
      <Footer />
    </div>
  );
};

export default ProblemPage



