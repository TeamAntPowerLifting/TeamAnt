import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
// import AntMain from './pages/AntMain';
// import AntAbout from './pages/AntAbout';
// import AntCoaching from './pages/AntCoaching';
// import AntCoaches from './pages/AntCoaches';
// import AntArticleList from './pages/AntArticleList';
// import AntContact from './pages/AntContact';
// import AntPrice from './pages/AntPrice';
// import AntArticle from './pages/AntArticle';
// import AntReviews from './pages/AntReviews';

export default (
  <Route>
    <Route path="/" />
    <Route path="/about" />
    <Route path="/coaching" />
    <Route path="/coaches" />
    <Route path="/reviews" />
    <Route path="/price" />
    <Route path="/article" />
    <Route path="/article/:id" />
    <Route path="/contact" />
  </Route>
);
