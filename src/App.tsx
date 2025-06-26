import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Coding from './pages/Coding';
import Github from './pages/Github';
import Navbar from './components/Navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/github" element={<Github />} />
      </Routes>
      <Footer /> {/* ✅ Render Footer outside of Routes */}
    </Router>
  );
}

export default App;
