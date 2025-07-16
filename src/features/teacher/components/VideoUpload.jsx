import React, { useEffect, useState } from "react";
import "./VideoUpload.css";

const LOCAL_STORAGE_KEY = "uploadedVideos";

const VideoUpload = () => {
  const [video, setVideo] = useState(null);
  const [uploadedVideos, setUploadedVideos] = useState([]);

  // ✅ Load videos from localStorage on mount
  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedVideos) {
      setUploadedVideos(storedVideos);
    }
  }, []);

  // ✅ Save to localStorage whenever uploadedVideos changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(uploadedVideos));
  }, [uploadedVideos]);

  const handleChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    if (video) {
      const reader = new FileReader();
      reader.onload = () => {
        const newVideo = {
          name: video.name,
          url: reader.result, // Save base64 instead of object URL
        };

        setUploadedVideos((prev) => [...prev, newVideo]);
        setVideo(null);
      };
      reader.readAsDataURL(video); // convert to base64
    }
  };

  const handleDelete = (index) => {
    const updated = [...uploadedVideos];
    updated.splice(index, 1);
    setUploadedVideos(updated);
  };

  return (
    <div className="video-upload-container">
      <h2>🎥 Teacher Video Upload Portal</h2>

      {/* 📤 Upload Section */}
      <div className="upload-section">
        <h3>📤 Upload New Video</h3>
        <form onSubmit={handleUpload} className="upload-form">
          <input type="file" accept="video/*" onChange={handleChange} required />
          <button type="submit">Upload</button>
        </form>
      </div>

      {/* 🎬 Uploaded Videos Section */}
      <div className="uploaded-section">
        <h3>🎬 Uploaded Videos ({uploadedVideos.length})</h3>
        {uploadedVideos.length === 0 ? (
          <p>No videos uploaded yet.</p>
        ) : (
          <ul className="video-list">
            {uploadedVideos.map((vid, index) => (
              <li key={index} className="video-item">
                <video src={vid.url} controls width="300" />
                <div className="video-details">
                  <p>{vid.name}</p>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 📊 Total Count Display */}
      <div className="summary">
        <strong>Total Videos Uploaded: {uploadedVideos.length}</strong>
      </div>
    </div>
  );
};

export default VideoUpload;
