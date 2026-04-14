from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Text
from sqlalchemy.sql import func
from src.db.postgres import Base

class Memory(Base):
    __tablename__ = "memories"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    vector_id = Column(String, unique=True, index=True) # ID mapping to Pinecone
    original_text = Column(Text)
    extracted_facts = Column(Text) # Stored as JSON string
    importance_score = Column(Integer, default=1)
    status = Column(String, default="active") # active, archived (Tier 1 logic)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
