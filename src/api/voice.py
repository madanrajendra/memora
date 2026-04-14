from fastapi import APIRouter, WebSocket

router = APIRouter(prefix="/api/voice", tags=["voice"])

@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            await websocket.send_text(f"Processed audio transcript: {data}")
    except Exception:
        pass
