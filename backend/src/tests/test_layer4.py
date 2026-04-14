from fastapi.testclient import TestClient
from src.main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200

def test_memories_crud():
    res = client.post("/api/memories?content=Testing Memory")
    assert res.status_code == 200
    assert res.json()["content"] == "Testing Memory"
    
    res_list = client.get("/api/memories")
    assert len(res_list.json()) > 0

def test_habits_crud():
    res = client.post("/api/habits?name=Drink Water")
    assert res.status_code == 200
    
    res_list = client.get("/api/habits")
    assert len(res_list.json()) > 0

def test_decisions_crud():
    res = client.post("/api/decisions?dilemma=Buy a car")
    assert res.status_code == 200
    
    res_list = client.get("/api/decisions")
    assert len(res_list.json()) > 0

def test_learning_upload():
    # Simple form data mock
    files = {'file': ('test.txt', b'test content', 'text/plain')}
    res = client.post("/api/learning/upload", files=files)
    assert res.status_code == 200
    assert res.json()["filename"] == "test.txt"

def test_chat_streaming():
    res = client.post("/api/chat?message=hello")
    assert res.status_code == 200
    assert "Echoing: hello" in res.text

def test_voice_websocket():
    with client.websocket_connect("/api/voice/ws") as websocket:
        websocket.send_text("Hello text")
        data = websocket.receive_text()
        assert "Processed audio transcript" in data
