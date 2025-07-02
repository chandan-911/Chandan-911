import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0d0d0d] text-white px-4 sm:px-6 py-24 relative overflow-hidden flex flex-col items-center justify-center"
      aria-labelledby="home-heading"
    >
      {/* Glowing Background Gradient Overlays */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-800 to-transparent rounded-full blur-3xl opacity-30 transition duration-1000 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-sky-700 to-transparent rounded-full blur-3xl opacity-20 transition duration-1000 animate-ping"></div>

      <div className="relative z-10 text-center max-w-4xl">
        <h1
          id="home-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow"
        >
          Hi, I'm <span className="text-blue-400">Chandan</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-6">
          B.Tech CSE student @ GNDEC Ludhiana | Passionate about AI, Web Dev, ML, and real-world
          impact. Social impact project contributor. Tech explorer. Hackathon finalist. Always
          learning.
        </p>

        {/* Academic Highlight Card */}
        <div className="bg-[#1c1c1c]/60 border border-white/10 backdrop-blur-md rounded-xl shadow-inner px-6 py-4 text-left max-w-xl mx-auto mb-10">
          <p className="text-gray-300 mb-2">
            🎓 <span className="text-white font-semibold">B.Tech CSE</span>, GNDEC Ludhiana (2022–2026)
          </p>
          <p className="text-gray-300 mb-2">
            📊 <span className="text-white font-semibold">CGPA:</span> 7.32
          </p>
          <p className="text-gray-300">
            🚀 <span className="text-white font-semibold">Projects:</span> Trakki | ML Internship @ IDS | Virtual Herbal Garden | GDSC AI Contributions
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/chandan-911"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-neutral-900 hover:bg-neutral-800 rounded-full flex items-center gap-2 text-sm border border-white/10 shadow hover:shadow-blue-400 transition"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/chandan-m911/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center gap-2 text-sm shadow hover:shadow-blue-400 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="/Chandan-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-full flex items-center gap-2 text-sm shadow hover:shadow-emerald-400 transition"
          >
            <FaDownload /> View Resume
          </a>
          <a
            href="/Chandan-Resume.pdf"
            download
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-full flex items-center gap-2 text-sm shadow hover:shadow-indigo-400 transition"
          >
            <FaDownload /> Download
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
