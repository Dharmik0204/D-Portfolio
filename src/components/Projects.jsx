import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "AgriHealth AMU",
      description: "A specialized digital ecosystem for livestock management that connects farmers, veterinarians, and medical stores to monitor animal health and regulate anti-microbial use (AMU) through a centralized admin portal.",
      features: [
        "Farmer & Livestock Health Monitoring",
        "Veterinary Consultation Integration",
        "Medical Store Prescriptions & Inventory",
        "Centralized Admin Anti-Microbial Oversight"
      ],
      techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      github: "https://github.com/Dharmik0204/Amu-portal-2.git",
      live: "https://amu-portal-2.vercel.app/",
      image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/359202c6-50a3-41c1-afbe-24ef40830739.jpeg"
    },
    {
      title: "InterviewIQ",
      description: "An AI-powered interview preparation platform that helps candidates practice with real questions, get instant feedback, and boost their confidence before the big day.",
      features: [
        "AI-Powered Interview Coach",
        "200+ Role-Based Question Templates",
        "Real-Time Answer Feedback",
        "Interview History & Progress Tracking"
      ],
      techStack: ["React", "Tailwind CSS", "Node.js", "OpenAI API", "MongoDB"],
      github: "https://github.com/Dharmik0204/interview-1234.git",
      live: "https://interview-1234-oigm.vercel.app",
      image: "https://image2url.com/r2/default/images/1774420340017-88a07c15-104c-42a1-b9cf-69bbc5fc486e.jpeg"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-24"
        >
          <span className="text-brand-purple font-semibold tracking-wider text-sm uppercase mb-2 block">My Work</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Featured Projects</h2>
          <div className="w-20 h-1 bg-brand-purple rounded-full"></div>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-start gap-8 md:gap-16"
            >
              {/* Left Side: Number */}
              <div className="flex-shrink-0 pt-2">
                <span className="text-7xl md:text-9xl font-black text-brand-purple/10 select-none leading-none">
                  0{index + 1}
                </span>
              </div>

              {/* Right Side: Content */}
              <div className="flex-grow">
                <div className="glass group rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(74,20,140,0.05)] hover:shadow-[0_20px_50px_rgba(74,20,140,0.1)] border border-gray-100/50 transition-all duration-500 bg-white/50 backdrop-blur-sm">
                  <div className="flex flex-col lg:flex-row">
                    {/* Project Image */}
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="lg:w-2/5 h-64 lg:h-auto overflow-hidden relative group/img block"
                    >
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-brand-purple/20 to-brand-purple/5 flex items-center justify-center">
                          <span className="text-brand-purple/30 font-bold text-xl uppercase tracking-widest">Preview</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    
                    {/* Project Details */}
                    <div className="lg:w-3/5 p-8 md:p-12">
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 group-hover:text-brand-purple transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-4 leading-relaxed font-light">
                        {project.description}
                      </p>
                      
                      {/* Detailed Features */}
                      {project.features && (
                        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {project.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 group/feature">
                              <span className="w-1.5 h-1.5 bg-brand-purple/40 rounded-full group-hover/feature:bg-brand-purple transition-colors"></span>
                              <span className="text-sm text-gray-600 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-3 mb-10">
                        {project.techStack.map((tech, j) => (
                          <span key={j} className="text-xs font-bold px-4 py-1.5 bg-brand-purple/5 text-brand-purple rounded-full tracking-wide">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-8 pt-8 border-t border-gray-100">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-brand-purple transition-all duration-300 flex items-center gap-2 text-sm font-bold group/link">
                          <FiGithub size={20} className="group-hover/link:rotate-12 transition-transform" />
                          VIEW CODE
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-brand-purple transition-all duration-300 flex items-center gap-2 text-sm font-bold group/link">
                          <FiExternalLink size={20} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                          LIVE DEMO
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4, duration: 0.6 }}
           className="mt-24 text-center"
        >
          <a 
            href="https://github.com/Dharmik0204" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-sm tracking-widest hover:bg-brand-purple transition-all duration-300 shadow-xl shadow-gray-100 group"
          >
            VIEW MORE PROJECTS
            <FiGithub size={18} className="group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
