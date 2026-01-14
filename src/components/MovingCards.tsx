import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CARDS = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1614850523296-e8c041de43a0?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=300&h=300&fit=crop",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=300&h=300&fit=crop",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=300&h=300&fit=crop",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=300&h=300&fit=crop",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1563089145-599997674d42?w=300&h=300&fit=crop",
  },
];

const MovingCards = () => {
  const [rotation, setRotation] = useState(0);
  const radius = 350; // Controls the size of the "arch"

  // Optional: Auto-rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev - 0.5); // Negative for clockwise, positive for counter
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Container for the rotating circle */}
      <motion.div
        animate={{ rotate: rotation }}
        transition={{ ease: "linear", duration: 0 }}
        className="relative flex items-center justify-center"
        style={{ width: radius * 2, height: radius * 2 }}
      >
        {CARDS.map((card, index) => {
          const angle = (index / CARDS.length) * (2 * Math.PI);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={card.id}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Individual Card */}
              <motion.div
                // This keeps the card upright while the parent rotates
                animate={{ rotate: -rotation }}
                className="h-32 w-32 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl"
              >
                <img
                  src={card.img}
                  alt=""
                  className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Hero Content (Centered) */}
      <div className="absolute z-10 flex flex-col items-center text-center max-w-2xl px-4 pointer-events-none">
        <span className="mb-4 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-xs font-medium text-purple-400">
          ✨ Features
        </span>
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Packed with Innovation.
        </h1>
        <p className="mt-6 text-lg text-zinc-400">
          Nubien is packed with cutting-edge features designed to elevate your
          agency or portfolio.
        </p>
        <button className="mt-8 pointer-events-auto rounded-xl bg-indigo-600 px-8 py-4 font-semibold hover:bg-indigo-500 transition-all">
          Book an Appointment
        </button>
      </div>

      {/* Background Glow (From our previous step) */}
      <div className="absolute -bottom-20 h-[500px] w-[150%] rounded-[100%] bg-indigo-900/20 blur-[120px]" />
    </div>
  );
};

export default MovingCards;
