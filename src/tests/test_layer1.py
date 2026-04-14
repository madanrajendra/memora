import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from src.db.postgres import Base
from src.models.user import User, TierEnum
from src.models.memory import Memory
from src.db.repository import UserRepository, MemoryRepository
from src.db.pinecone import VectorStore

# Use in-memory SQLite for fast isolated testing
engine = create_engine("sqlite:///:memory:", connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

@pytest.fixture(scope="function")
def db_session():
    # Create the tables
    Base.metadata.create_all(bind=engine)
    session = TestingSessionLocal()
    yield session
    # Drop the tables
    session.close()
    Base.metadata.drop_all(bind=engine)

def test_user_creation_default_tier(db_session):
    repo = UserRepository(db_session)
    user = User(oauth_id="test_oauth_123", email="test@memora.ai", name="Test User")
    created_user = repo.create(user)
    
    assert created_user.id is not None
    assert created_user.subscription_tier == TierEnum.Tier_0
    assert created_user.email == "test@memora.ai"

def test_memory_creation_and_retrieval(db_session):
    user_repo = UserRepository(db_session)
    mem_repo = MemoryRepository(db_session)
    
    user = user_repo.create(User(oauth_id="mem_test", email="mem@memora.ai", name="Mem User"))
    
    mem = Memory(
        user_id=user.id,
        vector_id="vec_123",
        original_text="I love learning French",
        extracted_facts='{"fact": "Enjoys French"}',
        importance_score=5
    )
    created_mem = mem_repo.create(mem)
    
    assert created_mem.id is not None
    
    retrieved_mems = mem_repo.get_user_memories(user.id)
    assert len(retrieved_mems) == 1
    assert retrieved_mems[0].vector_id == "vec_123"

def test_vector_store_mock_query():
    store = VectorStore()
    # Ensure it doesn't crash on query when initialized improperly (testing graceful failure)
    result = store.query([0.1, 0.2, 0.3])
    assert "matches" in result
