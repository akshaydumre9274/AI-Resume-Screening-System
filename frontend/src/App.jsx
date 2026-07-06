import { useState } from "react";
import "./App.css";
import UploadForm from "./components/UploadForm";
import ResultTable from "./components/ResultTable";

function App() {
  const [results, setResults] = useState([]);

  const handleAnalyze = () => {
    // Dummy Data (Backend will come later)
    setResults([
      { rank: 1, name: "Rushi_Resume.pdf", score: 96 },
      { rank: 2, name: "Amit_Resume.pdf", score: 91 },
      { rank: 3, name: "Priya_Resume.pdf", score: 87 },
      { rank: 4, name: "Rahul_Resume.pdf", score: 79 },
    ]);
  };

  return (
    <div className="container">
      <h1>AI Resume Screening System</h1>

      <UploadForm onAnalyze={handleAnalyze} />

      <ResultTable results={results} />
    </div>
  );
}

export default App;