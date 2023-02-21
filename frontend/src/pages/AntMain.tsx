import React, { useEffect } from 'react';
import Headers from '@/components/headers/header';
import Footer from '@/components/footers/footer';
import main from '../assets/images/newmain.png';
import main1 from '../assets/images/main1.png';
import main2 from '../assets/images/main2.png';
import main3_1 from '../assets/images/main3_1.png';
import main3_2 from '../assets/images/main3_2.png';
import main3_3 from '../assets/images/main3_3.png';
import main3_4 from '../assets/images/main3_4.png';
import main3_5 from '../assets/images/main3_5.png';
import main4 from '../assets/images/main4.jpg';
import main4_1 from '../assets/images/main4_1.png';
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
      <div className="flex-1 mt-28 pb-28">
        <div>
          <img
            className="mt-1 object-cover w-full h-45 md:object-left md:scale-100 md:origin-top-left z-10 "
            src={main}
            alt=""
          />
        </div>
        <section className="py-10 sm:py-20">
          <div>
            <img
              className="object-cover mx-auto rounded-lg px-10"
              src={main1}
              alt=""
            />
          </div>
        </section>

        <div className="border-b-2 border-red w-3/4 mx-auto"></div>

        <section className="py-30 xs:py-20 ">
          <div>
            <img
              className="object-cover mx-auto rounded-lg px-10"
              src={main2}
              alt=""
            />
          </div>
        </section>

        <div className="border-b-2 border-red w-3/4 pt-8 mx-auto"></div>

        <div className="pt-20 w-3/5 mx-auto">
          <p className="text-2xl font-bold text-gray-800 capitalize lg:text-3xl">
            파워리프팅 온라인 코치! 누구에게 필요한가요?
          </p>
        </div>

        <section className="">
          <div>
            <section className="py-10 bg-white sm:pt-16 lg:pt-24">
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
          <section className="py-10 bg-white sm:py-16">
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

        <div className="border-b-2 border-red w-3/4 py-10 mx-auto"></div>

        <div className="pt-20 w-3/5 mx-auto ">
          <p className="text-2xl font-bold text-gray-800 capitalize lg:text-3xl">
            우리가 다른 팀과 다른점
          </p>
        </div>

        <section className="md:px-32">
          <div className="grid sm:grid-cols-2 grid-cols-1 text-center my-20">
            <div className="">
              <LazyLoadImage
                className="object-cover mx-auto  w-120 h-80"
                src={main4}
                alt=""
              />
            </div>

            <div className=" mt-5 sm:mt-0 lg:w-4/5">
              <LazyLoadImage
                className="object-cover mx-auto h-10"
                src={main4_1}
                alt=""
              />

              <div>
                <p className="text-lg font-bold text-gray-800 capitalize lg:text-lg">
                  The Strength Of Our Team
                </p>
              </div>

              <div className="mx-8 ">
                <p className="w-full font-semibold mx-auto mt-8 text-lg text-center text-gray-700 intro sm:max-w-3xl">
                  우리는 코치진 모두가 국내에서 정상을 달리고 있는 선수일 뿐만
                  아니라, 코치진 모두가 해외 무대를 경험해보았다는 아주 큰
                  차이점이 있다. 언제나 목표를 향해 선수, 코치로써 달려가고
                  있습니다. 오직 TeamANT만이 가지고 있는 경험과 노하우를
                  여러분들께 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="border-b-2 border-red w-3/4 mx-auto"></div>

        <div className="pt-20 w-3/5 mx-auto">
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

        <section className="pt-5">
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
