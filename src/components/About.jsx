import { motion } from 'framer-motion';
import { FiMonitor, FiCpu, FiMapPin, FiMail, FiPhone, FiCode, FiUsers } from 'react-icons/fi';

const About = () => {
  const highlights = [
    {
      icon: <FiMonitor size={20} />,
      title: "WEB DEVELOPMENT",
      description: "Building responsive, modern, and high-performance interfaces using React and the MERN stack."
    },
    {
      icon: <FiCpu size={20} />,
      title: "AI EXPLORATION",
      description: "Integrating modern AI tools and APIs to create smart, next-generation web experiences."
    },
    {
      icon: <FiCode size={20} />,
      title: "EDUCATION",
      description: "BE. Information Technology\nGujrat Technological University\n2023-2027"
    },
    {
      icon: <FiUsers size={20} />,
      title: "HACKATHONS",
      description: "Actively participating in national and local hackathons to build innovative solutions and collaborate with fellow developers."
    }
  ];

  return (
    <section id="about" className="py-32 bg-[#210044] relative overflow-hidden text-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Title & Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-white/60 font-bold tracking-[0.2em] text-xs uppercase block">Background</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase whitespace-pre-line leading-tight text-white">
                About {"\n"} Me
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg lg:text-xl text-gray-600 font-bold leading-tight max-w-lg">
                I'm <span className="text-white font-black">Dharmik Suthar</span>, an engineering student passionate about Full-Stack Web Development. I enjoy building modern web applications and solving real-world problems through technology.
              </p>
              <p className="text-lg lg:text-xl text-gray-600 font-bold leading-tight max-w-lg">
                Alongside full-stack development, I actively explore Artificial Intelligence concepts, participate in hackathons, and build practical projects to improve my technical and problem-solving skills.
              </p>

              <div className="pt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-white/60">
                   <FiMapPin className="text-white" />
                   <span>Ahmedabad, India</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                   <FiMail className="text-white" />
                   <a href="mailto:dharmiksuthar2405@gmail.com" className="hover:text-white transition-colors">dharmiksuthar2405@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                   <FiPhone className="text-white" />
                   <a href="tel:+919316135529" className="hover:text-white transition-colors">+91 9316135529</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Highlights Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:pt-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="space-y-6 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-purple-dark transition-all duration-500 shadow-sm border border-white/10">
                  {item.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-bold tracking-widest uppercase text-white">{item.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed text-base whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
