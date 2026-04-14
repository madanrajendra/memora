from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Text
from sqlalchemy.sql import func
from src.db.postgres import Base

class LearningItem(Base):
    __tablename__ = "learning_items"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String, index=True)
    item_type = Column(String) # file, link, note
    source_uri = Column(String) # S3 url or web link
    summary = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
