from pydantic import BaseModel, Field
from typing import List, Optional

class SubTask(BaseModel):
    title: str = Field(description="The title of the action item.")
    due_date: Optional[str] = Field(None, description="ISO-8601 date string if a deadline is mentioned.")

class TaskDecomposition(BaseModel):
    response: str = Field(description="The conversational response confirming the tasks.")
    tasks: List[SubTask] = Field(description="The broken down list of actions.")

class PersonalTaskAgent:
    def __init__(self, llm_client):
        self.llm_client = llm_client

    def process(self, user_input: str) -> TaskDecomposition:
        """
        Parses action items and schedules from the user input.
        """
        result = self.llm_client.generate_structured_response(
            prompt=user_input, 
            schema_class=TaskDecomposition
        )
        return result
