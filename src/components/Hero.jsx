import { motion } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import heroImage from '../assets/hero-graphic.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white px-6 lg:px-12 py-20">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left column: The Graphic */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full flex justify-center lg:justify-start cursor-pointer"
        >
          <div className="relative max-w-2xl w-full">
             <img 
               src={heroImage} 
               alt="Dharmik Suthar Illustration" 
               className="w-full h-auto object-contain"
             />
          </div>
        </motion.div>

        {/* Right column: The Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8 text-center lg:text-left lg:pl-24"
        >
          <div className="space-y-4">
             <span className="text-gray-400 font-medium tracking-widest text-xs lg:text-sm uppercase block">
               Full-Stack Developer | AI Explorer
             </span>
             
             <motion.h1 
               whileHover={{ 
                 scale: 1.02,
                 color: "var(--color-brand-purple)",
                 transition: { duration: 0.3 }
               }}
               className="text-5xl sm:text-7xl lg:text-8xl font-black text-gray-900 leading-none uppercase tracking-tighter cursor-default"
             >
                DHARMIK <br /> SUTHAR
             </motion.h1>
          </div>
          
          <div className="space-y-6">
            <div className="text-3xl lg:text-4xl text-gray-900 font-light flex justify-center lg:justify-start">
              <FiArrowRight className="transform -rotate-45" />
            </div>
            <p className="text-lg lg:text-xl text-gray-600 font-bold leading-tight max-w-lg">
             I am a passionate engineering student focused on developing modern web applications.
With experience in the MERN stack, I build fast, responsive, and scalable solutions.
I have a growing interest in AI and its real-world applications.
I constantly strive to learn new technologies and improve my development skills.
My goal is to create meaningful projects that solve real-world problems.
            </p>
          </div>
          
          <div className="pt-4 flex justify-center lg:justify-start">
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-2 px-10 py-4 bg-[#1a1a1a] text-white rounded-full font-bold text-xs tracking-[0.2em] hover:bg-brand-purple transition-all uppercase shadow-lg hover:shadow-xl"
            >
              CONTACT <FiArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
