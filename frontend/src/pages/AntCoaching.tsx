import React, { useEffect, useState } from 'react';
import Headers from '@/components/headers/headers';
import Footer from '@/components/footers/footers';
import OnlineProcess from '@/components/coachings/onlineProcess';
import OfflineProcess from '@/components/coachings/offlineProcess';
import 'src/media.css';
import { useLocation } from 'react-router-dom';
import SubTtitle from '@/components/titles/SubTtitle';
const AntCoaching = () => {
  const location = useLocation();
  const [openTab, setOpenTab] = useState<number>(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="flex flex-col h-screen">
      <Headers />
      <div className="flex-1 pt-28 pb-28">
        <div className="max-w-xl lg:max-w-2xl mx-auto mt-10">
          <div className="text-center">
            <div className="pb-10">
              <SubTtitle
                title1={`Coaching`}
                title2={`TeamAnt`}
                title3={`Coaching Service`}
              />
            </div>
            <div className="flex items-center justify-center max-h-screen mt-10 sm:px-10">
              <ul className="mx-auto grid max-w-full w-full grid-cols-2 gap-x-5 ">
                <li className="">
                  <a
                    className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none transition-all duration-500 ease-in-out"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    href="#first"
                  >
                    Online Process
                  </a>
                </li>

                <li className="">
                  <a
                    className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none transition-all duration-500 ease-in-out"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    href="#second"
                  >
                    Offline Process
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={openTab === 1 ? 'block' : 'hidden'} id="first">
          <OnlineProcess />
        </div>
        {/* 오프라인 코칭 */}
        <div className={openTab === 2 ? 'block' : 'hidden'} id="second">
          <OfflineProcess />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AntCoaching;
