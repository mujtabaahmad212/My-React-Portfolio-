import React, { useRef, useState } from "react";
import "./home.css";
import ClickSpark from "./ClickSpark";
import bgVideo from "../assets/video/my 3d ai video.mp4";

const Home = () => {
  const videoRef = useRef(null);
  const [isFading, setIsFading] = useState(false);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;

    // Trigger smooth fade to black and blur 0.4s before video ends
    if (duration > 0 && duration - currentTime < 0.4) {
      if (!isFading) setIsFading(true);
    } else if (currentTime < 0.3) {
      // Fade back in smoothly right as the video restarts
      if (isFading) setIsFading(false);
    }
  };

  const handleSeekedOrEnded = () => {
    setIsFading(false);
  };

  return (
    <div className="homediv relative w-full h-screen overflow-hidden hide-scrollbar">
      {/* Background 3D AI Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        controlsList="nodownload no-noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
        onTimeUpdate={handleTimeUpdate}
        onSeeked={handleSeekedOrEnded}
        onEnded={handleSeekedOrEnded}
        className={`home-bg-video ${isFading ? "video-blur-effect" : ""}`}
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black fade transition overlay */}
      <div className={`video-loop-fade-overlay ${isFading ? "active" : ""}`} />

      {/* Subtle vignette layer */}
      <div className="home-video-overlay" />

      {/* Interactive spark layer on click */}
      <ClickSpark />
    </div>
  );
};

export default Home;
