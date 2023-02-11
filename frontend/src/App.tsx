import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headers from './components/headers/header';
import AntMain from './pages/AntMain';
import AntAbout from './pages/AntAbout';
import AntCoaching from './pages/AntCoaching';
import AntCoaches from './pages/AntCoaches';
import AntArticle from './pages/AntArticle';
import AntContact from './pages/AntContact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AntMain />} />
        <Route path="/about" element={<AntAbout />} />
        <Route path="/coaching" element={<AntCoaching />} />
        <Route path="/coaches" element={<AntCoaches />} />
        <Route path="/article" element={<AntArticle />} />
        <Route path="/contact" element={<AntContact />} />
      </Routes>
    </Router>
  );
}

export default App;
