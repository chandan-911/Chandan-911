import { FaGithub, FaLinkedin, FaDownload, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-[#0d0d0d] text-white px-6 py-24relative overflow-hidden flex items-center justify-center">
      {/* Background gradient overlays */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-800 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-sky-700 to-transparent rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10 text-center max-w-4xl">
        {/* Glowing Initial Avatar */}
        {/* <div className="mx-auto mb-8 w-32 h-32 rounded-full bg-gradient-to-br from-[#222] to-[#111] shadow-lg flex items-center justify-center text-4xl font-black text-white border border-white/10 animate-pulse">
          C
        </div> */}

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Hi, I'm <span className="text-blue-400">Chandan</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          B.Tech CSE student @ GNDEC Ludhiana | Passionate about AI, Web Dev, ML, and real-world impact. 
          Social impact project contributor. Tech explorer. Hackathon finalist. Always learning.
        </p>

        <div className="bg-[#1c1c1c]/60 border border-white/10 backdrop-blur-md rounded-xl shadow-inner px-6 py-4 text-left max-w-xl mx-auto mb-10">
          <p className="text-gray-300 mb-2">🎓 <span className="text-white font-semibold">B.Tech CSE</span>, GNDEC Ludhiana (2022–2026)</p>
          <p className="text-gray-300 mb-2">📊 <span className="text-white font-semibold">CGPA:</span> 7.32</p>
          <p className="text-gray-300">🚀 <span className="text-white font-semibold">Projects:</span> Trakki | ML Internship @ IDS | Virtual Herbal Garden | GDSC AI Contributions</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/chandan-911"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-neutral-900 hover:bg-neutral-800 rounded-full flex items-center gap-2 text-sm border border-white/10"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/chandan-m911/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center gap-2 text-sm"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="/src/assets/Chandan's Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-full flex items-center gap-2 text-sm"
          >
            <FaDownload /> View Resume
          </a>
          <a
            href="/src/assets/Chandan's Resume.pdf"
            download
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-full flex items-center gap-2 text-sm"
          >
            <FaDownload /> Download
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
