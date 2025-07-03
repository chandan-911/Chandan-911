import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Coding from './pages/Coding';
import Github from './pages/Github';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import { useEffect } from 'react';

// ✅ Import AOS safely
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    // ✅ Prevent init on server
    if (typeof window !== 'undefined') {
      // ✅ Slight delay ensures DOM is ready
      setTimeout(() => {
        AOS.init({ duration: 800, once: true });
        AOS.refresh(); // ✅ Refresh for dynamic content
      }, 0);
    }
  }, []);

  return (
    <Router basename="/">
      <div className="scroll-smooth">
        <Navbar />

        <main className="pt-16 bg-[#0d0d0d] min-h-screen text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/coding" element={<Coding />} />
            <Route path="/github" element={<Github />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
