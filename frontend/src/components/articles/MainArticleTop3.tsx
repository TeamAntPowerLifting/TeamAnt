import React from 'react';
import ArticleContext from '../../constants/articles/ArticleContext';
import Mainart from './MainArtList';
import { useNavigate } from 'react-router-dom';

const MainArticleTop3 = () => {
  const navigate = useNavigate();
  const article = ArticleContext.slice(0, 3);
  return (
    <div>
      <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
        {article.map((i) => (
          <Mainart key={i.id} props={i} />
        ))}
      </div>
    </div>
  );
};

export default MainArticleTop3;
