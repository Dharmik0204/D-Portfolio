import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dharmik-suthar-6b7b42306?utm_source=share_via&utm_content=profile&utm_medium=member_android', icon: <FiLinkedin /> },
    { name: 'Github', href: 'https://github.com/Dharmik0204', icon: <FiGithub /> },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <div className="flex justify-start">
              <a href="#" className="text-xl font-bold text-gray-900 tracking-[0.3em] uppercase" onClick={(e) => scrollToSection(e, '#home')}>
                DHARMIK
              </a>
            </div>

            <div className="flex items-center">
              {/* Desktop Menu - Shifted to right side and visible only on first section */}
              <div className={`hidden md:flex space-x-10 transition-all duration-500 mr-10 ${isScrolled ? 'opacity-0 invisible scale-95 pointer-events-none translate-y-[-20px]' : 'opacity-100 visible scale-100 translate-y-0'}`}>
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-900 hover:text-brand-purple font-medium transition-colors relative group uppercase text-[10px] tracking-[0.3em]"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>

              {/* Hamburger Menu Button - Visible on mobile ALWAYS, on desktop ONLY when scrolled */}
              <div className="flex justify-end relative z-[70]">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`text-gray-900 hover:text-brand-purple transition-all duration-500 p-2 ${
                    isScrolled ? 'opacity-100 visible scale-100' : 'md:opacity-0 md:invisible md:scale-95'
                  } ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : ''}`}
                  aria-label="Toggle Menu"
                >
                  <FiMenu size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen Menu Overlay - Outside nav to ensure full coverage */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-brand-purple-dark text-white flex flex-col w-full h-full min-h-[100dvh]"
          >
            {/* Header / Close Button */}
            <div className="flex justify-end p-8 lg:p-12 relative z-[110]">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-purple-dark transition-all duration-300 pointer-events-auto"
                aria-label="Close Menu"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Main Links */}
            <div className="flex-1 flex flex-col items-center justify-center relative z-[105]">
              <motion.div 
                className="flex flex-col items-center space-y-4 lg:space-y-6 w-full"
                initial="initial"
                animate="animate"
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    variants={{
                      initial: { opacity: 0, y: 50 },
                      animate: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter hover:text-brand-purple-light transition-colors block text-center"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Footer */}
            <div className="p-8 lg:p-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 bg-brand-purple-dark relative z-[105]">
              <div className="text-center md:text-left">
                <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-1">
                  Email Address
                </p>
                <a 
                  href="mailto:dharmiksuthar2405@gmail.com"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium hover:text-white transition-colors line-clamp-1"
                >
                  dharmiksuthar2405@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-8">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase hover:text-white transition-colors"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
