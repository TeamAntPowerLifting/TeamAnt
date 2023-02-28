import React, { useEffect, useState } from 'react';
import Headers from '@/components/headers/Header';
import Footer from '@/components/footers/Footer';
import Price from '@/components/prices/Price';
import OnlinePT from '@/components/prices/OnlinePT';
import OfflinePT from '@/components/prices/OfflinePT';
import 'src/media.css';
import { useLocation } from 'react-router-dom';
import SubTtitle from '@/components/titles/SubTtitle';

const AntPrice = () => {
  const location = useLocation();

  const [openTab, setOpenTab] = useState<number>(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col h-screen">
      <Headers />
      <div className="flex-1 pt-28 pb-28">
        <section className="pt-12 sm:pt-14 lg:pt-10">
          <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
            <div className="pb-8">
              <SubTtitle
                title1={`Pricing`}
                title2={`Coaching`}
                title3={`Price`}
              />
            </div>

            <div className="flex items-center justify-center max-h-screen mt-16 sm:px-10">
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
                    Online PT
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
                    Offline PT
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="px-full mx-auto max-w-screen-2xl">
            {/* 온라인 코칭 */}
            <div className={openTab === 1 ? 'block' : 'hidden'} id="first">
              <OnlinePT />
            </div>
            {/* 오프라인 코칭 */}
            <div className={openTab === 2 ? 'block' : 'hidden'} id="second">
              <OfflinePT />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AntPrice;
