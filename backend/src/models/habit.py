from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Text
from sqlalchemy.sql import func
from src.db.postgres import Base

class Habit(Base):
    __tablename__ = "habits"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    name = Column(String, index=True)
    description = Column(Text)
    frequency = Column(String) # daily, weekly
    goal_count = Column(Integer, default=1)
    current_streak = Column(Integer, default=0)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class HabitLog(Base):
    __tablename__ = "habit_logs"

    id = Column(Integer, primary_key=True, index=True)
    habit_id = Column(Integer, ForeignKey("habits.id"))
    completed_at = Column(DateTime(timezone=True), default=func.now())
    notes = Column(Text, nullable=True)
