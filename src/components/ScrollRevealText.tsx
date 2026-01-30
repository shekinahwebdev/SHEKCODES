import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollRevealText() {
  const containerRef = useRef<HTMLDivElement>(null);

  const text =
    "Driven by curiosity and a love for building, this portfolio highlights my journey as a developer,turning ideas into responsive, scalable, and meaningful digital products.";
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start animation when top of text hits 80% of screen
    // End animation when top of text hits 20% of screen
    offset: ["start 0.9", "start 0.5"],
  });

  // Split text into words to make the animation smoother
  const words = text.split(" ");

  return (
    <div ref={containerRef} className="flex items-center px-10 my-20">
      <p className="lg:text-4xl text-xl text-center w-full max-w-4xl mx-auto leading-[1.2] flex flex-wrap justify-center">
        {words.map((word, i) => {
          // Calculate when this specific word should turn white
          const start = i / words.length;
          const end = start + 1 / words.length;

          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: any;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-20 text-gray-500">{children}</span>
      <motion.span style={{ opacity }} className="text-white">
        {children}
      </motion.span>
    </span>
  );
};
