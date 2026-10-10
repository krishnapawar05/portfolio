import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Achievements } from "./components/Achievements";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-bg text-text-primary selection:bg-[#4E85BF]/30 selection:text-white">
      {/* Section 1: Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Section 2: Hero */}
        <Hero isReady={!isLoading} />

        {/* Section 3: Selected Projects */}
        <Projects />

        {/* Section 4: About Me */}
        <About />

        {/* Section 5: Technical Skills */}
        <Skills />

        {/* Section 6: Experience */}
        <Experience />

        {/* Section 7: Achievements */}
        <Achievements />
      </main>

      {/* Section 8: Contact & Footer */}
      <Footer />
    </div>
  );
};

export default App;
