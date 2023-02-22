import React from 'react';
import { useNavigate } from 'react-router-dom';

const price = (props: any) => {
  const navigate = useNavigate();
  const ArticleClick = () => {
    navigate('/contact/');
  };
  return (
    <div className="overflow-hidden bg-gray-100 border-2 border-transparent rounded-md">
      <div className="p-6 md:py-8 md:px-9">
        <h3 className="text-xl font-semibold text-black mb-5">{props.tab}</h3>
        {props.tab == `Online coaching` ? (
          <div className="flex items-end mt-5">
            <div className="flex items-start">
              <span className="text-xl font-medium text-black"> ₩ </span>
              <p className="text-5xl font-medium tracking-tight">
                {props.price}
              </p>
            </div>
            <span className="ml-0.5 text-lg text-gray-600">
              {' '}
              / {props.month}month{' '}
            </span>
          </div>
        ) : (
          <div className="">
            <span className="ml-0.5 text-lg text-gray-600">
              {' '}
              {props.content}
            </span>
          </div>
        )}

        <a
          onClick={ArticleClick}
          title=""
          className="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold text-white transition-all duration-200 border-2 border-transparent rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
          role=""
        >
          문의하기
        </a>
      </div>
    </div>
  );
};

export default price;
