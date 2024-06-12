"use client";
import React, { useRef, useState } from 'react';
import { MdOutlineReplay } from "react-icons/md";

const Video = ({ src }) => {
  const videoRef = useRef(null);
  const [showRepeatButton, setShowRepeatButton] = useState(false);

  const handleVideoEnd = () => {
    setShowRepeatButton(true);
  };

  const handleRepeat = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setShowRepeatButton(false);
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        controls={false}
        onEnded={handleVideoEnd}
      />
      {showRepeatButton && (
        <button onClick={handleRepeat} className="repeat-button">
          <MdOutlineReplay className='text-white'/>
        </button>
      )}
    </div>
  );
};

export default Video;
