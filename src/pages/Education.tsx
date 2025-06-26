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
    <section className="min-h-screen bg-[#0d0d0d] text-white px-6 py-28" id="education">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">🎓 My Academic Journey</h2>

        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#1f1f1f] to-[#121212] p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-400 flex items-center gap-2 mb-1">
                <FaGraduationCap className="text-white" /> {edu.level}
              </h3>
              <p className="text-lg text-white font-medium">{edu.institution}</p>
              <p className="text-sm text-gray-400 italic">{edu.period}</p>
              <p className="text-gray-300 mt-2 mb-2">{edu.degree}</p>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                {edu.details.map((point, idx) => (
                  <li key={idx}><FaStar className="inline-block text-yellow-400 mr-1" />{point}</li>
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
