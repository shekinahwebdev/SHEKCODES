import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import { useEffect, useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import { AnimatePresence, motion } from "framer-motion";
import Snowfall from "react-snowfall";

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
    }, 2200);

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
                <Snowfall
                  snowflakeCount={120}
                  speed={[0.5, 1.5]}
                  wind={[-0.2, 0.5]}
                  radius={[0.5, 2.5]}
                  style={{
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                    zIndex: 30,
                    pointerEvents: "none",
                  }}
                />
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
