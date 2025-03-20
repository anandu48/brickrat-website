'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
}

export default function TypewriterText({ text, className = '' }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let isAnimating = true;

    const animateText = async () => {
      while (isAnimating) {
        // Type out
        for (let i = 0; i <= text.length; i++) {
          if (!isAnimating) break;
          setDisplayText(text.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, 100)); // Adjust typing speed here
        }
        await new Promise(resolve => setTimeout(resolve, 1000)); // Pause at the end

        // Delete
        for (let i = text.length; i >= 0; i--) {
          if (!isAnimating) break;
          setDisplayText(text.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, 50)); // Faster deletion
        }
        await new Promise(resolve => setTimeout(resolve, 500)); // Pause before restarting
      }
    };

    animateText();

    return () => {
      isAnimating = false;
    };
  }, [text]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block ml-[1px] w-[2px] h-[1em] bg-current align-middle"
      />
    </span>
  );
} 