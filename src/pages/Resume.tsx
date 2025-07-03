import { FaDownload, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { motion } from 'framer-motion';

const Resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <section className="min-h-screen bg-[#0d0d0d] text-white px-4 py-24 relative overflow-hidden">
      {/* Glowing Gradient Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-700 to-transparent rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-teal-600 to-transparent rounded-full blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-blue-400 mb-6 drop-shadow"
        >
          📄 My Resume
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-300 mb-8 text-base sm:text-lg max-w-2xl mx-auto"
        >
          Below is a view of my professional resume. You can also download it directly.
        </motion.p>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full h-[75vh] border border-white/10 rounded-xl shadow-lg bg-white overflow-hidden mb-6"
        >
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={`${import.meta.env.BASE_URL}Chandan-Resume.pdf`} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link
            to="/home"
            className="px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center gap-2 text-sm border border-white/10 shadow hover:shadow-blue-400 transition"
          >
            <FaArrowLeft /> Back to Home
          </Link>

          <a
            href={`${import.meta.env.BASE_URL}Chandan-Resume.pdf`}
            download
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-full flex items-center gap-2 text-sm shadow hover:shadow-indigo-400 transition"
          >
            <FaDownload /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
