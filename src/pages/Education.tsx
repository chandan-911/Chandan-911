import { FaGraduationCap, FaStar } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      level: "Graduation",
      institution: "Guru Nanak Dev Engineering College, Ludhiana",
      period: "2022 – 2026",
      degree: "B.Tech in Computer Science and Engineering",
      details: [
        "Current CGPA: 7.32",
        "Relevant Courses: DSA, Operating Systems, AI, Web Development"
      ]
    },
    {
      level: "Senior Secondary (12th)",
      institution: "Guru Nanak Public Senior Secondary School, Amritsar",
      period: "2020 – 2022",
      degree: "PSEB – Non-Medical Stream",
      details: [
        "Score: 94%",
        "Subjects: Physics, Chemistry, Math, Computer Science"
      ]
    },
    {
      level: "Matriculation (10th)",
      institution: "Guru Nanak Public Senior Secondary School, Amritsar",
      period: "2019 – 2020",
      degree: "PSEB Board",
      details: [
        "Score: 96%",
        "Passed with All Core Subjects"
      ]
    }
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-[#0d0d0d] text-white px-6 py-28 relative overflow-hidden"
    >
      {/* Glowing Backgrounds */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-800 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-sky-700 to-transparent rounded-full blur-3xl opacity-20 animate-ping"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400 drop-shadow">
          🎓 My Academic Journey
        </h2>

        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#1a1a1a]/70 to-[#0d0d0d]/60 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-md hover:shadow-blue-600/20 transition-all"
            >
              <h3 className="text-2xl font-semibold text-blue-300 flex items-center gap-2 mb-1">
                <FaGraduationCap className="text-white" /> {edu.level}
              </h3>
              <p className="text-lg font-medium text-white">{edu.institution}</p>
              <p className="text-sm text-gray-400 italic">{edu.period}</p>
              <p className="text-gray-300 mt-2 mb-3">{edu.degree}</p>
              <ul className="list-disc list-inside space-y-1">
                {edu.details.map((point, idx) => (
                  <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                    <FaStar className="text-yellow-400" /> {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
