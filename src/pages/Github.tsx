// src/pages/Github.tsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics?: string[];
}

const Github = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/chandan-911/repos', {
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json',
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API Error');
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('GitHub fetch error:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const topics = Array.from(new Set(repos.flatMap((repo) => repo.topics || [])));

  const filteredRepos = activeTopic
    ? repos.filter((repo) => repo.topics?.includes(activeTopic))
    : repos;

  return (
    <section
      id="github"
      className="min-h-screen bg-[#0d0d0d] text-white px-4 sm:px-6 py-28 relative overflow-hidden"
    >
      {/* Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-600 to-transparent rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-cyan-700 to-transparent rounded-full blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-blue-400 drop-shadow">
          🐙 GitHub Analytics
        </h2>

        {/* streak card  */}
        <div className="mb-12 flex justify-center" data-aos="fade-up" data-aos-delay="200">
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=chandan-911&theme=radical&hide_border=true"
            alt="GitHub Streak"
            className="rounded-lg w-full max-w-2xl shadow-lg"
          />
        </div>

        {/* Top Languages */}
        <div className="mb-12 flex justify-center" data-aos="fade-up" data-aos-delay="200">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=chandan-911&layout=compact&theme=radical&hide_border=true&langs_count=8"
            alt="Top Languages"
            className="rounded-lg w-full max-w-2xl shadow-lg"
          />
        </div>

        {/* Topic Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTopic(null)}
            className={`px-4 py-2 text-sm rounded-full transition ${activeTopic === null
              ? 'bg-green-600 text-white'
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
          >
            Show All
          </button>
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => setActiveTopic(topic)}
              className={`px-4 py-2 text-sm rounded-full transition ${activeTopic === topic
                ? 'bg-green-600 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Repo Cards */}
        {loading ? (
          <p className="text-center text-gray-400">Loading repositories...</p>
        ) : error ? (
          <p className="text-center text-red-400">
            Failed to load repositories. Please try again later.
          </p>
        ) : filteredRepos.length === 0 ? (
          <p className="text-center text-gray-400">No repositories match this topic.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.slice(0, 9).map((repo, index) => (
              <motion.article
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1a1a1a]/70 to-[#0f0f0f]/50 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-md hover:shadow-blue-600/30 hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-2 hover:text-blue-300 transition break-words">
                  {repo.name}
                </h3>
                <p className="text-sm text-gray-400 mb-3 min-h-[48px]">
                  {repo.description || 'No description provided.'}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                  {repo.language && <span>💻 {repo.language}</span>}
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>🍴 {repo.forks_count}</span>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-400 hover:underline hover:text-lime-300 transition"
                >
                  🔗 View on GitHub
                </a>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Github;
