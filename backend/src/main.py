from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.api.chat import router as chat_router
from src.api.memories import router as memories_router
from src.api.learning import router as learning_router
from src.api.habits import router as habits_router
from src.api.decisions import router as decisions_router
from src.api.voice import router as voice_router

app = FastAPI(title="Memora Layer 4 API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

app.include_router(chat_router)
app.include_router(memories_router)
app.include_router(learning_router)
app.include_router(habits_router)
app.include_router(decisions_router)
app.include_router(voice_router)

@app.get("/")
def root():
    return {"status": "ok"}
