import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

declare global {
  interface Window {
    TagCloud: any;
  }
}

const About = () => {
  const tagCloudRef = useRef<HTMLDivElement>(null);

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Angular', 'Node.js', 'Java', 'Springboot',
    'kafka', 'MySQL', 'HTML5', 'CSS3', 'D3', 'Blockly', 'Vanilla JS', 'Git', 'Docker',
    'DSA', 'Microservices'
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js';
    script.onload = () => {
      if (window.TagCloud && tagCloudRef.current) {
        window.TagCloud(tagCloudRef.current, skills, {
          radius: 200,
          maxSpeed: 'normal',
          initSpeed: 'normal',
          direction: 135,
          keep: true,
          useContainerInlineStyles: false,
          useItemInlineStyles: true
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/advaith-r/',
      label: 'LinkedIn'
    },
  ];

  return (
    <section id="about" className="py-20 relative z-10 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-green-500 text-lg mb-4 font-mono">01. INTRO</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left sm:text-justify">
              <p>
                Why, hello there! My name is Advaith. I'm a Software Engineer with a strong focus on Full stack development. Proficient in modern JavaScript frameworks like Angular and React and skilled in backend systems using Java, Spring Boot, Node.js, and MySQL to support seamless integration. Passionate about translating complex workflows into simple, intuitive interfaces and collaborating with designers, product managers, and end-users to deliver high-impact digital experiences.
              </p>
              <p> 
                I'm always on the look out for opportunities that could broaden and enhance my skillset. I enjoy working on challenging projects and love collaborating with others to bring new ideas to life.
                </p>
              <p className="text-green-500 font-medium">Let's get to work, shall we?</p>
              <blockquote className="border-l-4 border-green-500 pl-6 italic text-gray-600 dark:text-gray-400">
                "Styles come and go. Good design is a language, not a style."
                <br />
                <span className="text-sm text-gray-500 dark:text-gray-400">~ Massimo Vignelli</span>
              </blockquote>
            </div>

            <div className="flex space-x-4 mt-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gray-200 dark:bg-gray-800 hover:bg-green-400 rounded-lg flex items-center justify-center text-gray-800 dark:text-gray-300 hover:text-white transition-all duration-300"
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right TagCloud */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div
                ref={tagCloudRef}
                className="tagcloud w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]"
                style={{
                  fontSize: '16px',
                  color: 'var(--tag-color)',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                  overflow: 'hidden'
                }}
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
