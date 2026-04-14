from fastapi import APIRouter

router = APIRouter(prefix="/api/habits", tags=["habits"])

habit_db = []

@router.post("")
def create_habit(name: str):
    habit = {"id": len(habit_db) + 1, "name": name}
    habit_db.append(habit)
    return habit

@router.get("")
def list_habits():
    return habit_db
