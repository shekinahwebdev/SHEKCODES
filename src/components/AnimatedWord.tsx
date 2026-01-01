import { motion } from "framer-motion";

interface AnimatedWordProps {
  text: string;
}

export default function AnimatedWord({ text }: AnimatedWordProps) {
  return (
    <motion.h1
      className="hero-text"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letter}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const letter = {
  hidden: {
    opacity: 0,
    x: -80,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: smoothEase,
    },
  },
};
