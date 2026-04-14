@echo off
echo Starting Memora Ecosystem...

echo Starting Backend (FastAPI)...
start cmd /k "cd backend && pip install -r requirements.txt && python -m uvicorn src.main:app --reload --port 8000"

echo Starting Frontend (React/Vite)...
start cmd /k "npm run dev"

echo Both systems have been launched!
