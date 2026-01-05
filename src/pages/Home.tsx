import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimationQuote from "@/components/AnimationQuote";
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
  backgroundImage: "linear-gradient(to right, #ffffff, #143296cc, #ffffff)", // White -> Indigo -> White
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};
const quote =
  "Great experiences are not simply designed,they are carefully imagined, thoughtfully built, and continuously refined with purpose,empathy, and attention to the smallest details. They emerge from curiosity, patience, and a deep understanding of both the problem and the people it serves";
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
    <section className="px-3 md:px-5 lg:px-10">
      <header className="py-6 md:py-7 lg:py-10 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="overflow-hidden max-w-3xl md:max-w-4xl py-2 flex-col items-center px-3 lg:py-4">
            <h1 className="text-md md:text-xl leading-relaxed max-w-3xl">
              <div className="relative lg:h-14 h-10 overflow-hidden">
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
                    className="absolute left-0 font-bold bg-linear-to-r from-white to-semi-opaque-blue bg-clip-text text-transparent text-2xl md:text-5xl"
                  >
                    {currentWord}:
                  </motion.span>
                </AnimatePresence>
              </div>
              <span
                style={desAnimation}
                className="text-[15px] md:text-[18px] bg-gradient-to-r from-white via-indigo-300 to-white bg-clip-text text-transparent animated-gradient font-medium"
              >
                is more than colors and code, it's the art of thinking deeply,
                exploring ideas from multiple perspectives, solving problems
                elegantly, and designing digital experiences that not only work
                but truly resonate with people. Every project is a journey where
                imagination meets logic, and attention to detail transforms
                ideas into intuitive interfaces.
              </span>
            </h1>
            <h1 className="text-4xl hidden lg:flex md:text-5xl font-bold text-white leading-tight">
              Hello, I'm Patricia a,
            </h1>
          </div>
          <div className="py-3 my-2">
            <div className="w-full 3d-animate max-w-[500px] lg:max-w-[800px] bg-semi-opaque-very-dark-blue">
              <img
                src="/assets/portfolio_image/shekcodes.png"
                className="w-full max-w-[400px]"
              />
            </div>
          </div>
        </div>
        <div className="text-center lg:ml-3 py-3 flex flex-col items-center">
          <h1 className="text-2xl lg:hidden  md:text-5xl font-bold text-white leading-tight">
            Hello, I'm Patricia a,
          </h1>
          <h1 className="font-header-style italic mb-5 font-extrabold text-3xl md:text-4xl lg:text-5xl">
            Frontend Developer
          </h1>
          <Button className="bg-semi-opaque-blue px-10 py-6 my-3">
            Need a site?
          </Button>
          <p className="lg:max-w-5xl text-white my-2">
            <AnimationQuote text={quote} />
          </p>
        </div>
      </header>
    </section>
  );
};

export default Home;
