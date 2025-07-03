// src/pages/Coding.tsx
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

const Coding = () => {
  const profiles = [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/chandan911/',
      username: 'chandan911',
      icon: '🧠',
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/chandan_911',
      username: 'chandan_911',
      icon: '🍜',
    },
  ];

  const skills = [
    'C',
    'C++',
    'Python',
    'DSA',
    'OOPs',
    'DBMS',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
  ];

  return (
    <section
      id="coding"
      className="min-h-screen bg-[#0d0d0d] text-white px-4 sm:px-6 py-28 relative"
      aria-labelledby="coding-heading"
    >
      {/* Glowing BG Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-800 to-transparent rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-sky-700 to-transparent rounded-full blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2
          id="coding-heading"
          className="text-4xl sm:text-5xl font-bold mb-12 text-center text-blue-400 drop-shadow"
          data-aos="fade-down"
        >
          💡 Coding Profiles
        </h2>

        {/* Coding Profiles */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {profiles.map((site, index) => (
            <a
              key={index}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a]/80 hover:bg-[#222] border border-white/10 rounded-xl p-6 shadow-md hover:shadow-xl transition transform hover:scale-[1.02]"
              aria-label={`Visit ${site.name} profile`}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >
              <h3 className="text-xl font-semibold flex items-center gap-2 text-white mb-1">
                {site.icon} {site.name}
              </h3>
              <p className="text-sm text-gray-400 mb-2">@{site.username}</p>
              <span className="text-blue-400 text-sm inline-flex items-center gap-1">
                Visit <FaExternalLinkAlt />
              </span>
            </a>
          ))}
        </div>

        {/* Skills */}
        <h3
          className="text-2xl font-semibold text-white mb-4 text-center"
          data-aos="fade-right"
        >
          🛠️ Technical Skills
        </h3>

        <div
          className="flex flex-wrap justify-center gap-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-1 text-sm rounded-full border border-cyan-500/30 bg-[#121212]/60 hover:bg-[#1f1f1f] text-slate-300 shadow-inner backdrop-blur-sm transition-all duration-300"
            >
              <FaCode className="inline-block mr-2 text-blue-400" />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coding;
