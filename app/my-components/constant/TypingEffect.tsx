"use client";

import React, { useState, useEffect, useRef } from "react";

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number; // Speed of typing in milliseconds
  deleteSpeed?: number; // Speed of deleting in milliseconds
  delayBetweenTexts?: number; // Delay between typing each text in milliseconds
  className?: string; // Optional CSS class name for the container
  typeClassName?: string; // Optional CSS class name for the typing text
  cursorClassName?: string; // Optional CSS class name for the cursor
  cursor?: string; // Custom cursor character
  startDelay?: number; // Delay before the first text starts typing
}

export const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  typingSpeed = 150, //default
  deleteSpeed = 50, //default
  delayBetweenTexts = 2000, //default
  className,
  typeClassName,
  cursorClassName,
  cursor = "|", // Default cursor if not provided
  startDelay = 500, // Default start delay
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const textRef = useRef<string>("");
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const deleteTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const delayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let initialTimeout: NodeJS.Timeout;

    // Clear all timeouts
    const clearTimeouts = () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      if (deleteTimeoutRef.current) clearTimeout(deleteTimeoutRef.current);
      if (delayTimeoutRef.current) clearTimeout(delayTimeoutRef.current);
    };

    // Function to start the typing effect
    const startTyping = () => {
      clearTimeouts(); // Clear any existing timeouts

      const currentText = texts[currentTextIndex];
      textRef.current = isDeleting
        ? currentText.substring(0, textRef.current.length - 1)
        : currentText.substring(0, textRef.current.length + 1);
      setDisplayedText(textRef.current);

      if (!isDeleting && textRef.current === currentText) {
        setIsDeleting(true);
        delayTimeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenTexts); // Start deleting after delay
      } else if (isDeleting && textRef.current === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }

      const typingSpeedToUse = isDeleting ? deleteSpeed : typingSpeed;

      if (isDeleting) {
        deleteTimeoutRef.current = setTimeout(startTyping, typingSpeedToUse);
      } else {
        typingTimeoutRef.current = setTimeout(startTyping, typingSpeedToUse);
      }
    };

    initialTimeout = setTimeout(startTyping, startDelay);

    // Cleanup function to clear timeouts when the component unmounts or when texts change
    return () => {
      clearTimeouts();
      clearTimeout(initialTimeout);
    };
  }, [
    currentTextIndex,
    isDeleting,
    texts,
    typingSpeed,
    deleteSpeed,
    delayBetweenTexts,
    startDelay,
  ]);

  return (
    <div className={className}>
      <span className={typeClassName}>{displayedText}</span>
      <span
        className={cursorClassName}
        style={{
          display: "inline-block",
          width: "0.05em", // Make it thin
          backgroundColor: "currentColor", // Use the text color
          animation: "blink-animation 1s steps(5, start) infinite",
          verticalAlign: "middle", // Align with the text
          marginLeft: "0.1em", // Add a little space
        }}
      >
        {cursor}
      </span>
      <style jsx global>{`
        @keyframes blink-animation {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </div>
  );
};
