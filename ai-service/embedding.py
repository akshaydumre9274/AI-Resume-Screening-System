from sentence_transformers import SentenceTransformer

# Load the AI embedding model (loads only once)
model = SentenceTransformer("all-MiniLM-L6-v2")


def generate_embedding(text):
    """
    Generate vector embedding for input text.
    """
    embedding = model.encode(text)

    return embedding