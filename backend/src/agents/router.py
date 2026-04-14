from pydantic import BaseModel, Field

class IntentClassification(BaseModel):
    intent: str = Field(description="The classified intent of the prompt: 'memory', 'task', 'decision', 'habit', or 'conversation'")

class RouterNode:
    def __init__(self, llm_client):
        self.llm_client = llm_client

    def classify_intent(self, user_input: str) -> IntentClassification:
        """
        Takes user input and classifies it to route it to the appropriate sub-agent.
        """
        # Using structured output mock to extract intent
        result = self.llm_client.generate_structured_response(
            prompt=user_input, 
            schema_class=IntentClassification
        )
        return result
