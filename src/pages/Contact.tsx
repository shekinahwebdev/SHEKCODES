import { motion } from "framer-motion";
import { useState } from "react";
import {
  HiOutlineArrowRight,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
} from "react-icons/hi";

export default function ContactPage() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-very-dark text-white pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-purple-600/10 blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            LET'S <span className="text-semi-opaque-blue italic">SYNC.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Have a grand idea? Let’s turn it into high-performance code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {[
              {
                label: "Email",
                val: "patriciashilohkanneh12@gmail.com",
                icon: <HiOutlineMail />,
                color: "text-semi-opaque-blue",
              },
              {
                label: "Current Location",
                val: "Accra, Ghana",
                icon: <HiOutlineLocationMarker />,
                color: "text-purple-800",
              },
              {
                label: "Availability",
                val: "Freelance / Jnr Frontend Dev",
                icon: <HiOutlineChatAlt2 />,
                color: "text-green-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all group"
              >
                <div className={`text-2xl mb-4 ${item.color}`}>{item.icon}</div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  {item.label}
                </p>
                <p
                  className="text-lg font-medium group-hover:text-blue-400 transition-colors truncate w-full"
                  title={item.val}
                >
                  {item.val}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-2xl shadow-2xl"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Input */}
                <div className="relative">
                  <label
                    className={`text-xs uppercase tracking-widest transition-colors ${
                      focused === "name" ? "text-blue-400" : "text-gray-500"
                    }`}
                  >
                    Full Name
                  </label>
                  <input
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    type="text"
                    placeholder="Derrick Sam"
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:border-blue-500 outline-none transition-all placeholder:text-white/10"
                  />
                </div>

                <div className="relative">
                  <label
                    className={`text-xs uppercase tracking-widest transition-colors ${
                      focused === "email" ? "text-blue-400" : "text-gray-500"
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    type="email"
                    placeholder="derrick@example.com"
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:border-blue-500 outline-none transition-all placeholder:text-white/10"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-xs uppercase tracking-widest text-gray-500">
                  I'm interested in...
                </label>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["Web Design", "Development", "Mentorship", "Other"].map(
                    (tag) => (
                      <button
                        key={tag}
                        type="button"
                        className="px-6 py-2 rounded-full border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 transition-all text-sm"
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="relative">
                <label
                  className={`text-xs uppercase tracking-widest transition-colors ${
                    focused === "message" ? "text-blue-400" : "text-gray-500"
                  }`}
                >
                  Tell me about the project
                </label>
                <textarea
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  rows={4}
                  placeholder="The next big thing is..."
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:border-blue-500 outline-none transition-all resize-none placeholder:text-white/10"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-semi-opaque-blue hover:bg-blue-500 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-[0_10px_40px_rgba(37,99,235,0.3)]"
              >
                SEND MESSAGE
                <HiOutlineArrowRight size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
