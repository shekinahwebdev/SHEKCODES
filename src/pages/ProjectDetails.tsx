import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineX,
  HiOutlineExternalLink,
  HiOutlineCode,
  HiChevronRight,
} from "react-icons/hi";

// Add this state to your main ProjectPage component:
// const [selectedProject, setSelectedProject] = useState(null);

// export default function ProjectDetailModal({
//   project,
//   onClose,
// }: {
//   project: any;
//   onClose: () => void;
// }) {
//   if (!project) return null;

//   return (
//     <AnimatePresence>
//       <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={onClose}
//           className="absolute inset-0 bg-very-dark/90 backdrop-blur-xl"
//         />

//         <motion.div
//           layoutId={`project-${project.title}`}
//           initial={{ opacity: 0, scale: 0.9, y: 20 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.9, y: 20 }}
//           className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-ui-background border border-white/10 rounded-[2.5rem] shadow-2xl no-scrollbar"
//         >
//           <button
//             onClick={onClose}
//             className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors"
//           >
//             <HiOutlineX size={24} className="text-white" />
//           </button>

//           <div className="relative h-[300px] md:h-[450px] w-full">
//             <img
//               src={project.img}
//               alt={project.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-ui-background via-transparent to-transparent" />
//             <div className="absolute bottom-8 left-8 md:left-12">
//               <motion.span
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="px-4 py-1 rounded-full bg-blue-600 text-[10px] uppercase tracking-widest font-bold"
//               >
//                 {project.category}
//               </motion.span>
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 }}
//                 className="text-4xl md:text-6xl font-bold text-white mt-4"
//               >
//                 {project.title}
//               </motion.h2>
//             </div>
//           </div>

//           <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
//             <div className="lg:col-span-2 space-y-8">
//               <div>
//                 <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
//                   <HiChevronRight className="text-blue-500" /> The Challenge
//                 </h3>
//                 <p className="text-gray-400 leading-relaxed text-lg">
//                   {project.desc} This project required a deep dive into complex
//                   UI interactions and scalable state management. The goal was to
//                   provide users with a frictionless experience while processing
//                   high volumes of real-time data.
//                 </p>
//               </div>

//               <div>
//                 <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
//                   <HiChevronRight className="text-blue-500" /> Key Features
//                 </h3>
//                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {[
//                     "Real-time Analytics",
//                     "Custom Animation Engine",
//                     "Responsive Design",
//                     "API Integration",
//                   ].map((feature, i) => (
//                     <li
//                       key={i}
//                       className="flex items-center gap-3 text-gray-300 bg-white/5 p-4 rounded-xl border border-white/5"
//                     >
//                       <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="lg:col-span-1 space-y-10">
//               <div>
//                 <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 font-bold">
//                   Stack Used
//                 </h4>
//                 <div className="flex flex-wrap gap-3">
//                   {[
//                     "React",
//                     "Tailwind",
//                     "Framer Motion",
//                     "Redux",
//                     "RestApi",
//                     "React Router",
//                   ].map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-mono text-blue-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-4 pt-6 border-t border-white/10">
//                 <a
//                   href="#"
//                   className="flex items-center justify-between w-full p-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition-all font-bold group"
//                 >
//                   View Live Site
//                   <HiOutlineExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                 </a>
//                 <a
//                   href="#"
//                   className="flex items-center justify-between w-full p-4 rounded-2xl border border-white/10 hover:bg-white/5 transition-all font-bold group"
//                 >
//                   View Source Code
//                   <HiOutlineCode className="group-hover:scale-110 transition-transform" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </AnimatePresence>
//   );
// }

export default function ProjectDetailModal({
  project,
  onClose,
}: {
  project: any;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-very-dark/90 backdrop-blur-xl"
        />

        <motion.div
          layoutId={`project-${project.title}`}
          className="relative w-full max-w-5xl mt-28 max-h-[90vh] overflow-y-auto bg-ui-background border border-white/10 rounded-[2.5rem] shadow-2xl no-scrollbar"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors"
          >
            <HiOutlineX size={24} className="text-white" />
          </button>
          {/* Hero Section */}
          <div className="relative h-75 md:h-112.5 w-full">
            <motion.img
              layoutId={`img-${project.title}`}
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ui-background via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 md:left-12">
              <span className="px-4 py-1 rounded-full bg-blue-600 text-[10px] uppercase tracking-widest font-bold">
                {project.category}
              </span>
              <motion.h2
                layoutId={`title-${project.title}`}
                className="text-4xl md:text-6xl font-bold text-white mt-4"
              >
                {project.title}
              </motion.h2>
            </div>
          </div>

          <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <HiChevronRight className="text-blue-500" /> The Challenge
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {project.desc}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <HiChevronRight className="text-blue-500" /> Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features?.map((feature: string, i: number) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="flex items-center gap-3 text-gray-300 bg-white/5 p-4 rounded-xl border border-white/5 group hover:border-blue-500/30 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                      <span className="text-sm md:text-base">{feature}</span>
                    </motion.li>
                  ))}
                  {!project.features && (
                    <p className="text-gray-500 italic">No features listed.</p>
                  )}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-10">
              {/* UNIQUE STACK SECTION */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 font-bold">
                  Stack Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.stack?.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-mono text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* UNIQUE LINKS SECTION */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition-all font-bold group"
                >
                  View Live Site
                  <HiOutlineExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a
                  href={project.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 rounded-2xl border border-white/10 hover:bg-white/5 transition-all font-bold group"
                >
                  View Source Code
                  <HiOutlineCode className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
