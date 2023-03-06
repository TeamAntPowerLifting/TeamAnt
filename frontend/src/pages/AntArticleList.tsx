import React, { useEffect } from 'react';
import Headers from '@/components/headers/Header';
import Footer from '@/components/footers/Footer';
import Article from '@/components/articles/article';
import { useLocation } from 'react-router-dom';
import SubTtitle from '@/components/titles/SubTtitle';
const AntArticle = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="flex flex-col h-screen">
      <Headers />
      <div className="flex-1 pt-28 pb-28">
        <div className="pt-10">
          <SubTtitle title1={`Article`} title2={`TeamAnt`} title3={`Article`} />
        </div>
        <Article />
      </div>
      <Footer />
    </div>
  );
};

export default AntArticle;
