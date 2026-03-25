import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaNpm } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiTypescript, SiNextdotjs, SiFramer, SiPnpm, SiPostman, SiPrisma, SiGraphql, SiFirebase, SiJsonwebtokens } from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  const frontendSkills = [
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
  
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    { name: 'JWT', icon: <SiJsonwebtokens className="text-[#d63aff]" /> },
    { name: 'REST API', icon: <AiOutlineApi className="text-[#007acc]" /> },
  ];

  const toolsSkills = [
    { name: 'npm', icon: <FaNpm className="text-[#CB3837]" /> },
    { name: 'pnpm', icon: <SiPnpm className="text-[#F69220]" /> },
    { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" /> },
    { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-900" /> },
    { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> }
  ];

  // Duplicating the array items a few times to ensure a smooth, long infinite scroll even on ultra-wide monitors.
  const createMarqueeContent = (skillsArray) => {
    return [...skillsArray, ...skillsArray, ...skillsArray, ...skillsArray];
  };

  const SkillBox = ({ skill }) => (
    <div className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl shadow-sm hover:shadow-md hover:border-white/30 transition-all duration-300 mx-3 group shrink-0">
      <div className="text-3xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-sm">
        {skill.icon}
      </div>
      <span className="font-semibold text-white/90 whitespace-nowrap">{skill.name}</span>
    </div>
  );

  return (
    <section id="skills" className="py-24 relative bg-[#210044] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <span className="text-white/60 font-semibold tracking-wider text-sm uppercase mb-2 block">My Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Core Skills</h2>
          <div className="w-20 h-1 bg-white rounded-full mb-8"></div>
          <p className="text-lg text-white/70 max-w-2xl">
            These are the technologies and tools I work with to build robust, scalable, and beautiful web applications.
          </p>
        </motion.div>
      </div>

      {/* Marquee Rows Container */}
      <div className="space-y-8 pb-10 w-full relative">
        {/* Left/Right fading gradients to make the scrolling smooth at edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#210044] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#210044] to-transparent z-10 pointer-events-none"></div>

        {/* Frontend Row (Scrolls Left) */}
        <div className="flex overflow-hidden group w-full">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            <div className="flex">
              {createMarqueeContent(frontendSkills).map((skill, idx) => (
                <SkillBox key={`frontend-${idx}`} skill={skill} />
              ))}
            </div>
            <div className="flex">
              {createMarqueeContent(frontendSkills).map((skill, idx) => (
                <SkillBox key={`frontend-dup-${idx}`} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Backend Row (Scrolls Right) */}
        <div className="flex overflow-hidden group w-full">
          <div className="flex w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
             <div className="flex">
              {createMarqueeContent(backendSkills).map((skill, idx) => (
                <SkillBox key={`backend-${idx}`} skill={skill} />
              ))}
            </div>
            <div className="flex">
              {createMarqueeContent(backendSkills).map((skill, idx) => (
                <SkillBox key={`backend-dup-${idx}`} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Tools Row (Scrolls Left) */}
        <div className="flex overflow-hidden group w-full">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] [animation-duration:40s]">
            <div className="flex">
              {createMarqueeContent(toolsSkills).map((skill, idx) => (
                <SkillBox key={`tools-${idx}`} skill={skill} />
              ))}
            </div>
            <div className="flex">
              {createMarqueeContent(toolsSkills).map((skill, idx) => (
                <SkillBox key={`tools-dup-${idx}`} skill={skill} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
