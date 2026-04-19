import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import TechnicalArsenal from './sections/TechnicalArsenal';
import Trajectory from './sections/Trajectory';
import ProgrammingSkills from './sections/ProgrammingSkills';
import Methodology from './sections/Methodology';
import SelectedWorks from './sections/SelectedWorks';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen text-zinc-300 selection:bg-primary/30 bg-[radial-gradient(ellipse_150%_100%_at_50%_-10%,_var(--tw-gradient-stops))] xl:bg-[radial-gradient(ellipse_200%_100%_at_50%_-10%,_var(--tw-gradient-stops))] from-[#3a0a0a] via-background via-50% xl:via-70% to-background bg-fixed">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechnicalArsenal />
        <Trajectory />
        <ProgrammingSkills />
        <Methodology />
        <SelectedWorks />
        <Contact />
      </main>
    </div>
  );
}

export default App;
