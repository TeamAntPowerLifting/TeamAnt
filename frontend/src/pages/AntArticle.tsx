import React from 'react';
import Headers from '@/components/headers/header';
import Footer from '@/components/footers/footer';
import { useLocation } from 'react-router-dom';

const AntArticle = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col h-screen">
      <Headers />
      <div className="flex-1">
        <div className="relative">
          <div className="w-full md: w-3/5 lg:w-2/5 mx-auto">
            <div className="w-full text-gray-800 text-center text-4xl px-5 font-bold leading-none mt-16">
              {location.state.title}
            </div>

            <div className="mx-5 mt-16">
              <img src={location.state.image} />
            </div>

            <div className="px-5 text-lg w-full mx-auto whitespace-pre-wrap">
              <p className="my-5">{location.state.context}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AntArticle;
