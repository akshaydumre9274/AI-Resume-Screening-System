from sklearn.metrics.pairwise import cosine_similarity


def calculate_similarity(job_embedding, resume_embedding):
    """
    Calculate cosine similarity between
    Job Description and Resume embeddings.
    """

    similarity_score = cosine_similarity(
        [job_embedding],
        [resume_embedding]
    )[0][0]

    return round(float(similarity_score) * 100, 2)