import React, { useEffect, useState } from 'react';
import Headers from '@/components/headers/headers';
import Footer from '@/components/footers/footers';
import Coache from '@/components/coaches/coache';
import CoacheContext from '@/constants/coaches/CoachContext';
import 'src/media.css';
import { useLocation } from 'react-router-dom';
import SubTtitle from '@/components/titles/SubTtitle';
const AntCoaches = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [openTab, setOpenTap] = useState<number>(1);
  const coacheContext = CoacheContext;
  return (
    <div className="flex flex-col h-screen">
      <Headers />
      <div className="flex-1 pt-28 pb-28">
        <div className="py-10">
          <SubTtitle title1={`Coaches`} title2={`TeamAnt`} title3={`Coaches`} />
        </div>
        <div className="flex items-center justify-center max-h-screen mt-16 px-38 md:px-56">
          <ul className="mx-auto grid max-w-full w-full grid-cols-4 gap-x-5 ">
            <li className="">
              <a
                className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none transition-all duration-500 ease-in-out"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTap(1);
                }}
                href="#first"
              >
                정지훈 Coach
              </a>
            </li>

            <li className="">
              <a
                className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none transition-all duration-500 ease-in-out"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTap(2);
                }}
                href="#second"
              >
                김준희 Coach
              </a>
            </li>

            <li className="">
              <a
                className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none transition-all duration-500 ease-in-out"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTap(3);
                }}
                href="#third"
              >
                이지수 Coach
              </a>
            </li>

            <li className="">
              <a
                className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none transition-all duration-500 ease-in-out"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTap(4);
                }}
                href="#fourth"
              >
                김강윤 Coach
              </a>
            </li>
          </ul>
        </div>
        <div className="md:px-30">
          <div className={openTab === 1 ? 'block' : 'hidden'} id="first">
            <Coache
              title={coacheContext[0]?.title}
              image={coacheContext[0]?.image}
              locationImage={coacheContext[0]?.locationImage}
            />
          </div>
          <div className={openTab === 2 ? 'block' : 'hidden'} id="second">
            <Coache
              title={coacheContext[1]?.title}
              locationImage={coacheContext[1]?.locationImage}
              image={coacheContext[1]?.image}
            />
          </div>
          <div className={openTab === 3 ? 'block' : 'hidden'} id="third">
            <Coache
              title={coacheContext[2]?.title}
              locationImage={coacheContext[2]?.locationImage}
              image={coacheContext[2]?.image}
            />
          </div>
          <div className={openTab === 4 ? 'block' : 'hidden'} id="fourth">
            <Coache
              title={coacheContext[3]?.title}
              locationImage={coacheContext[3]?.locationImage}
              image={coacheContext[3]?.image}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AntCoaches;
