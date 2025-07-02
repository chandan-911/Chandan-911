import { useEffect, useState } from 'react';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
}

const Github = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/chandan-911/repos')
      .then((res) => {
        if (!res.ok) {
          throw new Error('GitHub API Error');
        }
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

  return (
    <section
      id="github"
      className="min-h-screen bg-[#0d0d0d] text-white px-4 sm:px-6 py-28 relative overflow-hidden"
      aria-labelledby="github-heading"
    >
      {/* Background Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-700 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-cyan-700 to-transparent rounded-full blur-3xl opacity-20 animate-ping"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2
          id="github-heading"
          className="text-4xl sm:text-5xl font-bold text-center mb-12 text-blue-400 drop-shadow"
        >
          🐙 GitHub Repositories
        </h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading repositories...</p>
        ) : error ? (
          <p className="text-center text-red-400">
            Failed to load repositories. Please try again later.
          </p>
        ) : repos.length === 0 ? (
          <p className="text-center text-gray-400">
            No public repositories found.
          </p>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.slice(0, 9).map((repo) => (
              <article
                key={repo.id}
                className="bg-gradient-to-br from-[#1a1a1a]/70 to-[#0f0f0f]/50 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-md hover:shadow-blue-600/30 transition-all"
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                  {repo.name}
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  {repo.description || 'No description provided.'}
                </p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-400 hover:underline"
                >
                  🔗 View on GitHub
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Github;
