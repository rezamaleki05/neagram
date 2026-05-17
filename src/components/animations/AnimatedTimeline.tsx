"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface AnimatedTimelineProps {
  steps: Step[];
  className: string;
  lineClassName: string;
  itemClassName: string;
  numClassName: string;
  dotClassName: string;
  contentClassName: string;
}

export default function AnimatedTimeline({
  steps,
  className,
  lineClassName,
  itemClassName,
  numClassName,
  dotClassName,
  contentClassName,
}: AnimatedTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // We use scrollYProgress of the section to animate
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 75%"] // Starts when top of container is at 75% viewport, ends when bottom is at 75%
  });

  // Calculate clipPath to animate from left to right (100% inset on right means hidden)
  const clipRight = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPath = useTransform(clipRight, (val) => `inset(0 ${val}% 0 0)`);

  return (
    <div ref={containerRef} className={className}>
      {/* Background Dim Line - The original one */}
      <div className={lineClassName} />
      
      {/* Glowing Animated Line */}
      <motion.div 
        className={lineClassName}
        style={{
          background: "linear-gradient(90deg, var(--color-purple), var(--color-violet), #c78eff)",
          opacity: 1,
          boxShadow: "0 0 15px rgba(169, 112, 255, 0.8), 0 0 30px rgba(123, 44, 255, 0.5), 0 0 5px #fff",
          zIndex: 0,
          clipPath,
          // height: "2px", // make it slightly thicker if desired
        }}
      />
      
      {steps.map((step, i) => {
        const threshold = i / (steps.length - 1);
        // Step becomes active as the scroll progress approaches its threshold
        // We use a small range around the threshold so it transitions smoothly
        const isActive = useTransform(
          scrollYProgress, 
          [Math.max(0, threshold - 0.1), threshold], 
          [0, 1]
        );
        
        const scale = useTransform(isActive, [0, 1], [1, 1.15]);
        const glowOpacity = useTransform(isActive, [0, 1], [0, 1]);
        const textOpacity = useTransform(isActive, [0, 1], [0.5, 1]);
        // Let's use string hex codes or rgba for color interpolation in Framer Motion
        const numColor = useTransform(isActive, [0, 1], ["rgba(255,255,255,0.3)", "#a970ff"]); // var(--color-violet) approx
        const dotBgColor = useTransform(isActive, [0, 1], ["#1a1a2e", "#7b2cff"]); // var(--color-purple) approx
        
        return (
          <div key={i} className={itemClassName}>
            <motion.div 
              className={numClassName}
              style={{ 
                scale, 
                color: numColor,
                textShadow: useTransform(glowOpacity, [0, 1], ["none", "0 0 20px rgba(169, 112, 255, 0.8)"])
              }}
            >
              {step.num}
            </motion.div>
            
            <motion.div 
              className={dotClassName}
              style={{
                scale,
                backgroundColor: dotBgColor,
                boxShadow: useTransform(glowOpacity, [0, 1], ["none", "0 0 20px rgba(169, 112, 255, 1)"]),
                borderColor: useTransform(isActive, [0, 1], ["rgba(255,255,255,0.1)", "transparent"])
              }}
            />
            
            <motion.div 
              className={contentClassName} 
              style={{ 
                opacity: textOpacity, 
                scale: useTransform(isActive, [0, 1], [0.95, 1]),
                filter: useTransform(glowOpacity, [0, 1], ["brightness(0.7)", "brightness(1.1)"])
              }}
            >
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
            
            {/* Soft glow pulse underneath the step */}
            <motion.div
              style={{
                position: "absolute",
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(123, 44, 255, 0.3) 0%, transparent 70%)",
                filter: "blur(20px)",
                opacity: glowOpacity,
                zIndex: -1,
                pointerEvents: "none"
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
