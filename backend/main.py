from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORSの設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 本番環境では適切なオリジンを指定してください
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    # ファイルの内容を読み込む
    content = await file.read()
    
    return {
        "filename": file.filename,
        "content_type": file.content_type,
        "file_size": len(content),
        "message": "ファイルを受け取りました"
    } 