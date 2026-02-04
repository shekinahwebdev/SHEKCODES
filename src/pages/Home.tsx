import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimationQuote from "@/components/AnimationQuote";
import HeroExperience from "@/components/Models/HeroExperience";
import { BiFingerprint } from "react-icons/bi";
import FloatingCardsHero from "@/components/FloatingCards";
import ExperienceSection from "@/components/MyExperience";
import TechStack from "@/components/TechStack";
import ScrollRevealText from "@/components/ScrollRevealText";
import { Link } from "react-router-dom";
import AIToolGrid from "@/components/AiTools";

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
    <section className="min-h-screen">
      <header className="relative min-h-screen flex flex-col justify-center py-12 md:py-20 overflow-hidden bg-ui-background">
        <div className="glow-wrapper opacity-50 pointer-events-none">
          <div className="glow-arc"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-2"
              >
                <h2 className="text-xl md:text-2xl font-medium text-blue-400 font-mono">
                  Hello, I'm Patricia
                </h2>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white">
                  Frontend Developer
                </h1>
              </motion.div>

              <div className="max-w-2xl">
                <div className="relative h-12 md:h-16 overflow-hidden mb-4">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWord}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute left-0 font-bold text-semi-opaque-blue text-3xl md:text-4xl uppercase tracking-widest"
                    >
                      {currentWord}:
                    </motion.span>
                  </AnimatePresence>
                </div>

                <motion.p
                  style={desAnimation}
                  className="text-gray-400 text-lg md:text-xl leading-relaxed font-light border-l-2 border-white/10 pl-6"
                >
                  is more than colors and code. It's the art of thinking deeply,
                  solving problems elegantly, and designing digital experiences
                  that truly resonate with people.
                </motion.p>
              </div>
            </div>

            <motion.figure
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="hero-3d-layout relative group">
                <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full group-hover:bg-blue-500/30 transition-colors" />
                <HeroExperience />
              </div>
            </motion.figure>
          </div>

          <div className="mt-24 w-full border-t border-white/5 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
              <AnimationQuote text={quote1} />
              <div className="hidden md:block w-px h-4 bg-white/20" />
              <AnimationQuote text={quote2} />
              <div className="hidden md:block w-px h-4 bg-white/20" />
              <AnimationQuote text={quote3} />
            </div>
          </div>
        </div>

        <div className="header-blend absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-ui-background to-transparent" />
      </header>
      <section className="flex pt-5 flex-col items-center justify-center h-[70vh] border-t-2 border-b-2 border-semi-opaque-very-dark-blue">
        <div className="relative">
          <Link to="/about">
            <Button className="relative border border-semi-opaque-very-dark-blue py-6 bg-linear-to-t rounded-full from-semi-opaque-blue via-transparent to-ui-background my-5">
              <div className="flex items-center justify-center p-2 bg-ui-background rounded-full border-semi-opaque-very-dark-blue border">
                <BiFingerprint size={90} />
              </div>
              <p> About Me</p>
            </Button>
          </Link>
        </div>
        <ScrollRevealText />
        <Link to="/contact">
          <Button className=" border-semi-opaque-blue py-6 px-5 bg-linear-to-t from-semi-opaque-blue to-very-dark my-5 border-2">
            Book an appointment
          </Button>
        </Link>
      </section>
      <FloatingCardsHero />
      <ExperienceSection />
      <TechStack />
      <AIToolGrid />
    </section>
  );
};

export default Home;
