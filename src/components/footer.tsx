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
    <footer className="bg-gradient-to-br from-[#0d0d0d] via-[#121212] to-[#1c1c1c] text-gray-300 pt-12 pb-4 px-4 sm:px-6 border-t border-white/10 shadow-inner">
      <div className="max-w-6xl mx-auto grid gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* About */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">🌟 About Me</h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            I'm <strong>Chandan</strong>, a CSE student from GNDEC, passionate about AI, full-stack dev, and building real-world tech solutions. Always innovating, always growing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">⚡ Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/Home" className="hover:text-cyan-400 transition">🏠 Home</a></li>
            <li><a href="/projects" className="hover:text-cyan-400 transition">🚀 Projects</a></li>
            <li><a href="/education" className="hover:text-cyan-400 transition">🎓 Education</a></li>
            <li><a href="/coding" className="hover:text-cyan-400 transition">💻 Coding</a></li>
            <li><a href="/github" className="hover:text-cyan-400 transition">🐙 GitHub</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">📬 Connect</h4>
          <div className="space-y-3 text-sm text-slate-400">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-white" />
              <a href="mailto:ck7464877@gmail.com" className="hover:text-white transition">
                ck7464877@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-white" />
              <a href="tel:+919915126389" className="hover:text-white transition">
                +91-99151-26389
              </a>
            </p>

            <p className="flex items-center gap-2">
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
            <div className="flex gap-4 text-xl pt-3">
              <a
                href="https://github.com/chandan-911"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition hover:scale-125 duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/chandan-m911/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition hover:scale-125 duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/maurya_.911/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition hover:scale-125 duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="mt-10 border-t border-white/10 pt-4 px-4 sm:px-6 text-xs flex flex-col sm:flex-row items-center justify-between text-slate-500">
        <div>© 2025 Chandan. All rights reserved.</div>
        <div className="mt-2 sm:mt-0">
          📍 <a href="https://www.google.com/maps/place/Amritsar,+Punjab,+India" target="_blank" rel="noreferrer" className="hover:text-white underline">India</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
