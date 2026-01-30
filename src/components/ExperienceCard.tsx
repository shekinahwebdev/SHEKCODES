import { motion } from "framer-motion";
import { BiBriefcase } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";

const ExperienceCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />
      <div className="md:hidden absolute left-4.75 top-0 bottom-0 w-px bg-white/10" />

      <div
        className={`md:flex items-center justify-between ${
          index % 2 === 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="hidden md:block w-5/12" />

        <div className="absolute left-2.5 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-semi-opaque-blue bg-very-dark z-10 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>

        <div className="w-full md:w-5/12 mb-12 relative group">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-semi-opaque-blue/50 hover:bg-white/10 hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg text-semi-opaque-blue">
                  <BiBriefcase size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">{item.role}</h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5">
                <BsCalendarEvent size={10} />
                {item.date}
              </div>
            </div>

            <h4 className="text-lg font-semibold text-semi-opaque-blue mb-3">
              {item.company}
            </h4>

            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              {item.description}
            </p>
            {item.projects && (
              <ul className="mb-6 space-y-2 flex flex-col justify-center">
                {item.projects.map((project: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-300 text-sm sm:text-base leading-relaxed"
                  >
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-semi-opaque-blue shrink-0" />
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2">
              {item.stack.map((tech: string, i: number) => (
                <span
                  key={i}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-semi-opaque-very-dark-blue text-white border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
