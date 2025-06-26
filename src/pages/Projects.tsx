// Projects.tsx - Professional Projects Page with TailwindCSS (Theme: Dark Futuristic)
// import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Trakki – Hackathon Project",
      description:
        "A social mentorship platform for rural government school students. Built @ Alert Enterprises hackathon.",
      tech: ["React", "Firebase", "Tailwind"],
      link: "https://chandan-911.github.io/Trakki/",
      github: "https://github.com/chandan-911/Trakki"
    },
    {
      title: "ML Internship @ IDS",
      description:
        "Built multiple ML models including regression calculators, fashion classifiers, and data analytics dashboards.",
      tech: ["Python", "Scikit-learn", "Flask", "Pandas"],
      github: "https://github.com/chandan-911/ML-Internship"
    },
    {
      title: "Virtual Herbal Garden – SIH 2024",
      description:
        "Educational tool to explore medicinal herbs using AI & visual 3D interaction. Finalist project at SIH Hackathon.",
      tech: ["HTML", "CSS", "JS", "Bootstrap"],
      link: "https://srijansingh9.github.io/virtual-herbal-garden/"
    },
    {
      title: "AI/ML Internship @ Elevate Labs",
      description:
        "Built multiple ML models, tackled all types of algorithms like Linear Regression, Logistic Regression, SVM, Non-SVM etc.",
      tech: ["Python", "Scikit-learn", "Numpy", "Pandas", "Matplotlib", "Plotly", "Tkinter", "Streamlit"],
      github: "https://github.com/chandan-911/ElevateLabsInternshipML"
    }
  ];

  return (
    <section className="min-h-screen bg-[#0d0d0d] text-white px-6 py-28" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">🚀 My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-white/10 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-2 text-purple-300">{proj.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-gray-800 border border-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    🌐 Live Demo
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-green-400 hover:underline"
                  >
                    📂 GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
