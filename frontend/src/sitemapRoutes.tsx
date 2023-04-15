import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AntMain from './pages/AntMain';
import AntAbout from './pages/AntAbout';
import AntCoaching from './pages/AntCoaching';
import AntCoaches from './pages/AntCoaches';
import AntArticleList from './pages/AntArticleList';
import AntContact from './pages/AntContact';
import AntPrice from './pages/AntPrice';
import AntArticle from './pages/AntArticle';
import AntReviews from './pages/AntReviews';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AntMain />} />
        <Route path="/about" element={<AntAbout />} />
        <Route path="/coaching" element={<AntCoaching />} />
        <Route path="/coaches" element={<AntCoaches />} />
        <Route path="/reviews" element={<AntReviews />} />
        <Route path="/price" element={<AntPrice />} />
        <Route path="/article" element={<AntArticleList />} />
        <Route path="/article/:id" element={<AntArticle />} />
        <Route path="/contact" element={<AntContact />} />
      </Routes>
    </Router>
  );
}

export default App;
