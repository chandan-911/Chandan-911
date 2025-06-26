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

  const skills = ['C','C++','Python','DSA', 'OOPs','DBMS', 'HTML', 'CSS',];

  return (
    <section className="min-h-screen bg-[#0d0d0d] text-white px-6 py-28" id="coding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">💡 Coding Profiles</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {profiles.map((site, index) => (
            <a
              key={index}
              href={site.url}
              target="_blank"
              className="bg-[#1a1a1a] hover:bg-[#222] border border-white/10 rounded-xl p-6 transition shadow flex flex-col gap-2"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2">
                {site.icon} {site.name}
              </h3>
              <p className="text-gray-400 text-sm">@{site.username}</p>
              <span className="text-blue-400 inline-flex items-center gap-1 text-sm">
                Visit <FaExternalLinkAlt className="inline-block" />
              </span>
            </a>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-4">🧠 Key Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-1 text-sm rounded-full border border-gray-600 bg-[#121212] hover:bg-[#1f1f1f] text-gray-300 shadow-sm"
            >
              <FaCode className="inline-block mr-2 text-blue-400" /> {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coding;
