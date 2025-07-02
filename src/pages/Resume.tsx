// Resume.tsx – Clean PDF Viewer Page with Download & View Options
import { FaDownload, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <section className="min-h-screen bg-[#0d0d0d] text-white px-4 py-24 relative overflow-hidden">
      {/* Gradient Background Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-700 to-transparent rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-teal-600 to-transparent rounded-full blur-3xl opacity-20 animate-ping" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-6 drop-shadow">
          📄 My Resume
        </h1>
        <p className="text-gray-300 mb-8 text-base sm:text-lg max-w-2xl mx-auto">
          Below is a view of my professional resume. You can download it directly or reach out if you’d like a custom version for a specific opportunity.
        </p>

        {/* PDF Viewer */}
        <div className="w-full h-[75vh] bg-[#121212] border border-white/10 rounded-xl overflow-hidden shadow-lg mb-6">
          <iframe
            src="/Chandan-Resume.pdf"
            title="Chandan Resume PDF"
            className="w-full h-full"
            frameBorder="0"
          >
            <p className="text-gray-400 p-4">
              Your browser does not support PDF viewing. Please{' '}
              <a
                href="/Chandan-Resume.pdf"
                download
                className="text-blue-400 underline"
              >
                download the resume
              </a>{' '}
              instead.
            </p>
          </iframe>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            to="/home"
            className="px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center gap-2 text-sm border border-white/10 shadow hover:shadow-blue-400 transition"
          >
            <FaArrowLeft /> Back to Home
          </Link>

          <a
            href="/Chandan-Resume.pdf"
            download
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-full flex items-center gap-2 text-sm shadow hover:shadow-indigo-400 transition"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
