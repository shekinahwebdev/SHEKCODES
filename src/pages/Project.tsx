import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import ProjectDetailModal from "./ProjectDetails";
import { projects } from "@/lib/data";

export default function ProjectPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<any | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-very-dark">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x: useTransform(scrollYProgress, [0, 1], [0, -500]) }}
          className="absolute top-20 left-10 text-[15vw] font-black text-white/5 whitespace-nowrap select-none pointer-events-none"
        >
          SELECTED WORKS — SYNC — SELECTED WORKS
        </motion.div>

        <motion.div style={{ x }} className="flex gap-20 px-10 md:px-20">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectDetailModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 font-mono text-sm animate-bounce">
        SCROLL TO EXPLORE ↓
      </div>
    </section>
  );
}

const ProjectCard = ({
  project,
  index,
  onOpen,
}: {
  project: any;
  index: number;
  onOpen: () => void;
}) => {
  return (
    <motion.div
      onClick={onOpen}
      className="group relative h-112.5 w-75 md:h-150 md:w-200 shrink-0 overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 cursor-pointer"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          layoutId={`img-${project.title}`}
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-very-dark via-transparent to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full pointer-events-none">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-blue-400">
            0{index + 1} — {project.category}
          </span>
          <motion.h3
            layoutId={`title-${project.title}`}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            {project.title}
          </motion.h3>

          <div className="flex gap-4 pointer-events-auto">
            <p className="text-gray-400 max-w-sm hidden md:block">
              Click to view project details
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
