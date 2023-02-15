import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headers from './components/headers/header';
import AntMain from './pages/AntMain';
import AntAbout from './pages/AntAbout';
import AntCoaching from './pages/AntCoaching';
import AntCoaches from './pages/AntCoaches';
import AntArticleList from './pages/AntArticleList';
import AntContact from './pages/AntContact';
import AntPrice from './pages/AntPrice';
import AntArticle from './pages/AntArticle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AntMain />} />
        <Route path="/about" element={<AntAbout />} />
        <Route path="/coaching" element={<AntCoaching />} />
        <Route path="/coaches" element={<AntCoaches />} />
        <Route path="/price" element={<AntPrice />} />
        <Route path="/article" element={<AntArticleList />} />
        <Route path="/article/:id" element={<AntArticle />} />
        <Route path="/contact" element={<AntContact />} />
      </Routes>
    </Router>
  );
}

export default App;
