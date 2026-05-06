"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const directionOffsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionOffsets[direction],
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : directionOffsets[direction].x,
        y: isInView ? 0 : directionOffsets[direction].y,
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // Cinematic ease out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
