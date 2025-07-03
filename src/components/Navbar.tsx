// src/components/Navbar.tsx
import { useState } from 'react';
import {
  FaHome,
  FaCode,
  FaGraduationCap,
  FaProjectDiagram,
  FaGithub,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const active = location.pathname;

  const navLinks = [
    { href: '/home', icon: <FaHome />, label: 'Home' },
    { href: '/projects', icon: <FaProjectDiagram />, label: 'Projects' },
    { href: '/education', icon: <FaGraduationCap />, label: 'Education' },
    { href: '/coding', icon: <FaCode />, label: 'Coding' },
    { href: '/github', icon: <FaGithub />, label: 'GitHub' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0d0d0d] bg-opacity-95 backdrop-blur-md shadow-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/home" className="text-2xl font-extrabold text-cyan-400 tracking-wide hover:scale-105 transition-transform">
          Chandan
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  active === link.href
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#0f172a] px-6 py-4 space-y-3 shadow-lg border-t border-white/10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition ${
                  active === link.href
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
