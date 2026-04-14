from fastapi import APIRouter

router = APIRouter(prefix="/api/decisions", tags=["decisions"])

decision_db = []

@router.post("")
def create_decision(dilemma: str):
    decision = {"id": len(decision_db) + 1, "dilemma": dilemma}
    decision_db.append(decision)
    return decision

@router.get("")
def list_decisions():
    return decision_db
