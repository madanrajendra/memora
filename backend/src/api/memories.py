from fastapi import APIRouter
from typing import List

router = APIRouter(prefix="/api/memories", tags=["memories"])

# Mock database
memories_db = []

@router.post("")
def create_memory(content: str):
    mem = {"id": len(memories_db) + 1, "content": content}
    memories_db.append(mem)
    return mem

@router.get("")
def list_memories(search: str = ""):
    if search:
        return [m for m in memories_db if search in m["content"]]
    return memories_db
