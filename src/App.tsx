import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import { useEffect, useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasSeenWelcomePage = sessionStorage.getItem("visited");

    if (hasSeenWelcomePage) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("visited", "true");
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <WelcomePage />
        ) : (
          <>
            <Header />
            <motion.div
              key="app"
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full flex flex-col justify-center z-0 relative"
            >
              <main>
                <Outlet />
              </main>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
