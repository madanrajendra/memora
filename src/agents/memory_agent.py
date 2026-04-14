from pydantic import BaseModel, Field
from typing import List

class MemoryExtraction(BaseModel):
    response: str = Field(description="The conversational response to the user.")
    extracted_memories: List[str] = Field(description="A list of specific facts extracted from the prompt to save in Long-term DB.")

class PersonalMemoryAgent:
    def __init__(self, llm_client, vector_store=None):
        self.llm_client = llm_client
        self.vector_store = vector_store
        
    def process(self, user_input: str) -> MemoryExtraction:
        """
        Extracts facts and importance scoring from user chat input.
        If a vector store is provided, it can be used for context injection (RAG).
        """
        # In a real implementation we would fetch context from Pinecone here:
        # if self.vector_store:
        #    context = self.vector_store.query(query_vector=self.embedder(user_input))
        
        result = self.llm_client.generate_structured_response(
            prompt=user_input, 
            schema_class=MemoryExtraction
        )
        return result
