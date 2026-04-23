import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import CV from './pages/Cv';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Creative from './pages/Creative';
import VideoIntro from './pages/VideoIntro';
import Contact from './pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/video" element={<VideoIntro />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};


function App() {

  return (
    <Router>
      <AppRoutes />
      <Toaster />
    </Router>
  )
}

export default App