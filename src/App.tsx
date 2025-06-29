// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Coding from './pages/Coding';
import Github from './pages/Github';
import Navbar from './components/Navbar';
import Footer from './components/footer'; // ✅ Capitalized filename for consistency

function App() {
  return (
    <Router>
      <Navbar />

      <main className="pt-16 bg-[#0d0d0d] min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />           {/* 🏠 Default route */}
          <Route path="/home" element={<Home />} />       {/* 🔁 Optional alias */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/github" element={<Github />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
