from pydantic import BaseModel, Field
from typing import List, Optional

class DecisionMatrix(BaseModel):
    pros: List[str] = Field(description="The advantages of taking this path.")
    cons: List[str] = Field(description="The disadvantages of taking this path.")
    recommendation: str = Field(description="The final LLM recommendation based on logical weighing.")

class DecisionAssistant:
    def __init__(self, llm_client):
        self.llm_client = llm_client

    def process(self, decision_query: str) -> DecisionMatrix:
        """
        Structures pros and cons for a given dilemma.
        """
        result = self.llm_client.generate_structured_response(
            prompt=decision_query, 
            schema_class=DecisionMatrix
        )
        return result
