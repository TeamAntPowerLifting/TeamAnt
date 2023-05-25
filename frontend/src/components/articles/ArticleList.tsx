import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface contextType {
  id: number;
  title: string;
  title2: string;
  context: string;
  date: string;
  image: string;
}
const ArticleList = (props: contextType) => {
  const navigate = useNavigate();
  const ArticleClick = (props: contextType) => {
    navigate(`/article/${props.id}`, { state: props });
  };
  return (
    <div className="lg:mx-10 mt-7">
      <div>
        <LazyLoadImage
          className="object-cover h-64 w-full rounded-lg"
          src={props.image}
          alt=""
        />
        <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9">
          {' '}
          Article{' '}
        </span>
        <p className="mt-6 text-xl font-semibold">
          <a
            onClick={() => ArticleClick(props)}
            className="text-black cursor-pointer "
          >
            {' '}
            {props.title}
          </a>
        </p>
        <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
        <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
          {' '}
          {props.date}
        </span>
      </div>
    </div>
  );
};

export default ArticleList;
