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
const MainArtList = (props: props) => {
  const navigate = useNavigate();
  const ArticleClick = (props: props) => {
    navigate(`/article/${props.props.id}`, { state: props.props });
  };
  return (
    <div className="">
      <div className="py-4">
        <img
          className="object-cover h-48 cursor-pointer lg:hover:scale-110 transition-transform ease-in-out duration-500 mb-10"
          src={props.props.image}
          alt=""
        />
        <h2 className="mb-3 text-2xl font-bold leading-9 text-red-800">
          {props.props.title}
        </h2>
        <p className="text-base leading-7 text-gray-400">
          {props.props.context.substr(0, 100)}
        </p>
      </div>
      <a
        onClick={() => ArticleClick(props)}
        className="mb-0 bg-white text-base text-right left:0 cursor-pointer "
      >
        더보기
      </a>
    </div>
  );
};

export default MainArtList;
