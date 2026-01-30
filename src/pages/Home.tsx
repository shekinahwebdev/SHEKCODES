import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimationQuote from "@/components/AnimationQuote";
import HeroExperience from "@/components/Models/HeroExperience";
import { BiFingerprint } from "react-icons/bi";
import FloatingCardsHero from "@/components/FloatingCards";

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
const Home = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const quote1 =
    "We create digital experiences that don’t just exist on the screen, but live in motion and meaning.";
  const quote2 =
    "We design experiences that move smoothly, intelligently, and with purpose.";
  const quote3 = "Refined. Responsive. Remarkable!";
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
    <section className="min-h-full">
      <header className="py-6 md:py-7 flex flex-col relative overflow-hidden">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12">
          <div className="w-full lg:w-1/2 max-w-3xl md:max-w-7xl py-2 flex flex-col lg:px-10 lg:py-4 px-3">
            <h1 className="text-md md:text-xl leading-relaxed max-w-3xl">
              <div className="relative min-h-14 md:min-h-18 lg:min-h-20 overflow-hidden">
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
        <div className="max-w-3xl px-3 w-full space-y-4 text-center lg:text-left my-8">
          <h1 className="text-2xl md:text-2xl font-bold leading-tight">
            Hello, I'm Patricia,
          </h1>
          <h1 className="font-header-style lg:text-left mb-5 font-extrabold text-3xl md:text-4xl lg:text-6xl">
            Frontend Developer
          </h1>
        </div>
        <div className="w-full text-center flex flex-col justify-center items-center text-white my-2 lg:px-3 pb-45">
          <AnimationQuote text={quote1} />
          <AnimationQuote text={quote2} />
          <AnimationQuote text={quote3} />
        </div>
        <div className="glow-wrapper">
          <div className="glow-arc"></div>
        </div>
        <div className="header-blend" />
      </header>
      <section className="flex flex-col items-center justify-center h-[60vh] border-t-2 border-b-2 border-semi-opaque-very-dark-blue">
        <div className="relative">
          <Button className="relative border border-semi-opaque-very-dark-blue py-6 bg-linear-to-t rounded-full from-semi-opaque-blue via-transparent to-ui-background my-5">
            <div className="flex items-center justify-center p-2 bg-ui-background rounded-full border-semi-opaque-very-dark-blue border">
              <BiFingerprint size={90} />
            </div>
            <p> About Me</p>
          </Button>
        </div>

        <div className="flex items-center px-10 my-5">
          <p className="lg:text-4xl text-2xl text-center w-full max-w-272.5 leading-[1.2]">
            Built on creativity, collaboration, and top excellence, SYNC is a
            dynamic team of industry experts committed to achieving exceptional
            great results...
          </p>
        </div>
        <Button className=" border-semi-opaque-blue py-6 px-5 bg-linear-to-t from-semi-opaque-blue to-very-dark my-5 border-2">
          Book an appointment?
        </Button>
      </section>
      <FloatingCardsHero />
    </section>
  );
};

export default Home;
