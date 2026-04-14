from fastapi import APIRouter
from fastapi.responses import StreamingResponse
import asyncio

router = APIRouter(prefix="/api/chat", tags=["chat"])

async def mock_streamer(msg: str):
    words = f"Echoing: {msg}".split(" ")
    for word in words:
        yield f"{word} "
        await asyncio.sleep(0.01)

@router.post("")
async def chat_endpoint(message: str):
    return StreamingResponse(mock_streamer(message), media_type="text/plain")
