import React, { useState } from 'react';
import articlePic from '../../assets/images/article.jpg';
import articleContext from '../../constants/articles/ArticleContext';
import Art from './ArticleList';

const Article = () => {
  const article = articleContext;
  return (
    <div>
      <section className="bg-white ">
        <div className="container px-6 py-10 mx-auto">
          <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
            {article.map((art, idx) => (
              <Art
                date={art.date}
                id={idx}
                title={art.title}
                title2={art.title2}
                context={art.context}
                image={art.image}
                key={idx}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
