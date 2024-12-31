import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import CaptionInput from './components/CaptionInput';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState([]);

  const handleAddCaption = (newCaption) => {
    setCaptions([...captions, newCaption]);
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <div className="video-section">
          <input
            type="text"
            placeholder="Enter video URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="video-url-input"
          />
          <VideoPlayer videoUrl={videoUrl} captions={captions} />
        </div>
        <CaptionInput onAddCaption={handleAddCaption} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
