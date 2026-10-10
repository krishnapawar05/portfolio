import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const WORDS = ["Build.", "Create.", "Innovate."];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  // Counter using requestAnimationFrame over 2700ms
  useEffect(() => {
    const duration = 2700; // ms
    const startTime = performance.now();

    let animationFrameId: number;
    let completedTimeoutId: ReturnType<typeof setTimeout>;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * 100);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        completedTimeoutId = setTimeout(() => {
          onComplete();
        }, 400);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(completedTimeoutId);
    };
  }, [onComplete]);

  // Rotating words cycling every 900ms
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 sm:p-10 md:p-16 select-none cursor-wait overflow-hidden"
    >
      {/* Top Bar: Top-left "Portfolio" label */}
      <div className="flex items-center justify-between">
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs text-muted uppercase tracking-[0.3em] font-medium"
        >
          Portfolio
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[11px] text-muted/60 tracking-[0.2em] font-mono"
        >
          KRISHNA G. PAWAR
        </motion.span>
      </div>

      {/* Center: Rotating Words */}
      <div className="flex flex-col items-center justify-center my-auto">
        <div className="h-20 sm:h-28 md:h-36 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={WORDS[wordIndex]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-display italic text-text-primary tracking-tight text-center"
            >
              {WORDS[wordIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom area: Counter display on right and Bottom Progress Bar */}
      <div className="flex flex-col gap-6">
        <div className="flex items-end justify-between">
          <div className="text-xs text-muted font-mono tracking-wider opacity-60">
            LOADING EXPERIENCE
          </div>
          {/* Bottom-right Counter display */}
          <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums leading-none">
            {String(count).padStart(3, "0")}
          </div>
        </div>

        {/* Bottom progress bar */}
        <div className="w-full h-[3px] bg-stroke/50 rounded-full overflow-hidden">
          <div
            className="h-full accent-gradient origin-left transition-transform duration-75 ease-out rounded-full"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};
