import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiX, SiInstagram } from "react-icons/si";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function PortfolioFooter() {
  const socials = [
    {
      name: "GitHub",
      icon: <SiGithub />,
      url: "https://github.com/shekinahwebdev",
      color: "hover:bg-white hover:text-black",
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin />,
      url: "https://linkedin.com/in/patricia-kanneh-20a200293/",
      color: "hover:bg-[#0077B5] hover:text-white",
    },
    {
      name: "Twitter",
      icon: <SiX />,
      url: "https://twitter.com/shekinah",
      color: "hover:bg-white hover:text-black",
    },
    {
      name: "Instagram",
      icon: <SiInstagram />,
      url: "https://instagram.com/patriciashilohkanneh12",
      color: "hover:bg-[#E4405F] hover:text-white",
    },
  ];

  return (
    <footer className="relative bg-very-dark pt-20 pb-10 px-4 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-50 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Let’s work <span className="text-semi-opaque-blue">together.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Currently available for freelance projects and full-time
            opportunities.
          </p>
        </motion.div>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-blue-500/50 transition-colors group"
          >
            <HiOutlineMail
              className="text-semi-opaque-blue group-hover:scale-110 transition-transform"
              size={20}
            />
            <span>patriciashilohkanneh12@example.com</span>
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-blue-500/50 transition-colors group"
          >
            <HiOutlinePhone
              className="text-semi-opaque-blue group-hover:scale-110 transition-transform"
              size={20}
            />
            <span>+233 2451 24218</span>
          </a>
        </div>

        {/* Oval Socials Container */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 ${social.color}`}
            >
              <span className="text-xl">{social.icon}</span>
              <span className="font-medium tracking-wide">{social.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm italic">
            &copy; {new Date().getFullYear()} — Built with React & Passion
          </p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <button className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-white transition-colors flex items-center gap-2 group"
            >
              Back to top
              <span className="group-hover:-translate-y-1 transition-transform duration-300">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
