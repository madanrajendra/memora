from pydantic import BaseModel, Field

class HabitInsight(BaseModel):
    insight: str = Field(description="Behavioral insight about the user's habit streaks.")
    suggested_adjustment: str = Field(description="Suggested plan or change.")

class HabitReflector:
    def __init__(self, llm_client):
        self.llm_client = llm_client

    def process(self, habit_logs: str) -> HabitInsight:
        """
        Takes raw string data of past habit logs and outputs an actionable insight.
        """
        result = self.llm_client.generate_structured_response(
            prompt=habit_logs, 
            schema_class=HabitInsight
        )
        return result
