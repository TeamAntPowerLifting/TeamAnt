import React from 'react';
import { useNavigate } from 'react-router-dom';
const mainart = (props: any) => {
  const navigate = useNavigate();
  const ArticleClick = (props: any) => {
    navigate(`/article/${props.props.id}`, { state: props.props });
  };
  return (
    <div className="">
      <div className="py-4">
        <h2 className="mb-3 text-2xl font-bold leading-9 text-red-800">
          {props.props.title}
        </h2>
        <p className="text-base leading-7 text-gray-400">
          {props.props.context.substr(0, 100)}
        </p>
      </div>
      <a
        onClick={() => ArticleClick(props)}
        className="mb-0 bg-white text-base"
      >
        더보기
      </a>
    </div>
  );
};

export default mainart;
