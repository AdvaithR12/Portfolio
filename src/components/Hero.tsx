import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, Twitter } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/AdvaithR12',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/advaith-r/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'https://mail.google.com/mail/?view=cm&to=advaithr.30@gmail.com',
      label: 'Email'
    },
    {
      icon: Instagram,
      href: '',
      label: 'Instagram'
    },
    {
      icon: Twitter,
      href: '',
      label: 'Twitter'
    }
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-white dark:bg-gray-900">
      <ParticleBackground />

      {/* z-10 wrapper to stay above the canvas */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="lg:w-1/2 text-left">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <p className="text-green-500 text-lg mb-2 font-mono">hi! my name is</p>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                  Advaith R
                </h1>
                <p className="text-2xl md:text-3xl text-gray-900 dark:text-gray-300 mb-6">
                  <TypingAnimation />
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                onClick={() => scrollToSection('about')}
                className="px-8 py-3 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-gray-900 transition-all duration-300 rounded-lg font-medium mb-8"
              >
                About Me
              </motion.button>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-8"
              >
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-2xl text-gray-900 dark:text-gray-300  dark:hover:text-green-400 hover:text-green-400 transition-colors duration-300 font-light"
                >
                  Say Hello!
                </button>
              </motion.div>
            </div>

            {/* Right Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="lg:fixed lg:right-8 lg:top-1/2 lg:transform lg:-translate-y-1/2 flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gray-800 hover:bg-green-400 rounded-lg flex items-center justify-center text-gray-300 hover:text-gray-900 transition-all duration-300"
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
