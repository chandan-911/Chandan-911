// Navbar.tsx - Mobile Responsive Glassmorphic Navigation Bar
import { useState } from 'react';
import { FaHome, FaCode, FaGraduationCap, FaProjectDiagram, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState('/Home');
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/Home', icon: <FaHome />, label: 'Home' },
    { href: '/projects', icon: <FaProjectDiagram />, label: 'Projects' },
    { href: '/education', icon: <FaGraduationCap />, label: 'Education' },
    { href: '/coding', icon: <FaCode />, label: 'Coding' },
    { href: '/github', icon: <FaGithub />, label: 'GitHub' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/10 shadow-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-white tracking-widest">Chandan</div>

        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition duration-300 ${
                  active === link.href
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/20'
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#1a1a1a] border-t border-white/10 px-6 py-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  active === link.href
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.icon} {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
