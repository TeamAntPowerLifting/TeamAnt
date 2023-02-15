import React from 'react';
import { useNavigate } from 'react-router-dom';

const art = (props: any) => {
  const navigate = useNavigate();
  const ArticleClick = (props: any) => {
    navigate(`/article/${props.idx}`, { state: props });
  };
  return (
    <div className="lg:mx-20 mt-7">
      <img
        className="object-cover h-64 w-full rounded-lg "
        src={props.image}
        alt=""
      />

      <div className="flex flex-col justify-between py-6 ">
        <a
          onClick={() => ArticleClick(props)}
          className="text-xl font-semibold text-gray-800 hover:underline"
        >
          {props.title}
        </a>

        <span className="text-sm text-gray-500">{props.date}</span>
      </div>
    </div>
  );
};

export default art;
