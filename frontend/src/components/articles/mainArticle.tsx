import React from 'react';
import articleContext from './articleContext';
import Mainart from './mainart';
import { useNavigate } from 'react-router-dom';

const mainArticle = () => {
  const navigate = useNavigate();
  const article = articleContext.slice(0, 3);
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

export default mainArticle;
