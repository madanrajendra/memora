from sqlalchemy.orm import Session
from src.models.user import User
from src.models.memory import Memory

class UserRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_by_id(self, user_id: int):
        return self.db.query(User).filter(User.id == user_id).first()

    def create(self, user: User):
        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)
        return user

class MemoryRepository:
    def __init__(self, db: Session):
        self.db = db

    def create(self, memory: Memory):
        self.db.add(memory)
        self.db.commit()
        self.db.refresh(memory)
        return memory

    def get_user_memories(self, user_id: int, limit: int = 50):
        return self.db.query(Memory).filter(
            Memory.user_id == user_id, 
            Memory.status == "active"
        ).limit(limit).all()

    def get_by_vector_id(self, vector_id: str):
        return self.db.query(Memory).filter(Memory.vector_id == vector_id).first()
