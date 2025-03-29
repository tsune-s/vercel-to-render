import { useState } from 'react';

export default function Home() {
  const [fileInfo, setFileInfo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://vercel-to-render-backend.onrender.com/upload', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      setFileInfo(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>ファイルアップロード</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" />
        <button type="submit">アップロード</button>
      </form>
      {fileInfo && (
        <div style={{ marginTop: '20px' }}>
          <h2>ファイル情報:</h2>
          <p>ファイル名: {fileInfo.filename}</p>
          <p>ファイルタイプ: {fileInfo.content_type}</p>
          <p>ファイルサイズ: {fileInfo.file_size} バイト</p>
          <p>メッセージ: {fileInfo.message}</p>
        </div>
      )}
    </div>
  );
} 