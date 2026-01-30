import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { BiFingerprint } from "react-icons/bi";
import { portfolioData } from "@/lib/data";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FloatingCardsHero() {
  const [orbitRadius, setOrbitRadius] = useState(300);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 640) setOrbitRadius(200);
      else if (width < 768) setOrbitRadius(280);
      else if (width < 1024) setOrbitRadius(350);
      else if (width < 1280) setOrbitRadius(450);
      else setOrbitRadius(330);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className="relative min-h-screen border-b-2 border-semi-opaque-very-dark-blue bg-linear-to-t from-semi-opaque-very-dark-blue via-transparent to-ui-background flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
            opacity: 1;
            z-index: 10;
          }
          30% {
             opacity: 1;
             z-index: 10;
          }
          49% {
             opacity: 0;
             z-index: 0;
          }
          51% {
             opacity: 0;
             z-index: 0;
          }
          70% {
             opacity: 1;
             z-index: 10;
          }
          100% {
            transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
            opacity: 1;
            z-index: 10;
          }
        }

        .orbit-card {
          /* Hardware acceleration to prevent freezing */
          will-change: transform, opacity;
          animation: orbit 30s linear infinite;
          /* Calculated delay keeps them spaced out perfectly */
          animation-delay: calc(var(--index) * (30s / var(--total)) * -1);
        }
        
        /* Pause animation on hover if desired */
        .orbit-container:hover .orbit-card {
           animation-play-state: paused;
        }
      `}</style>

      {/* Animation Container */}
      <div className="orbit-container absolute inset-0 flex items-center justify-center">
        {portfolioData.map((project, index) => (
          <div
            key={index}
            className="orbit-card absolute flex justify-center items-center pointer-events-auto" // Added pointer-events-auto
            style={{
              // @ts-ignore
              "--orbit-radius": `${orbitRadius}px`,
              "--index": index,
              "--total": portfolioData.length,
              width: "clamp(60px, 18vw, 120px)",
              height: "clamp(60px, 18vw, 120px)",
            }}
          >
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-inner w-full h-full relative cursor-pointer"
              whileHover={{ scale: 1.2, zIndex: 50 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={project.img}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover rounded-[20%] border-2 border-white/10 hover:border-blue-500/50 transition-colors"
                style={{
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                  transform: "translateZ(0)",
                }}
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                View Live
              </div>
            </motion.a>
          </div>
        ))}
      </div>

      <div className="relative z-20 text-center px-4 py-10 sm:px-6 max-w-4xl mx-auto translate-y-8 md:translate-y-0 pointer-events-none">
        <div className="pointer-events-auto">
          <div className="relative inline-block">
            <Button className="relative border border-semi-opaque-very-dark-blue py-6 bg-linear-to-t rounded-full from-semi-opaque-blue via-transparent to-ui-background my-5">
              <div className="flex items-center justify-center p-2 bg-ui-background rounded-full border-semi-opaque-very-dark-blue border">
                <BiFingerprint size={90} />
              </div>
              <p>My projects</p>
            </Button>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-tight px-4">
            Personal Projects
          </h1>
          <div className="">
            <p className="text-sm sm:text-lg md:text-lg max-w-2xl md:max-w-xl mx-auto px-4">
              A collection of my personal projects focused on frontend
              engineering covering component-based architecture, state
              management, animations, and responsive UI design using modern web
              technologies.
            </p>
            <Link to="/contact">
              <Button className="border-semi-opaque-blue text-xs px-3 py-6 md:px-5 bg-linear-to-t from-semi-opaque-blue to-very-dark my-5 border-2">
                Book an appointment?
              </Button>
            </Link>
          </div>
          <motion.p
            className="mt-6 flex items-center italic translate-y-15 md:translate-y-1.5 uppercase text-xl lg:text-2xl justify-center gap-2 text-gray-300 cursor-pointer"
            whileHover={{ scale: 1.03 }}
          >
            Want to view more?
            <motion.a
              href="https://github.com/shekinahwebdev"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ x: [0, 8, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <HiArrowRight size={30} />
            </motion.a>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
