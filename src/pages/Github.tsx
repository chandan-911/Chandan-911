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
    <section className="min-h-screen bg-[#0d0d0d] text-white px-6 py-28" id="github">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">🐙 GitHub Repositories</h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading repositories...</p>
        ) : error ? (
          <p className="text-center text-red-400">
            Failed to load repositories. Please try again later.
          </p>
        ) : repos.length === 0 ? (
          <p className="text-center text-gray-400">No public repositories found.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {repos.slice(0, 10).map((repo) => (
              <div
                key={repo.id}
                className="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-300">{repo.name}</h3>
                <p className="text-sm text-gray-400 mt-2 mb-3">
                  {repo.description || 'No description provided.'}
                </p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-green-400 hover:underline"
                >
                  🔗 View on GitHub
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Github;
