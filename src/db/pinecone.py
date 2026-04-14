import os
import pinecone

PINECONE_API_KEY = os.getenv("PINECONE_API_KEY", "dummy-key-for-tests")
PINECONE_ENVIRONMENT = os.getenv("PINECONE_ENVIRONMENT", "us-east-1")
PINECONE_INDEX_NAME = os.getenv("PINECONE_INDEX_NAME", "memora-brain")

# Initialize conditionally to allow unit testing without hitting actual API
if PINECONE_API_KEY and PINECONE_API_KEY != "dummy-key-for-tests":
    pinecone.init(api_key=PINECONE_API_KEY, environment=PINECONE_ENVIRONMENT)

def get_pinecone_index():
    try:
        return pinecone.Index(PINECONE_INDEX_NAME)
    except Exception:
        return None

class VectorStore:
    def __init__(self):
        self.index = get_pinecone_index()

    def upsert_vectors(self, vectors: list):
        """
        vectors: list of tuples (id_string, vector_list, metadata_dict)
        """
        if self.index:
            self.index.upsert(vectors=vectors)
            return True
        return False
        
    def query(self, query_vector: list, top_k: int = 5, filter: dict = None):
        """
        Searches Pinecone. In Tier 0 top_k is smaller, in Tier 1 top_k can be deeper.
        """
        if self.index:
            return self.index.query(
                vector=query_vector, 
                top_k=top_k, 
                include_metadata=True,
                filter=filter
            )
        return {"matches": []}
