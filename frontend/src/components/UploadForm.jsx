import { useState } from "react";

function UploadForm({ onAnalyze }) {
  const [jobFile, setJobFile] = useState(null);
  const [resumeFiles, setResumeFiles] = useState([]);

  return (
    <div className="card">

      <h3>Upload Job Description</h3>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => setJobFile(e.target.files[0])}
      />

      <h3>Upload Multiple Resumes</h3>

      <input
        type="file"
        multiple
        accept=".pdf,.doc,.docx"
        onChange={(e) => setResumeFiles([...e.target.files])}
      />

      <br />
      <br />

      <button onClick={onAnalyze}>
        Analyze Resumes
      </button>

      <div className="info">
        <p>
          <strong>Job Description:</strong>{" "}
          {jobFile ? jobFile.name : "Not Selected"}
        </p>

        <p>
          <strong>Resumes Selected:</strong>{" "}
          {resumeFiles.length}
        </p>
      </div>

    </div>
  );
}

export default UploadForm;