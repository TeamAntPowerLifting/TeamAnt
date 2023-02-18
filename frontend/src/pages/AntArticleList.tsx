import React from 'react';
import Headers from '@/components/headers/header';
import Footer from '@/components/footers/footer';
import Article from '@/components/articles/article';
const AntArticle = () => {
  return (
    <div className="flex flex-col h-screen">
      <Headers />
      <div className="flex-1 pt-28">
        <Article />
      </div>
      <Footer />
    </div>
  );
};

export default AntArticle;
