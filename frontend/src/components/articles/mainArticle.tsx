import React from 'react';
import articleContext from './articleContext';
import Mainart from './mainart';

const mainArticle = () => {
  const article = articleContext.slice(0, 3);
  return (
    <div>
      <section className="flex items-center bg-white dark:bg-gray-800 font-poppins">
        <div className="p-4 mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center -mx-36">
            {article.map((i) => (
              <Mainart key={i.id} props={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default mainArticle;
