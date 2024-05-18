import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                key="home"
                initial={{ opacity: 0, translateY: "100%" }}
                animate={{ opacity: 1, translateY: "0%" }}
                exit={{ opacity: 0, translateY: "-100%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/introduction"
            element={
              <motion.div
                key="introduction"
                initial={{ opacity: 0, translateY: "100%" }}
                animate={{ opacity: 1, translateY: "0%" }}
                exit={{ opacity: 0, translateY: "-100%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Introduction />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                key="about"
                initial={{ opacity: 0, translateY: "100%" }}
                animate={{ opacity: 1, translateY: "0%" }}
                exit={{ opacity: 0, translateY: "-100%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.div
                key="projects"
                initial={{ opacity: 0, translateY: "100%" }}
                animate={{ opacity: 1, translateY: "0%" }}
                exit={{ opacity: 0, translateY: "-100%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Projects />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                key="contact"
                initial={{ opacity: 0, translateY: "100%" }}
                animate={{ opacity: 1, translateY: "0%" }}
                exit={{ opacity: 0, translateY: "-100%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Contact />
              </motion.div>
            }
          />
          <Route
            path="*"
            element={
              <motion.div
                key="not-found"
                initial={{ opacity: 0, translateY: "100%" }}
                animate={{ opacity: 1, translateY: "0%" }}
                exit={{ opacity: 0, translateY: "-100%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Home />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
