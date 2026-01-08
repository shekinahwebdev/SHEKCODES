import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimationQuote from "@/components/AnimationQuote";
import HeroExperience from "@/components/Models/HeroExperience";
const words = [
  "Creativity",
  "Innovation",
  "Design",
  "Problem Solver",
  "Imagination",
];
const desAnimation = {
  backgroundSize: "200% auto",
  animation: "move-bg 6s linear infinite",
  backgroundImage: "linear-gradient(to right, #ffffff, #7a7a7a, #ffffff)", // White -> Indigo -> White
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};
const quote =
  "Great experiences are not simply designed,they are carefully imagined, thoughtfully built, and continuously refined with purpose,empathy, and attention to the smallest details.";
const Home = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => {
        const nextWord = (words.indexOf(prev) + 1) % words.length;
        return words[nextWord];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="px-3 md:px-5">
      <header className="py-6 md:py-7 flex flex-col">
        <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          <div className="overflow-hidden max-w-3xl md:max-w-5xl py-2 flex-col items-center lg:py-4 px-3">
            <h1 className="text-md md:text-xl leading-relaxed max-w-3xl">
              <div className="relative md:h-15 lg:h-14 h-10 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={{ y: "200%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-200%", opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="absolute left-0 font-extrabold text-semi-opaque-blue text-3xl md:text-5xl"
                  >
                    {currentWord}:
                  </motion.span>
                </AnimatePresence>
              </div>
              <span
                style={desAnimation}
                className="text-[15px] md:text-[18px] font-medium"
              >
                is more than colors and code, it's the art of thinking deeply,
                exploring ideas from multiple perspectives, solving problems
                elegantly, and designing digital experiences that not only work
                but truly resonate with people. Every project is a journey where
                imagination meets logic, and attention to detail transforms
                ideas into intuitive interfaces.
              </span>
            </h1>
          </div>
          <figure className="w-full lg:w-1/2 flex justify-center">
            <div className="hero-3d-layout">
              <HeroExperience />
            </div>
          </figure>
        </div>
        <div className="max-w-3xl w-full space-y-4 text-center lg:text-left my-8">
          <h1 className="text-2xl md:text-2xl font-bold leading-tight">
            Hello, I'm Patricia,
          </h1>
          <h1 className="font-header-style lg:text-left mb-5 font-extrabold text-3xl md:text-4xl lg:text-6xl">
            Frontend Developer
          </h1>
        </div>
        <div className="lg:max-w-7xl w-full flex flex-col justify-center items-center text-white my-2 lg:px-3">
          <AnimationQuote text={quote} />
          <Button className=" border-semi-opaque-blue py-6 px-5 bg-linear-to-t from-semi-opaque-blue to-very-dark my-5 border-2">
            Need a site?
          </Button>
        </div>
      </header>
    </section>
  );
};

export default Home;
