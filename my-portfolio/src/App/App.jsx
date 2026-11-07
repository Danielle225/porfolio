/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: App.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 02/06/2023
*/

import { MotionConfig } from "framer-motion";
import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import About from "../Pages/About";
import Experiences from "../Pages/Experiences";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experiences />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </MotionConfig>
  );
}

export default App;
