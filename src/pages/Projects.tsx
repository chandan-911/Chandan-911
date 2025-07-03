// src/pages/Projects.tsx
const Projects = () => {
  const projects = [
    {
      title: "Trakki – Hackathon Project",
      description:
        "A social mentorship platform for rural government school students. Built @ Alert Enterprises hackathon.",
      tech: ["React", "Firebase", "Tailwind"],
      link: "https://chandan-911.github.io/Trakki/",
      github: "https://github.com/chandan-911/Trakki",
    },
    {
      title: "ML Internship @ IDS",
      description:
        "Built multiple ML models including regression calculators, fashion classifiers, and data analytics dashboards.",
      tech: ["Python", "Scikit-learn", "Flask", "Pandas"],
      github: "https://github.com/chandan-911/ML-Internship",
    },
    {
      title: "Virtual Herbal Garden – SIH 2024",
      description:
        "Educational tool to explore medicinal herbs using AI & visual 3D interaction. Finalist project at SIH Hackathon.",
      tech: ["HTML", "CSS", "JS", "Bootstrap"],
      link: "https://srijansingh9.github.io/virtual-herbal-garden/",
    },
    {
      title: "AI/ML Internship @ Elevate Labs",
      description:
        "Built multiple ML models, tackled all types of algorithms like Linear Regression, Logistic Regression, SVM, Non-SVM etc.",
      tech: [
        "Python",
        "Scikit-learn",
        "Numpy",
        "Pandas",
        "Matplotlib",
        "Plotly",
        "Tkinter",
        "Streamlit",
      ],
      github: "https://github.com/chandan-911/ElevateLabsInternshipML",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0d0d0d] text-white px-4 sm:px-6 py-28 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Decorative Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-indigo-800 to-transparent rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-purple-700 to-transparent rounded-full blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2
          id="projects-heading"
          className="text-4xl sm:text-5xl font-bold text-center text-purple-400 drop-shadow mb-12"
          data-aos="fade-down"
        >
          🚀 My Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <article
              key={index}
              className="bg-gradient-to-br from-[#1f1f1f]/70 to-[#111]/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-md hover:shadow-purple-500/30 transition-all hover:scale-[1.02]"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <header>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">
                  {proj.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{proj.description}</p>
              </header>

              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-[#121212] text-slate-300 border border-gray-700 rounded-full hover:bg-[#1e1e1e] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <footer className="flex gap-4 text-sm font-medium">
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline hover:text-blue-300 transition"
                  >
                    🌐 Live Demo
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline hover:text-green-300 transition"
                  >
                    📂 GitHub
                  </a>
                )}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
