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
      <div className="w-full min-h-screen overflow-x-hidden bg-[#1a1a2e] dark:bg-[#0f0f23] text-white font-mono">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;