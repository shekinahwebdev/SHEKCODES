import AnimatedWord from "../components/AnimatedWord";
import Orb from "../components/Orb";
import { motion } from "framer-motion";

const WelcomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full h-screen z-0 relative flex flex-col items-center justify-center"
    >
      <Orb
        hoverIntensity={2}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />
      <AnimatedWord text="SHEKCODES" />
    </motion.div>
  );
};

export default WelcomePage;
