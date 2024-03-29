import React, { useEffect } from 'react';
import Headers from '@/components/headers/headers';
import Footer from '@/components/footers/footers';
import { useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'src/media.css';

const AntArticle = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col h-screen">
      <Headers />
      <div className="flex-1 pt-28 pb-28">
        <div className="relative">
          <div className="w-full md: w-3/5 lg:w-2/5 mx-auto">
            <div className="w-full text-gray-800 text-center text-4xl px-5 font-bold leading-none mt-16">
              {location.state.title}
            </div>

            <div className="mx-5 mt-16  flex justify-center">
              <LazyLoadImage src={location.state.image} />
            </div>
            <p className="text-center text-xs text-gray-400 mt-2">
              {location.state.title2}
            </p>

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
