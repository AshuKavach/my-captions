import React, { useState } from 'react';
import '../styles/CaptionInput.css';

function CaptionInput({ onAddCaption }) {
  const [caption, setCaption] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (caption && startTime && endTime) {
      onAddCaption({
        text: caption,
        startTime: parseFloat(startTime),
        endTime: parseFloat(endTime),
      });
      setCaption('');
      setStartTime('');
      setEndTime('');
    }
  };

  return (
    <form className="caption-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Caption text"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Start time (seconds)"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="End time (seconds)"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        required
      />
      <button type="submit">Add Caption</button>
    </form>
  );
}

export default CaptionInput;
