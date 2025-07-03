// src/pages/Education.tsx
const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Guru Nanak Dev Engineering College, Ludhiana',
      duration: '2022 – 2026',
      score: 'CGPA: 7.32',
      desc: 'Actively involved in AI/ML, web development, and social impact projects like Trakki and SIH.',
    },
    {
      degree: 'Higher Secondary (12th – Non-Medical)',
      institution: 'Guru Nanak Public Senior Secondary School, Amritsar',
      duration: '2020 – 2022',
      score: '94%',
      desc: 'Excelled in Mathematics, Physics, and Computer Science. Participated in school-level tech events.',
    },
    {
      degree: 'Matriculation (10th)',
      institution: 'Guru Nanak Public Senior Secondary School, Amritsar',
      duration: '2019 – 2020',
      score: '96%',
      desc: 'Completed all core subjects like Computer, Science, SST, and language subjects.',
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-[#0d0d0d] text-white px-4 sm:px-6 py-28 relative"
      aria-labelledby="education-heading"
    >
      {/* Glowing Background Lights */}
      <div className="absolute -top-32 -left-32 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-br from-green-800 to-transparent rounded-full blur-3xl opacity-25 animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-teal-700 to-transparent rounded-full blur-3xl opacity-15 animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2
          id="education-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-emerald-400 mb-12 drop-shadow"
          data-aos="fade-down"
        >
          🎓 Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a]/60 border border-white/10 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-emerald-400/30 transition-all hover:scale-[1.015]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-teal-300">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{edu.institution}</p>
              <p className="text-sm text-gray-400">
                🗓️ {edu.duration} | 📊 {edu.score}
              </p>
              <p className="mt-2 text-gray-300 text-sm">{edu.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
