from sqlalchemy import Column, Integer, String, Enum, DateTime
from sqlalchemy.sql import func
import enum
from src.db.postgres import Base

class TierEnum(enum.Enum):
    Tier_0 = "Tier_0"
    Tier_1 = "Tier_1"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    oauth_id = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    name = Column(String)
    subscription_tier = Column(Enum(TierEnum), default=TierEnum.Tier_0)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Preferences can be stored as JSON string/JSONB depending on DB
    preferences = Column(String, default="{}") 
