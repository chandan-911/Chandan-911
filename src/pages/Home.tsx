// src/pages/Home.tsx
import { FaGithub, FaLinkedin, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0d0d0d] text-white px-4 sm:px-6 py-24 relative overflow-hidden flex flex-col items-center justify-center"
      aria-labelledby="home-heading"
    >
      {/* Background Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-800 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-sky-700 to-transparent rounded-full blur-3xl opacity-20 animate-ping"></div>

      <div className="relative z-10 text-center max-w-4xl" data-aos="fade-up">
        <h1
          id="home-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow"
        >
          Hi, I'm <span className="text-blue-400">Chandan</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mb-6">
          Final-year CSE student at GNDEC, Ludhiana | Full-stack web developer | AI & ML enthusiast | Hackathon Finalist | Community Volunteer | Passionate about real-world impact
        </p>

        {/* Highlights */}
        <div
          className="bg-[#1c1c1c]/60 border border-white/10 backdrop-blur-md rounded-xl shadow-inner px-6 py-4 text-left max-w-xl mx-auto mb-10 transition-transform hover:scale-[1.015]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-gray-300 mb-2">
            🎓 <span className="text-white font-semibold">B.Tech CSE</span>, GNDEC Ludhiana (2022–2026)
          </p>
          <p className="text-gray-300 mb-2">
            📊 <span className="text-white font-semibold">CGPA:</span> 7.32
          </p>
          <p className="text-gray-300 mb-1">
            💼 <span className="text-white font-semibold">Internships:</span> IDS (ML), Elevate Labs, GDSC – Gen AI (Google Cloud)
          </p>
          <p className="text-gray-300">
            🚀 <span className="text-white font-semibold">Projects:</span> Trakki (Hackathon), Virtual Herbal Garden (SIH), ML Regression Suite, GDSC AI tools
          </p>
        </div>

        {/* New Personal Message */}
        <p className="text-sm text-slate-400 mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="150">
          “Driven by curiosity, I thrive on building intelligent and accessible applications that create meaningful change in society. Let’s build something impactful together.”
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4" data-aos="zoom-in" data-aos-delay="200">
          <a
            href="https://github.com/chandan-911"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-neutral-900 hover:bg-neutral-800 hover:scale-105 rounded-full flex items-center gap-2 text-sm border border-white/10 shadow hover:shadow-blue-400 transition-all duration-200"
            title="Visit GitHub"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/chandan-m911/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 hover:scale-105 rounded-full flex items-center gap-2 text-sm shadow hover:shadow-blue-400 transition-all duration-200"
            title="Visit LinkedIn"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <Link
            to="/resume"
            className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 hover:scale-105 rounded-full flex items-center gap-2 text-sm shadow hover:shadow-emerald-400 transition-all duration-200"
            title="View Resume"
          >
            <FaEye /> View Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
