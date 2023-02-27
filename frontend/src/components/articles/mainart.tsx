import React from 'react';
import { useNavigate } from 'react-router-dom';
interface contextType {
  id: number;
  title: string;
  title2: string;
  context: string;
  date: string;
  image: string;
}
type props = {
  props: contextType;
};
const mainart = (props: props) => {
  const navigate = useNavigate();
  const ArticleClick = (props: props) => {
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
        className="mb-0 bg-white text-base text-right left:0"
      >
        더보기
      </a>
    </div>
  );
};

export default mainart;
