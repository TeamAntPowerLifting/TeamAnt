import React, { useEffect, useState } from 'react';
import Headers from '@/components/headers/header';
import Footer from '@/components/footers/footer';
import Price from '@/components/prices/price';
import OnlinePT from '@/components/prices/onlinePT';
import OfflinePT from '@/components/prices/offlinePT';
import 'src/media.css';
import { useLocation } from 'react-router-dom';
const AntPrice = () => {
  const location = useLocation();

  const [openTab, setOpenTab] = useState<number>(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const content = [
    '훈련 전략, 빈도, 운동종목 등의 개인화',

    '주마다 갱신되는 개인화 프로그램 제공',

    '최고의 효율성과 방향성 정립을 위한 화상미팅 진행',

    '코치와의 지속적인 연락 및 화상통화를 통한 쌍방향성 소통',

    '영상을 통한 자세 및 약점 보완에 대한 피드백 제공',

    '훈련에 대한 참고자료 영상 제공',
  ];
  return (
    <div className="flex flex-col h-screen">
      <Headers />
      <div className="flex-1 pt-28 pb-28">
        <section className="pt-12 sm:pt-14 lg:pt-14">
          <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="relative flex flex-col items-center">
                <div className="absolute hidden md:block -top-14  text-[120px] text-gray-400 font-bold opacity-10">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Coaching <span className="text-red"> Price</span>
                </h2>
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
