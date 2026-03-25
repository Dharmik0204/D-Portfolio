import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top: Disclaimer/Message & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-sm font-medium max-w-md text-center md:text-left leading-relaxed">
            Crafted with precision. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="mailto:dharmiksuthar2405@gmail.com" 
              className="text-gray-400 hover:text-brand-purple transition-colors duration-300"
              aria-label="Email"
            >
              <FiMail size={24} />
            </a>
            <a 
              href="https://github.com/Dharmik0204" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-purple transition-colors duration-300"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/dharmik-suthar-6b7b42306?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-purple transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="pt-8 border-t border-gray-50 flex justify-center md:justify-start">
          <span className="text-gray-400 text-[10px] font-bold tracking-[0.3em] uppercase">
            &copy; {currentYear} DHARMIK SUTHAR | ALL RIGHTS RESERVED
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
