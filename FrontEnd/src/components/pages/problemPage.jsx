import { useState } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import TestHeader from "../problemPage/TestHeader.jsx";
import ExploremenuOfproblem from "../ExploremenuOfproblem/ExploremeuOfproblem.jsx"; // Ensure correct file name
import ProblemContent from "../problemContent/problemContent.jsx";
import Footer from "../Footer/Footer.jsx";

const ProblemPage = () => {
  const [category, setCategory] = useState("All"); // Shared state

  return (
    <div className="app" width="100%">
      <Navbar />
      <TestHeader />
      {/* Pass category and setCategory to ExploremenuOfproblem */}
      <ExploremenuOfproblem category={category} setCategory={setCategory} />
      {/* Pass category to ProblemContent */}
      <ProblemContent category={category} />
      <Footer />
    </div>
  );
};

export default ProblemPage;
