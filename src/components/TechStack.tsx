import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiFramer,
  SiGit,
  SiVite,
  SiRedux,
  SiInsomnia,
  SiReactrouter,
} from "react-icons/si";

const TechStack = () => {
  // Inner Circle: Fundamentals
  const coreStack = [
    { icon: <SiHtml5 />, color: "#E34F26", name: "HTML" },
    { icon: <SiCss3 />, color: "#1572B6", name: "CSS" },
    { icon: <SiJavascript />, color: "#F7DF1E", name: "JS" },
    { icon: <SiTailwindcss />, color: "#06B6D4", name: "Tailwind" },
  ];

  // Outer Circle: Frameworks & Tools
  const toolStack = [
    { icon: <SiReact />, color: "#61DAFB", name: "React" },
    { icon: <SiRedux />, color: "#764ABC", name: "Redux" },
    { icon: <SiReactrouter />, color: "#CA4245", name: "React Router" },
    { icon: <SiTypescript />, color: "#3178C6", name: "TS" },
    { icon: <SiFramer />, color: "#0055FF", name: "Framer" },
    { icon: <SiGit />, color: "#F05032", name: "Git" },
    { icon: <SiVite />, color: "#646CFF", name: "Vite" },
    { icon: <SiInsomnia />, color: "#4640B7", name: "REST API" },
  ];

  return (
    <section className="py-20 bg-very-dark overflow-hidden flex flex-col items-center justify-center">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          My Tech Orbit
        </h2>
        <p className="text-gray-400">The tools I use to bring ideas to life.</p>
      </div>

      {/* Orbit Container */}
      <div className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
        <div className="z-20 w-16 h-16 md:w-24 md:h-24 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center backdrop-blur-xl shadow-[0_0_50px_rgba(59,130,246,0.3)]">
          <span className="text-white font-bold text-xl">DEV</span>
        </div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] rounded-full border border-white/5"
        >
          {coreStack.map((tech, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `rotate(${
                  i * (360 / coreStack.length)
                }deg) translateX(${140}px) rotate(-${
                  i * (360 / coreStack.length)
                }deg)`,
              }}
            >
              <div
                className="p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md text-2xl md:text-3xl"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>
            </div>
          ))}
        </motion.div>

        {/* OUTER CIRCLE (Slow Counter-Clockwise) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full border border-white/5"
        >
          {toolStack.map((tech, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `rotate(${
                  i * (360 / toolStack.length)
                }deg) translateX(${240}px) rotate(-${
                  i * (360 / toolStack.length)
                }deg)`,
              }}
            >
              <div
                className="p-2 md:p-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md text-xl md:text-2xl opacity-80 hover:opacity-100 transition-opacity"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <p className="mt-12 text-xs text-gray-500 font-mono uppercase tracking-widest md:hidden">
        Core Fundamentals • Professional Tools
      </p>
    </section>
  );
};

export default TechStack;
