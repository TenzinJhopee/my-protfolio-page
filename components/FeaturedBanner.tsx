"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FeaturedBanner: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.2;
    audioRef.current.loop = true;

    // Try to autoplay but catch any errors
    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        // Autoplay blocked, wait for user interaction
        setPlaying(false);
      });
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          console.warn("Audio cannot autoplay. User interaction required.");
          setPlaying(false);
        });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        src="/videos/202877-919288692_small.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Tenzin Chabdeltsang
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-sm sm:text-lg md:text-2xl text-white/90"
        >
          Software Developer · Data Scientist · Problem Solver
        </motion.p>

        {/* Audio Toggle */}
        <button
          onClick={toggleAudio}
          className="mt-6 px-5 py-2 bg-white/20 hover:bg-white/40 text-white rounded-full"
        >
          {playing ? "Mute Music" : "Play Music"}
        </button>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src="/audio/banner.mp3" preload="auto" />
    </section>
  );
};

export default FeaturedBanner;
