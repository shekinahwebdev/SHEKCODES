import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const experienceData = [
  {
    company: "Freelance",
    role: "Jnr Frontend Dev",
    date: "2025 – Present",
    description:
      "Designed and developed responsive, production-ready websites for small businesses and personal brands. Focused on translating requirements into clean UI, reusable components, and optimized user experiences. Delivered real-world projects such as e-commerce and business landing pages.",
    projects: ["calbuy.com", "rehobothflorals.com", "swaghasports.com"],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "Gsap",
      "Framer motion",
      "React router",
      "Redux Toolkit",
      "REST APIs",
      "Firebase",
    ],
  },
  {
    company: "Personal Projects",
    role: "Frontend Developer",
    date: "2025 – Present",
    description:
      "Built multiple frontend projects to strengthen practical engineering skills, including interactive web apps, dashboards, and content-driven websites. Emphasized component-based architecture, state management, and responsive design across devices.",
    projects: [
      "AI Chatbot Interface",
      "Swagha Sports LTD",
      "Tourism & Travel Website",
      "Admin Dashboard Panel",
    ],
    stack: [
      "React",
      "Redux",
      "Framer Motion",
      "GSAP",
      "REST APIs",
      "Firebase",
      "Gemini Api",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    company: "Academic & Self-Directed Learning",
    role: "Frontend Dev Learner",
    date: "2024 – 2025",
    description:
      "Developed a strong foundation in frontend development through coursework and self-directed practice. Gained hands-on experience building small applications, understanding unidirectional data flow, and applying modern JavaScript and React patterns.",
    stack: ["JavaScript (ES6+)", "React", "Git & GitHub", "Responsive Design"],
  },
];
export default function ExperienceSection() {
  return (
    <section className="relative py-24 px-4 bg-very-dark overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My journey through the software industry, building scalable frontend
            architectures and delightful user interfaces.
          </p>
        </motion.div>

        <div className="relative">
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
