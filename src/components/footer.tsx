// Footer.tsx - Glassmorphic Footer with Animated Social Icons and Reduced Spacing
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-gray-300 pt-8 pb-3 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">About Me</h4>
          <p className="text-sm text-gray-400">
            I'm Chandan, a Computer Science student passionate about crafting web apps, ML models,
            and impactful digital experiences. Let's build something amazing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white transition">🏠 Home</a></li>
            <li><a href="#projects" className="hover:text-white transition">🚀 Projects</a></li>
            <li><a href="#education" className="hover:text-white transition">🎓 Education</a></li>
            <li><a href="#coding" className="hover:text-white transition">💻 Coding</a></li>
            <li><a href="#github" className="hover:text-white transition">🐙 GitHub</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Connect</h4>

          {/* Email */}
          <p className="text-sm mb-3 flex items-center gap-2">
            <FaEnvelope className="text-white" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ck7464877@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20Chandan%2C%20I%20visited%20your%20portfolio%20and%20wanted%20to%20connect."
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              ck7464877@gmail.com
            </a>
          </p>

          {/* Phone */}
          <p className="text-sm mb-3 flex items-center gap-2">
            <FaPhoneAlt className="text-white" />
            <a href="tel:+919915126389" className="hover:text-white transition">
              +91-99151-26389
            </a>
          </p>

          {/* WhatsApp */}
          <p className="text-sm mb-4 flex items-center gap-2">
            <FaWhatsapp className="text-green-400" />
            <a
              href="https://wa.me/919915126389?text=Hi%20Chandan%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              Message on WhatsApp
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 text-xl">
            <a href="https://github.com/chandan-911" target="_blank" rel="noreferrer" className="hover:text-white transition transform hover:scale-125 duration-300">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/chandan-m911/" target="_blank" rel="noreferrer" className="hover:text-white transition transform hover:scale-125 duration-300">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/maurya_.911/" target="_blank" rel="noreferrer" className="hover:text-white transition transform hover:scale-125 duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-4 border-t border-white/10 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <div className="text-center md:text-left">
          Copyright © 2025 Chandan. All rights reserved.
        </div>
        <div className="text-center md:text-right mt-4 md:mt-0">
          📍 <a href="https://www.google.com/maps/place/Amritsar,+Punjab,+India" target="_blank" rel="noreferrer" className="hover:text-white underline">India</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
