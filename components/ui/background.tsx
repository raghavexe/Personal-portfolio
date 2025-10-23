"use client";
import { motion } from "motion/react";

export function FloatingOrbsBackground() {
  const orbs = Array.from({ length: 7 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {orbs.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-purple-500/20 via-pink-400/20 to-blue-500/20 blur-3xl"
          style={{
            width: 250,
            height: 250,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 80 - 40, 0],
            y: [0, Math.random() * 80 - 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-50 dark:to-zinc-950 pointer-events-none" />
    </div>
  );
}
