import React, { useEffect } from 'react';
import Headers from '@/components/headers/headers';
import Footer from '@/components/footers/footers';
import about1 from '../assets/images/about1.jpg';
import about2 from '../assets/images/about2.jpg';
import about3 from '../assets/images/about3.jpg';
import about4 from '../assets/images/about4.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'src/media.css';
import { useLocation } from 'react-router-dom';
import About from '@/components/abouts/About';
import AboutContext from '@/constants/abouts/AboutContext';
import SubTtitle from '@/components/titles/SubTtitle';

const AntAbout = () => {
  const location = useLocation();
  const aboutContext = AboutContext;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div className="flex flex-col h-screen">
        <Headers />
        <div className="flex-1 pt-28 mb-36">
          <div className="flex flex-col px-28 mx-auto space-y-12 max-w-7xl xl:px-32 pt-10 ">
            <div className="relative">
              <SubTtitle title1={`About`} title2={`About`} title3={`TeamAnt`} />
              <p className="w-full py-8 mx-auto mt-10 text-lg text-center text-gray-700 intro sm:max-w-3xl">
                우리가 어떠한 팀이고, 어떠한 비전과 가치관을 지니고 있는지
                소개해드립니다.
              </p>
            </div>
          </div>
          <section className="flex items-center mt-20">
            <div className="p-4 mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-4 lg:gap-20 sm:gap-4 sm:grid-cols-1 lg:grid-cols-1">
                {AboutContext.map((about, idx) => (
                  <About
                    image={about.image}
                    key={idx}
                    title={about.title}
                    subTitle={about.subTitle}
                    content={about.content}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AntAbout;
