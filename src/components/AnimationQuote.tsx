import { motion } from "framer-motion";

const AnimationQuote = ({ text }: any) => {
  // Split sentence into words
  const words = text.split("");
  const smoothEase: [number, number, number, number] = [0.4, 0, 0.2, 1];

  // Parent container variant to control stagger
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // delay between each word
      },
    },
  };

  // Each word animation
  const wordVariant = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: smoothEase },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap flex-center justify-center items-center lg:max-w-3xl"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word: any, index: any) => {
        if (word === " ") {
          return <span key={index}>&nbsp;</span>;
        }
        return (
          <motion.span
            key={index}
            className="flex italic text-center"
            variants={wordVariant}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default AnimationQuote;
