import { useState } from "react";
import axios from "axios";
import UploadForm from "./components/UploadForm";
import ResultTable from "./components/ResultTable";

function App() {

  const [results, setResults] = useState([]);

  const analyzeResumes = async () => {

    try {

      const response = await axios.get(
        "http://localhost:8080/api/rank"
      );

      setResults(response.data);

    } catch (error) {

      console.log(error);

      alert("AI Server Not Running");
    }
  };

  return (
    <div className="container">

      <UploadForm analyze={analyzeResumes} />

      <ResultTable results={results} />

    </div>
  );
}

export default App;