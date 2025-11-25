import { scale } from "framer-motion";

export const getContainerVariants = (stagger = 0.3) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

export const getItemVariants = ({
  x = -100,
  opacity = 0,

  duration = 0.5,
} = {}) => ({
  hidden: { opacity, x: x * 4, scale: 0.4 }, // start further away, default -400 if x = -100
  show: {
    opacity: 1,
    x,
    scale: 1,
    transition: {
      duration,
      ease: "easeOut",
    },
  },
});
