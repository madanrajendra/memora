import pytest
from src.services.llm import gpt5_mini, gemini_flash_lite
from src.agents.router import RouterNode
from src.agents.memory_agent import PersonalMemoryAgent
from src.agents.task_agent import PersonalTaskAgent
from src.agents.decision_assistant import DecisionAssistant
from src.agents.habit_reflector import HabitReflector

def test_intent_router():
    router = RouterNode(llm_client=gpt5_mini)
    
    # Mock LLM keyword matches for intent prediction
    assert router.classify_intent("remind me to wash the car").intent == "task"
    assert router.classify_intent("help me make a decision on buying a house").intent == "decision"
    assert router.classify_intent("I want to build a reading habit").intent == "habit"
    assert router.classify_intent("I really like apples").intent == "memory"
    
def test_memory_agent():
    agent = PersonalMemoryAgent(llm_client=gemini_flash_lite)
    result = agent.process("Some info to extract")
    assert result.response == "I've noted that down for you."
    assert "Important fact extracted." in result.extracted_memories

def test_task_agent():
    agent = PersonalTaskAgent(llm_client=gpt5_mini)
    result = agent.process("Task request")
    assert result.response == "I've broken this down into tasks."
    assert len(result.tasks) > 0
    assert result.tasks[0].title == "Initial planned task"

def test_decision_assistant():
    agent = DecisionAssistant(llm_client=gpt5_mini)
    result = agent.process("Dilemma text")
    assert "Advantage 1" in result.pros
    assert "Disadvantage 1" in result.cons

def test_habit_reflector():
    agent = HabitReflector(llm_client=gemini_flash_lite)
    result = agent.process("Log stuff")
    assert "morning routine" in result.insight
