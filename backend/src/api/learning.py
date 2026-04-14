from fastapi import APIRouter, UploadFile, File

router = APIRouter(prefix="/api/learning", tags=["learning"])

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    return {"filename": file.filename, "status": "uploaded"}
