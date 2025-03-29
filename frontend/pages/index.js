import { useState } from 'react';

export default function Home() {
  const [filename, setFilename] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('YOUR_RENDER_API_URL/upload', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      setFilename(data.filename);
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
      {filename && <p>アップロードされたファイル: {filename}</p>}
    </div>
  );
} 