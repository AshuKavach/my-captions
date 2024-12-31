import React, { useRef, useEffect, useState } from 'react';
import '../styles/VideoPlayer.css';

function VideoPlayer({ videoUrl = '', captions = [] }) {
  const videoRef = useRef(null);
  const [currentCaption, setCurrentCaption] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        const currentTime = videoRef.current.currentTime;
        const matchingCaption = captions.find(
          (caption) =>
            currentTime >= caption.startTime && currentTime <= caption.endTime
        );
        setCurrentCaption(matchingCaption?.text || '');
      }
    }, 500);

    return () => clearInterval(interval);
  }, [captions]);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-player">
      {videoUrl ? (
        <>
          <video
            ref={videoRef}
            src={videoUrl}
            controls
            onError={() => alert('Error: Unable to load the video. Please check the URL and try again.')}
          />
          <div className="controls">
            <button onClick={handlePlay} disabled={isPlaying}>
              Play
            </button>
            <button onClick={handlePause} disabled={!isPlaying}>
              Pause
            </button>
          </div>
        </>
      ) : (
        <p className="placeholder">Enter a video URL above to load the video.</p>
      )}
      {currentCaption && <div className="caption-overlay">{currentCaption}</div>}
    </div>
  );
}

export default VideoPlayer;
