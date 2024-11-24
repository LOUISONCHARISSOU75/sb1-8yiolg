import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Demo from './pages/Demo';
import DemoInteractive from './pages/DemoInteractive';
import GetStarted from './pages/GetStarted';
import Download from './pages/Download';
import Footer from './components/Footer';
import FrameFlames from './components/FrameFlames';
import AnimatedBackground from './components/AnimatedBackground';
import AmbientAudio from './components/AmbientAudio';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white relative">
        <AnimatedBackground />
        <FrameFlames />
        <div className="relative z-10">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/demo/interactive" element={<DemoInteractive />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/download" element={<Download />} />
          </Routes>
          <Footer />
        </div>
        <AmbientAudio />
      </div>
    </Router>
  );
};

export default App;