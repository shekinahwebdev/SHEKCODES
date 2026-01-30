import { motion } from "framer-motion";
import { SiOpenai, SiAnthropic, SiGooglecloud } from "react-icons/si";

const aiTools = [
  {
    name: "ChatGPT",
    role: "Rapid Prototyping",
    desc: "Utilized for brainstorming logic, generating boilerplate, and quick troubleshooting of CSS/Tailwind layouts.",
    icon: <SiOpenai size={32} />,
    level: 98,
    color: "from-emerald-500 to-teal-400",
  },
  {
    name: "Claude 3.5",
    role: "Code Architecture",
    desc: "My go-to for complex refactoring, high-level React state management logic, and writing clean, scalable TypeScript.",
    icon: <SiAnthropic size={32} />,
    level: 95,
    color: "from-orange-500 to-red-400",
  },
  {
    name: "Gemini AI",
    role: "Research & Context",
    desc: "Leveraging Google's massive context window for deep documentation analysis and multi-modal project planning.",
    icon: <SiGooglecloud size={32} />, // Using Google Cloud as a placeholder for Gemini
    level: 88,
    color: "from-blue-500 to-purple-500",
  },
];

export default function AIToolsGrid() {
  return (
    <section className="relative min-h-screen bg-very-dark py-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[20vw] font-black text-white/2 whitespace-nowrap select-none pointer-events-none uppercase">
        INTELLIGENCE
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center lg:justify-start gap-3 mb-4"
          >
            <span className="h-px w-12 bg-semi-opaque-blue"></span>
            <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em]">
              The Modern Stack
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"
          >
            My AI <span className="text-semi-opaque-blue">Tools</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 max-w-xl text-lg font-light leading-relaxed"
          >
            I integrate the world's leading Large Language Models into my daily
            engineering workflow to ensure code quality, speed, and innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiTools.map((tool, i) => (
            <AIToolCard key={i} tool={tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const AIToolCard = ({ tool, index }: { tool: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="relative p-8 rounded-[2.5rem] bg-white/3 border border-white/10 overflow-hidden group transition-all"
  >
    <div
      className={`absolute -inset-1 bg-linear-to-r ${tool.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
    />

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:text-blue-400 transition-colors">
          {tool.icon}
        </div>
        <div className="flex flex-col items-end">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse mb-2"></span>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter">
            Running
          </span>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-1">{tool.name}</h3>
      <p className="text-xs font-mono text-blue-400 uppercase tracking-[0.2em] mb-4">
        {tool.role}
      </p>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">{tool.desc}</p>

      <div className="space-y-2">
        <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase">
          <span>Proficiency</span>
          <span>{tool.level}%</span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${tool.level}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`h-full bg-linear-to-r ${tool.color}`}
          />
        </div>
      </div>
    </div>
  </motion.div>
);
