import { useState } from "react";
import axios from "axios";

function UploadForm({ analyze }) {
  const [jobFile, setJobFile] = useState(null);
  const [resumeFiles, setResumeFiles] = useState([]);

  const uploadAndAnalyze = async () => {
    try {
      if (!jobFile) {
        alert("Please select a Job Description.");
        return;
      }

      if (resumeFiles.length === 0) {
        alert("Please select Resume files.");
        return;
      }

      // Upload Job Description
      const jobData = new FormData();
      jobData.append("file", jobFile);

      await axios.post(
        "http://localhost:8080/upload/job",
        jobData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Upload Resumes
      const resumeData = new FormData();

      resumeFiles.forEach((file) => {
        resumeData.append("files", file);
      });

      await axios.post(
        "http://localhost:8080/upload/resumes",
        resumeData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Call AI Ranking API
      await analyze();

    } catch (error) {
      console.error(error);
      alert("Upload Failed!");
    }
  };

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

      <button onClick={uploadAndAnalyze}>
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