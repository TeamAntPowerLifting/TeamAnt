import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const art = (props: any) => {
  const navigate = useNavigate();
  const ArticleClick = (props: any) => {
    navigate(`/article/${props.id}`, { state: props });
  };
  return (
    <div className="lg:mx-10 mt-7">
      {/* <div>
        <LazyLoadImage
          className="object-cover h-64 w-full rounded-lg"
          src={props.image}
          alt=""
        />
      </div> */}

      {/* <div className="flex flex-col justify-between py-6 ">
        <a
          onClick={() => ArticleClick(props)}
          className="text-xl font-semibold text-gray-800 hover:underline"
        >
          {props.title}
        </a>

        <span className="text-sm text-gray-500">{props.date}</span>
      </div> */}

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
        {/* <p className="mt-4 text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p> */}
        <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
        <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
          {' '}
          {props.date}
        </span>
      </div>
    </div>
  );
};

export default art;
