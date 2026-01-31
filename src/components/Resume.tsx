import { motion } from "framer-motion";
import {
  HiOutlineDocumentDownload,
  HiOutlineEye,
  HiOutlineBadgeCheck,
} from "react-icons/hi";

export default function ResumeSection() {
  return (
    <section className="py-20 bg-ui-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-linear-to-b from-white/5 to-transparent border border-white/10 p-8 md:p-16 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-sm tracking-widest uppercase">
                <HiOutlineBadgeCheck size={20} />
                <span>Verified Experience</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Curious about my <br />
                <span className="text-blue-500">Professional Journey?</span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                I’ve documented my career path, technical skills, and key
                achievements in a concise one-page format. Optimized for both
                humans and ATS systems.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/assets/PATRICIASHILOHKANNEH-RESUME-2.pdf"
                  target="_blank"
                  className="flex items-center gap-2 px-8 py-4 bg-white text-very-dark font-bold rounded-2xl hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  <HiOutlineEye size={20} />
                  View Resume
                </a>
                <a
                  href="/assets/PATRICIASHILOHKANNEH-RESUME-2.pdf"
                  download
                  className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all"
                >
                  <HiOutlineDocumentDownload size={20} />
                  Download PDF
                </a>
              </div>
            </div>

            <motion.div
              whileHover={{ rotate: -2, scale: 1.02 }}
              className="relative group cursor-pointer"
              onClick={() => window.open("/assets/resume.pdf", "_blank")}
            >
              <div className="aspect-3/4 w-full max-w-87.5 mx-auto bg-white rounded-xl shadow-2xl overflow-hidden relative border-4 border-white/10">
                <img
                  src="/assets/resume-preview.png"
                  alt="Patricia's Resume Preview"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300">
                  <div className="bg-white text-blue-600 p-4 rounded-full shadow-xl mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <HiOutlineEye size={30} />
                  </div>
                  <p className="text-white font-bold text-xl uppercase tracking-[0.2em] drop-shadow-md">
                    Open PDF
                  </p>
                </div>
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
              </div>
              <div className="absolute inset-0 -z-10 bg-white/5 rounded-xl translate-x-2 translate-y-2 border border-white/10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
