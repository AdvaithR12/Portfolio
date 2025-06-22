import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="font-mono bg-gray-900 dark:bg-gray-900 text-white transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;