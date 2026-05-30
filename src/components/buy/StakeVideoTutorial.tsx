"use client";

import { useState, useRef, useEffect } from "react";
import RevealAnimation from "../animation/RevealAnimation";

const StakeVideoTutorial = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [controlsTimeout, setControlsTimeout] = useState<NodeJS.Timeout | null>(null);

  // Auto-hide controls when mouse is idle
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeout) clearTimeout(controlsTimeout);
    
    const timeout = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 2500);
    setControlsTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (controlsTimeout) clearTimeout(controlsTimeout);
    };
  }, [controlsTimeout]);

  // Video Actions
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleScrub = (value: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (nextMuted) {
      setVolume(0);
    } else {
      setVolume(videoRef.current.volume || 1);
    }
  };

  const handleVolumeChange = (value: number) => {
    if (!videoRef.current) return;
    videoRef.current.volume = value;
    setVolume(value);
    setIsMuted(value === 0);
  };

  const toggleFullscreen = () => {
    const container = videoRef.current?.parentElement;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen:", err);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "00:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full mt-20 pb-10 relative">
      {/* Golden Spotlights/Ambient Glows */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-ns-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <RevealAnimation delay={0.1}>
        <div className="relative overflow-hidden bg-[#13171E]/40 dark:bg-background-8/40 backdrop-blur-xl border border-stroke-2 dark:border-stroke-6/80 rounded-[32px] p-6 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
          {/* Header */}
          <div className="text-center mb-8 relative z-10">
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Staking Video Guide</h2>
            <p className="text-gray-400 text-sm max-w-lg mx-auto">
              Watch our step-by-step video to learn how to stake your tokens and claim rewards.
            </p>
          </div>

          {/* Video Player */}
          <div className="max-w-4xl mx-auto relative group/player rounded-2xl overflow-hidden border border-stroke-2 dark:border-[#202731] bg-[#070b10] shadow-2xl transition-all duration-500 hover:border-primary-500/30">
            {/* Golden Ambient Blur Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/10 to-ns-yellow/10 rounded-2xl blur-xl opacity-40 group-hover/player:opacity-70 transition duration-500" />
            
            {/* Aspect Ratio Container for Video */}
            <div 
              className="relative aspect-video w-full h-full bg-black z-10 flex items-center justify-center cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => isPlaying && setShowControls(false)}
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src="/assets/staking-guide.mp4"
                className="w-full h-full object-cover"
                loop
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
              />

              {/* Glowing Overlay on Hover / Pause */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 transition-opacity duration-300 ${isPlaying && !showControls ? "opacity-0 pointer-events-none" : "opacity-100"}`} />

              {/* Big Play Button in center */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-500 hover:bg-primary-600 text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(233,153,43,0.5)] transition-all duration-300 transform scale-100 hover:scale-110 pointer-events-auto">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-white fill-current ml-1.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Custom Control Bar (Glassmorphic) */}
              <div 
                onClick={(e) => e.stopPropagation()}
                className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 transition-all duration-300 z-20 flex flex-col gap-3 ${
                  showControls || !isPlaying ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                {/* Progress bar */}
                <div className="flex items-center gap-3 w-full">
                  <span className="text-[11px] font-mono text-gray-300 select-none">
                    {formatTime(currentTime)}
                  </span>
                  
                  <div className="relative flex-grow group/slider h-2 flex items-center cursor-pointer">
                    <input
                      type="range"
                      min={0}
                      max={duration || 100}
                      value={currentTime}
                      onChange={(e) => handleScrub(parseFloat(e.target.value))}
                      className="absolute inset-0 w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary-500 focus:outline-none group-hover/slider:h-1.5 transition-all"
                      style={{
                        background: `linear-gradient(to right, var(--color-primary-500) 0%, var(--color-primary-500) ${
                          (currentTime / (duration || 1)) * 100
                        }%, rgba(255, 255, 255, 0.2) ${
                          (currentTime / (duration || 1)) * 100
                        }%, rgba(255, 255, 255, 0.2) 100%)`
                      }}
                    />
                  </div>

                  <span className="text-[11px] font-mono text-gray-300 select-none">
                    {formatTime(duration)}
                  </span>
                </div>

                {/* Buttons controls */}
                <div className="flex items-center justify-between w-full mt-1">
                  <div className="flex items-center gap-4">
                    {/* Play/Pause */}
                    <button 
                      onClick={togglePlay}
                      className="text-white hover:text-primary-500 transition-colors p-1"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>

                    {/* Mute/Volume */}
                    <div className="flex items-center gap-2 group/volume">
                      <button 
                        onClick={toggleMute}
                        className="text-white hover:text-primary-500 transition-colors p-1"
                        title={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? (
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-11 5.77v6h4l5 5v-16l-5 5h-4z" className="opacity-40" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5v-16l-5 5h-4zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                          </svg>
                        )}
                      </button>
                      
                      <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.05}
                        value={isMuted ? 0 : volume}
                        onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                        className="w-0 overflow-hidden group-hover/volume:w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary-500 focus:outline-none transition-all duration-300"
                        style={{
                          background: `linear-gradient(to right, var(--color-primary-500) 0%, var(--color-primary-500) ${
                            (isMuted ? 0 : volume) * 100
                          }%, rgba(255, 255, 255, 0.2) ${
                            (isMuted ? 0 : volume) * 100
                          }%, rgba(255, 255, 255, 0.2) 100%)`
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button 
                      onClick={toggleFullscreen}
                      className="text-white hover:text-primary-500 transition-colors p-1"
                      title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                    >
                      {isFullscreen ? (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </div>
  );
};

export default StakeVideoTutorial;
