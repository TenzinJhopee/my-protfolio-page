"use client";

import { useEffect, useState, useRef } from "react";
import useSound from "use-sound";

interface TypingTextProps {
  text: string;
  speed?: number; // milliseconds per character
  playSound?: boolean; // optional sound during typing
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed = 100, playSound = false }) => {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0); // current typing index
  const hasTyped = useRef(false); // ensures only once
  const [play] = useSound("/sounds/typing.mp3", { volume: 0.2, interrupt: true });

  useEffect(() => {
    if (hasTyped.current) return;

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(indexRef.current));
      if (playSound) play(); // optional sound
      indexRef.current += 1;

      if (indexRef.current >= text.length) {
        clearInterval(interval);
        hasTyped.current = true;
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, play, playSound]);

  return (
    <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
      {displayedText}
      <span className="inline-block w-1 h-6 bg-black dark:bg-zinc-50 ml-1 animate-blink"></span>
    </h1>
  );
};

export default TypingText;
