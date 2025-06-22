import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Neon-dX 🔒',
      description: 'NEON-dX is an enterprise-class software product designed to enhance intelligent digital customer engagement automation. It integrates analytics, artificial intelligence (AI), and marketing automation to assist enterprises in driving customer value management and generating measurable economic benefits more efficiently.',
      technologies: ['React', 'Angular', 'Java', 'Springboot'],
      githubUrl: '',
      liveUrl: '',
      gradient: 'from-green-400 to-green-600'
    },
    {
      title: 'EazyCharge EV Route Planner ⚡',
      description: 'Developed a full-stack web application to help electric vehicle (EV) users plan optimized travel routes. Users input a starting point and destination, and the app calculates an efficient route with strategically located charging stations and rest stops based on the vehicle’s mileage.',
      technologies: ['React', 'Google Maps Api', 'Java', 'MySQL', 'Tailwind CSS'],
      githubUrl: '',
      liveUrl: '',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Partner Payment App 💱',
      description: 'Developed an interactive web application to efficiently manage partners/trainers and streamline payment processes. I collaborated on both the design and development of the platform, with a strong emphasis on building an intuitive and responsive user interface. Key features included a robust approval flow system, enabling users to approve, reject, and track payments in real time.',
      technologies: ['React', 'Node.js', 'ExpressJS', 'MongoDB'],
      githubUrl: '',
      liveUrl: '',
      gradient: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-green-500 text-lg mb-4 font-mono">03. DEVELOPMENT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">Things I've Built</h2>
          <button className="text-green-500 hover:text-green-400 transition-colors duration-300 font-mono">
            view the archive
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-300 dark:border-gray-700 hover:border-green-400/50 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-green-400 rounded-bl-full opacity-10 dark:opacity-20"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <div className="mt-4">
                  <button className="text-green-500 hover:text-green-400 transition-colors duration-300 text-sm font-mono">
                    Source
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
