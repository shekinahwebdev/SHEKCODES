import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { BiFingerprint } from "react-icons/bi";
import { portfolioData } from "@/lib/data";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

export default function FloatingCardsHero() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [orbitRadius, setOrbitRadius] = useState(500);

  useEffect(() => {
    // Calculate responsive orbit radius
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setOrbitRadius(200); // Small mobile
      } else if (width < 768) {
        setOrbitRadius(280); // Mobile
      } else if (width < 1024) {
        setOrbitRadius(350); // Tablet
      } else if (width < 1280) {
        setOrbitRadius(450); // Small desktop
      } else {
        setOrbitRadius(550); // Large desktop
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    // Initialize card positions and animations
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      // Calculate starting angle for each card (starting from left side, moving clockwise)
      const startAngle = (index / portfolioData.length) * 360;

      // Set CSS custom properties for animation
      card.style.setProperty("--start-angle", `${startAngle}deg`);
      card.style.setProperty("--orbit-radius", `${orbitRadius}px`);
      card.style.setProperty("--duration", `30s`);
    });

    // Continuously update visibility based on position
    const updateVisibility = () => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const startAngle = (index / portfolioData.length) * 360;
        const duration = 30000;
        const elapsed = performance.now() % duration;
        const progress = elapsed / duration;
        const currentAngle = (startAngle + progress * 360) % 360;

        // Show cards in the top 180 degrees (from 180 to 360, which is left to right through the top)
        // Hide cards in the bottom 180 degrees (from 0 to 180, which is the bottom half)
        if (currentAngle > 0 && currentAngle < 180) {
          card.style.opacity = "0";
          card.style.pointerEvents = "none";
        } else {
          card.style.opacity = "1";
          card.style.pointerEvents = "auto";
        }
      });

      requestAnimationFrame(updateVisibility);
    };

    const animationId = requestAnimationFrame(updateVisibility);
    return () => cancelAnimationFrame(animationId);
  }, [orbitRadius]);

  return (
    <div className="relative min-h-screen border-b-2 border-semi-opaque-very-dark-blue bg-linear-to-t from-semi-opaque-very-dark-blue via-transparent  to-ui-background flex items-center justify-center">
      <div className="absolute inset-0">
        {portfolioData.map((img, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="floating-card absolute top-4/5 left-1/2 transition-opacity duration-500"
            style={{
              width: "clamp(50px, 15vw, 100px)",
              height: "clamp(50px, 15vw, 100px)",
            }}
          >
            <div className="card-inner w-full h-full relative">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover rounded-[20%]"
                style={{
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6)",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center px-4 py-10 sm:px-6 max-w-4xl mx-auto translate-y-24">
        <div className="relative">
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
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-4xl mx-auto px-4">
          A collection of personal projects focused on frontend engineering
          covering component-based architecture, state management, animations,
          and responsive UI design using modern web technologies.
        </p>
        <Button className=" border-semi-opaque-blue py-6 px-5 bg-linear-to-t from-semi-opaque-blue to-very-dark my-5 border-2">
          Book an appointment?
        </Button>
        <motion.p
          className="mt-6 flex items-center uppercase text-2xl justify-center gap-2 text-gray-300 cursor-pointer"
          whileHover={{ scale: 1.03 }}
        >
          Want to view more?
          <motion.a
            href="https://github.com/shekinahwebdev"
            target="_blank"
            rel="noopener noreferrer"
            className=""
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
  );
}
