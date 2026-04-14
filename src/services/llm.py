import json
import logging

logger = logging.getLogger(__name__)

class MockLLMClient:
    """
    Mock LLM Client to simulate GPT-5 mini and Gemini 2.5 flash lite responses
    returning structured JSON data based on the requested agent's schema.
    """
    def __init__(self, model_name: str):
        self.model_name = model_name

    def generate_structured_response(self, prompt: str, schema_class):
        """
        Mocks a structured response matching the Pydantic schema class provided.
        """
        logger.info(f"[{self.model_name}] Processing prompt for schema: {schema_class.__name__}")
        
        # Simple keyword mock routing based on schema name
        if schema_class.__name__ == "MemoryExtraction":
            return schema_class(
                response="I've noted that down for you.",
                extracted_memories=["User mentioned a key detail.", "Important fact extracted."]
            )
        elif schema_class.__name__ == "TaskDecomposition":
            from src.agents.task_agent import SubTask
            return schema_class(
                response="I've broken this down into tasks.",
                tasks=[SubTask(title="Initial planned task", due_date=None)]
            )
        elif schema_class.__name__ == "DecisionMatrix":
            return schema_class(
                pros=["Advantage 1"],
                cons=["Disadvantage 1"],
                recommendation="Based on the analysis, this is the recommended path."
            )
        elif schema_class.__name__ == "HabitInsight":
            return schema_class(
                insight="You are doing great with your morning routine.",
                suggested_adjustment="Try doing it 10 minutes earlier."
            )
        elif schema_class.__name__ == "IntentClassification":
            # Simple keyword matching for the mock router
            intent = "conversation"
            prompt_lower = prompt.lower()
            if "remind" in prompt_lower or "task" in prompt_lower:
                intent = "task"
            elif "choose" in prompt_lower or "decide" in prompt_lower or "decision" in prompt_lower:
                intent = "decision"
            elif "habit" in prompt_lower or "routine" in prompt_lower:
                intent = "habit"
            elif "remember" in prompt_lower or "fact" in prompt_lower or "apples" in prompt_lower:
                intent = "memory"
                
            return schema_class(intent=intent)
            
        # Default fallback
        logger.warning(f"Unmapped schema {schema_class.__name__} in MockLLM")
        return None

class MockEmbeddingClient:
    """
    Mock Embedding client to generate fake vectors for Pinecone.
    """
    def generate_embedding(self, text: str, dimensions: int = 1536) -> list[float]:
        """
        Generates a deterministic pseudo-random float array based on string length,
        so tests can verify dimension sizes.
        """
        base_val = len(text) / 1000.0
        return [base_val + (i * 0.0001) for i in range(dimensions)]

# Global instances for injection
gpt5_mini = MockLLMClient("gpt-5-mini")
gemini_flash_lite = MockLLMClient("gemini-2.5-flash-lite")
embedder = MockEmbeddingClient()
