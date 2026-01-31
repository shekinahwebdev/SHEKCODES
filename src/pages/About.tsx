import ResumeSection from "@/components/Resume";
import { motion } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiOutlineCake,
} from "react-icons/hi";

export default function AboutPage() {
  const stats = [
    {
      label: "Years Experience",
      value: "2+",
      icon: <HiOutlineCake className="text-semi-opaque-blue" />,
    },
    {
      label: "Projects Completed",
      value: "12+",
      icon: <HiOutlineLightBulb className="text-yellow-500" />,
    },
    {
      label: "Attention to Detail",
      value: "100%",
      icon: <HiOutlineSparkles className="text-purple-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-very-dark text-white pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            About <span className="text-blue-500">Me</span>
          </h1>
          <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200">
              I'm a Junior Frontend Developer dedicated to crafting seamless
              digital experiences.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              My journey started with a curiosity for how things work on the
              web. Today, I specialize in building high-performance web
              applications using React, TypeScript, and Tailwind CSS. I believe
              that a great UI isn't just about looks,it's about how it feels and
              functions for the user.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              I thrive on challenges that require a mix of creativity and logic.
              Whether I’m optimizing animation performance (like the ones you
              saw in the hero!) or architecting state management with Redux, I
              aim for excellence in every line of code.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <span className="text-2xl font-bold">{stat.value}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square group"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-transparent z-10" />
              <img
                src="/assets/me.jpg"
                alt="Profile"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />

              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 blur-3xl -z-10" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-ui-background border border-semi-opaque-very-dark-blue shadow-2xl backdrop-blur-md z-20"
            >
              <p className="text-sm font-mono text-blue-400">
                {"<OpenToWork />"}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-32 py-16 border-y border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 italic">
                The Mission
              </h3>
              <p className="text-gray-400 italic">
                "To bridge the gap between complex backend logic and
                human-centric frontend design, ensuring every click feels
                intentional and every transition feels natural."
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Values</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Clean & Maintainable Code</li>
                <li>• Pixel Perfect Implementation</li>
                <li>• Continuous Learning & Growth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ResumeSection />
    </div>
  );
}
