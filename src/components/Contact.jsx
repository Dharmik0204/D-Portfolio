import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';

const contactLinks = [
  {
    label: 'GITHUB',
    display: 'github.com/Dharmik0204',
    href: 'https://github.com/Dharmik0204',
    icon: <FiGithub size={20} />,
  },
  {
    label: 'LINKEDIN',
    display: 'linkedin.com/in/dharmik-suthar',
    href: 'https://www.linkedin.com/in/dharmik-suthar-6b7b42306?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    icon: <FiLinkedin size={20} />,
  },
  {
    label: 'EMAIL',
    display: 'dharmiksuthar2405@gmail.com',
    href: 'mailto:dharmiksuthar2405@gmail.com',
    icon: <FiMail size={20} />,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Left Column: Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 space-y-8"
          >
            <p className="text-brand-purple font-semibold tracking-[0.25em] text-xs uppercase">
              Get In Touch
            </p>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 uppercase leading-none tracking-tight">
              LET'S<br />CONNECT
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-sm font-light">
              Have a project idea or collaboration in mind? I'm always open to discussing interesting projects and new opportunities. Let's connect.
            </p>
          </motion.div>

          {/* Right Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-3/5 w-full space-y-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group flex items-center justify-between gap-6 px-8 py-6 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300 transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center text-gray-700 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-1">
                      {link.label}
                    </p>
                    <p className="text-gray-900 font-semibold text-base">
                      {link.display}
                    </p>
                  </div>
                </div>
                <FiArrowRight
                  size={20}
                  className="text-gray-400 group-hover:text-brand-purple group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                />
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
