"use client";
import { useEffect, useRef, useState } from 'react';
import { MdOutlineReplay } from "react-icons/md";
import { IoMdVolumeMute } from "react-icons/io";
import { IoVolumeMute } from "react-icons/io5";

const AutoPlayVideo = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = () => {
      if (video && video.paused) {
        video.play().catch(error => {
          console.error('Error trying to play video:', error);
        });
      }
    };

    // Try to play the video on mount
    playVideo();

    // Add event listener to ensure video plays when in view
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        playVideo();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleMuteToggle = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleVideoEnded = () => {
    setIsEnded(true);
    const video = videoRef.current;
    video.currentTime = video.duration;
  };

  const handleRestart = () => {
    const video = videoRef.current;
    video.currentTime = 0;
    setIsEnded(false);
    video.play();
  };

  return (
    <div className="video-container relative">
      <video
        ref={videoRef}
        src="/assets/video/INICIO.mp4"
        autoPlay
        muted={isMuted}
        playsInline
        loop={false}
        onEnded={handleVideoEnded}
        className="your-custom-class w-full"
      />
      <button
        onClick={handleMuteToggle}
        className="mute-button absolute top-4 left-4 p-2 rounded bg-[#7A9285] hover:bg-[#202723] m-auto"
      >
         {isMuted ? <IoVolumeMute size={24} /> : <IoMdVolumeMute size={24} />}
      </button>
      {isEnded && (
        <button
          onClick={handleRestart}
          className="restart-button absolute top-4 right-4 bg-[#7A9285] hover:bg-[#202723] p-2 rounded text-white text-[24px] font-bold "
        >
          <MdOutlineReplay />
        </button>
      )}
    </div>
  );
};

export default AutoPlayVideo;
