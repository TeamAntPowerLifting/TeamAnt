import React, { useEffect } from 'react';
import Headers from '@/components/headers/header';
import Footer from '@/components/footers/footer';
import main from '../assets/images/main.png';
import smain from '../assets/images/smain.png';
import main1 from '../assets/images/main1.png';
import main2 from '../assets/images/main2.png';
import main3_1 from '../assets/images/main3_1.png';
import main3_2 from '../assets/images/main3_2.png';
import main3_3 from '../assets/images/main3_3.png';
import main3_4 from '../assets/images/main3_4.png';
import main3_5 from '../assets/images/main3_5.png';
import video1 from '../assets/images/video1.png';
import video2 from '../assets/images/video2.png';
import video3 from '../assets/images/video3.png';
import MainArticle from '@/components/articles/mainArticle';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLocation } from 'react-router-dom';
const AntMain = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col h-screen ">
      <Headers />
      <div className="flex-1 mt-28 pb-28 ">
        <div>
          <img
            className="mt-1 object-fill w-full sm:h-[100%] h-52  md:object-left md:scale-100 md:origin-top-left z-10 "
            src={main}
            alt=""
          />
        </div>
        <section className="py-12 sm:py-20">
          <div className="">
            <img
              className="object-fill mx-auto rounded-lg sm:h-[100%] h-52  lg:w-2/3 w-[100%]"
              src={main1}
              alt=""
            />
          </div>
        </section>

        <div className="border-b-2 border-red w-3/4 mx-auto"></div>

        <section className="py-12 lg:py-20 lg:px-40 ">
          <div>
            <img
              className="object-cover mx-auto rounded-md lg:w-3/4 h-2/5 w-[100%]"
              src={main2}
              alt=""
            />
          </div>
        </section>

        <div className="border-b-2 border-red w-3/4 mx-auto"></div>

        <div className="pt-12 sm:pt-16 w-3/5 mx-auto ">
          <p className="break-normal text-2xl font-bold text-gray-800 capitalize lg:text-3xl sm:w-auto w-462">
            파워리프팅 온라인 코칭! 누구에게 필요할까요?
          </p>
        </div>

        <section className="">
          <div>
            <section className="py-12 bg-white sm:pt-16 lg:pt-16">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 px-10">
                <div className="grid grid-cols-1  text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-3 sm:gap-12">
                  <div>
                    <div className="flex items-center justify-center w-32 h-32 mx-auto bg-blue-100 rounded-full">
                      <img className="text-blue-600 w-20 h-20" src={main3_1} />
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-black">
                      삼대운동을 더 잘하고 싶으신 분들
                    </h3>
                  </div>

                  <div>
                    <div className="flex items-center justify-center w-32 h-32 mx-auto bg-orange-100 rounded-full">
                      <img className="text-blue-600 w-20 h-20" src={main3_2} />
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-black px-10">
                      스트렝스 훈련을 꾸준하게 하면서 중량을 올려나가고 싶으신
                      분들
                    </h3>
                  </div>

                  <div>
                    <div className="flex items-center justify-center w-32 h-32 mx-auto bg-green-100 rounded-full">
                      <img className="text-blue-600 w-20 h-20" src={main3_3} />
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-black">
                      파워리프팅 시합을 준비하려는 분들
                    </h3>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="pt-4 bg-white sm:pt-9 pb-11 sm:pb-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:w-3/4 mx-auto text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-2 sm:gap-12">
                <div>
                  <div className="flex items-center justify-center w-32 h-32 mx-auto bg-blue-100 rounded-full ">
                    <img className="text-blue-600 w-20 h-20" src={main3_4} />
                  </div>
                  <h3 className="mt-8 text-lg font-semibold text-black px-10">
                    바벨운동은 할 줄 아는데, 어떻게 해나가야 하는지 모르겠는
                    분들
                  </h3>
                </div>

                <div>
                  <div className="flex items-center justify-center w-32 h-32 mx-auto bg-orange-100 rounded-full">
                    <img className="text-blue-600 w-20 h-20" src={main3_5} />
                  </div>
                  <h3 className="mt-8 text-lg font-semibold text-black">
                    정체기를 겪으며 중량이 멈춰있는 분들
                  </h3>
                </div>
              </div>
            </div>
          </section>
          <div className="hidden lg:block"></div>
        </section>

        <div className="border-b-2 border-red w-3/4 mx-auto"></div>

        <div className="pt-12 sm:pt-16 w-3/5 mx-auto">
          <p className="text-2xl font-bold text-gray-800 capitalize lg:text-3xl">
            Article
          </p>
        </div>

        <section>
          <div className="px-14 mb-10 mx-auto sm:px-10 lg:px-16 max-w-7xl">
            <MainArticle />
          </div>
        </section>

        <div className="border-b-2 border-red w-3/4 mx-auto py-10"></div>

        <div className="pt-12 sm:pt-16 w-3/5 mx-auto ">
          <p className="text-2xl font-bold text-gray-800 capitalize lg:text-3xl">
            In Media
          </p>
        </div>

        <section className="">
          <div className="px-4 mb-10 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
              <div className="text-center">
                <a
                  href="https://youtu.be/O24EsmylWtg"
                  title=""
                  className="block aspect-w-4 aspect-h-3"
                >
                  <img
                    className="object-cover w-full h-full cursor-pointer lg:hover:scale-110 transition-transform ease-in-out duration-500"
                    src={video1}
                    alt=""
                  />
                </a>
                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest rounded-full text-rose-500 bg-rose-100 mt-5 mb-3">
                  {' '}
                  세상에 이런일이 : 파워리프팅맨{' '}
                </span>
              </div>

              <div className="text-center">
                <a
                  href="https://youtu.be/s35Cx2BkWEs"
                  title=""
                  className="block aspect-w-4 aspect-h-3"
                >
                  <img
                    className="object-cover w-full h-full cursor-pointer lg:hover:scale-110 transition-transform ease-in-out duration-500"
                    src={video2}
                    alt=""
                  />
                </a>
                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest rounded-full text-sky-500 bg-sky-100 mt-5">
                  {' '}
                  한국인 최초 아시아 1등 그랜드 슬램{' '}
                </span>
              </div>

              <div className="text-center">
                <a
                  href="https://youtu.be/-_ve13yz_6o"
                  title=""
                  className="block aspect-w-4 aspect-h-3"
                >
                  <img
                    className="object-cover w-full h-full cursor-pointer lg:hover:scale-110 transition-transform ease-in-out duration-500"
                    src={video3}
                    alt=""
                  />
                </a>
                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest rounded-full text-sky-500 bg-sky-100 mt-5">
                  {' '}
                  앤트맨 6주 파워리프팅 프로그램{' '}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AntMain;
