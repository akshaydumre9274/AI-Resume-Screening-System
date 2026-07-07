import os
from flask import Flask, jsonify

from extract_text import extract_text
from embedding import generate_embedding
from similarity import calculate_similarity

app = Flask(__name__)

JOB_FOLDER = "uploads/job"
RESUME_FOLDER = "uploads/resumes"


@app.route("/")
def home():
    return "AI Resume Screening Service Running"


@app.route("/rank", methods=["GET"])
def rank_resumes():

    # Check Job Description
    job_files = os.listdir(JOB_FOLDER)

    if len(job_files) == 0:
        return jsonify({"error": "No Job Description Found"})

    job_path = os.path.join(JOB_FOLDER, job_files[0])

    # Read Job Description
    job_text = extract_text(job_path)

    # Generate Job Embedding
    job_embedding = generate_embedding(job_text)

    results = []

    rank = 1

    # Read Every Resume
    for resume in os.listdir(RESUME_FOLDER):

        resume_path = os.path.join(RESUME_FOLDER, resume)

        resume_text = extract_text(resume_path)

        resume_embedding = generate_embedding(resume_text)

        score = calculate_similarity(
            job_embedding,
            resume_embedding
        )

        results.append({
            "resume": resume,
            "score": score
        })

    # Sort Highest Score First
    results = sorted(
        results,
        key=lambda x: x["score"],
        reverse=True
    )

    # Add Rank
    final_result = []

    for item in results:

        final_result.append({
            "rank": rank,
            "resume": item["resume"],
            "score": item["score"]
        })

        rank += 1

    return jsonify(final_result)


if __name__ == "__main__":
    app.run(debug=True)