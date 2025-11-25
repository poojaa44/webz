// app/loading.tsx
"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const dot: Variants = {
  hidden: { y: 0, opacity: 0.4 },
  show: {
    y: -12,
    opacity: 1,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* subtle glow ring */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex h-40 w-40 items-center justify-center rounded-full border border-neutral-800/70 bg-neutral-950/60 shadow-[0_0_80px_rgba(0,0,0,0.9)]"
      >
        {/* pulsing gradient core */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0.7 }}
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="absolute h-24 w-24 rounded-full bg-gradient-to-tr from-emerald-400 via-cyan-400 to-fuchsia-500 blur-sm"
        />

        {/* spinning ring */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute h-32 w-32 rounded-full border-t-2 border-emerald-400/80 border-r-2 border-fuchsia-500/60 border-b-2 border-transparent border-l-2 border-transparent"
        />

        {/* bouncing dots */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              variants={dot}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.1,
              }}
              className="h-2 w-2 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.8)]"
            />
          ))}
        </motion.div>

        {/* bottom label */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 0.8 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="absolute -bottom-10 text-xs font-medium tracking-[0.25em] uppercase text-neutral-400"
        >
          Loading
        </motion.div>
      </motion.div>
    </div>
  );
}
