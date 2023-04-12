import React, { useEffect } from 'react';
import Headers from '@/components/headers/headers';
import Footer from '@/components/footers/footers';
import main from '../assets/images/main.png';
import main1_1 from '../assets/images/main1_1.png';
import main1_2 from '../assets/images/main1_2.png';
import main1_logo from '../assets/images/main1_logo.png';
import main2 from '../assets/images/main2.png';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import main3_1 from '../assets/images/main3_1.png';
import { useNavigate } from 'react-router-dom';
import main3_2 from '../assets/images/main3_2.png';
import main3_3 from '../assets/images/main3_3.png';
import main3_4 from '../assets/images/main3_4.png';
import main3_5 from '../assets/images/main3_5.png';
import video1 from '../assets/images/video1.png';
import video2 from '../assets/images/video2.png';
import video3 from '../assets/images/video3.png';
import MainArticle from '@/components/articles/MainArticleTop3';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLocation } from 'react-router-dom';
import review1 from '../assets/images/review1.png';
import review2 from '../assets/images/review2.png';
import review3 from '../assets/images/review3.png';
import review4 from '../assets/images/review4.png';
import review5 from '../assets/images/review5.png';
import review6 from '../assets/images/review6.png';
const AntMain = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ReviewClick = () => {
    navigate(`/reviews`);
  };
  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  };
  const review = [review1, review3, review6, review4, review5, review2];

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);

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

        <div className='w-full h-fit my-12'>
          <p
            className="font-serif break-normal text-center text-black-900 capitalize lg:text-8xl md:text-7xl sm:text-6xl xs:text-4xl"
            style={{ textShadow: '1.5px 1.5px 2px #C0C0C0' }}
          >
            We Life Weights
          </p>
        </div>

        <div className='items-center justify-center flex'>
          <img
            className="object-fill mx-0 rounded-lg w-52"
            src={main1_logo}
            alt=""
          />
        </div>

        <div className='py-12 lg:py-20 xl:px-60'>
          <img
            className="object-fill w-full sm:h-[100%] h-52 "
            src={main1_1}
            alt=""
          />
        </div>
        <div className='w-full h-fit'>
          <p
            className="para break-normal font-semibold text-center text-black-900 capitalize lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl"
            style={{ textShadow: '1.5px 1.5px 2px #C0C0C0' }}
          >
            '정지훈' IPF56kg Powerlifter
          </p>
        </div>
        <div className='w-full h-fit mt-10'>
          <p
            className="para break-normal font-semibold text-center text-black-900 capitalize lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl"
            style={{ textShadow: '1.5px 1.5px 2px #C0C0C0' }}
          >
            파워리프팅 아시아 1등
          </p>
          <p
            className="para break-normal font-semibold text-center text-black-900 capitalize  lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl"
            style={{ textShadow: '1.5px 1.5px 2px #C0C0C0' }}
          >
            아시아 스쿼트 신기록 보유자
          </p>
          <p
            className="para break-normal font-semibold text-center text-black-900 capitalize  lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl"
            style={{ textShadow: '1.5px 1.5px 2px #C0C0C0' }}
          >
            국내 최초 파워리프팅 국제시합 그랜드 슬램 달성
          </p>
        </div>

        <div className='py-12 lg:py-20 xl:px-60 '>
          <img
            className=" object-fill w-full sm:h-[100%] h-52 "
            src={main1_2}
            alt=""
          />
        </div>

        <div className="border-b-2 border-red w-4/5 mx-auto"></div>

        {/* <section className="py-12 sm:py-20 lg:px-60 px-10">
          <div className="grid grid-cols-3 mx-auto lg-max-w-full">
            <div className="w-[520px]  justify-self-end">
                <img
                  className="object-cover inset-x-0 md:h-72 sm:h-52 h-40 " 
                  src={main1_1}
                  alt=""
                />
                <p
                  className="para break-normal text-right font-extrabold text-gray-800 capitalize text-xs sm:text-base md:text-lg lg:text-xl sm:w-auto"
                  style={{ textShadow: '1.5px 1.5px 2px #C0C0C0' }}
                >
                  파워리프팅 아시아 1등
                </p>
                <p
                  className="para break-normal text-right font-extrabold text-gray-800 capitalize text-xs sm:text-base md:text-lg lg:text-xl sm:w-auto"
                  style={{ textShadow: '1.5px 1.5px 2px #C0C0C0' }}
                >
                  아시아 스쿼트 신기록 보유자
                </p>
                <p
                  className="para break-normal text-right font-extrabold text-gray-800 capitalize text-xs sm:text-base md:text-lg lg:text-xl sm:w-auto"
                  style={{ textShadow: '1.5px 1.5px 2px #C0C0C0' }}
                >
                  {' '}
                  국내 최초 파워리프팅 국제시합 그랜드 슬램 달성
                </p>
            </div>

            <div className="items-center justify-center flex">
              <img
                className="object-fill mx-0 rounded-lg w-44"
                src={main1_logo}
                alt=""
              />
            </div>

            <div className="w-[450px] mt-10 ">
                <p
                  className="para break-normal  font-extrabold text-gray-800 capitalize text-xs sm:text-base md:text-lg lg:text-xl sm:w-auto"
                  style={{ textShadow: '1.5px 1.5px 2px #C0C0C0' }}
                >
                  선수로서 증명해낸 결과와 실력
                </p>
                <p
                  className="para break-normal  font-extrabold text-gray-800 capitalize text-xs sm:text-base md:text-lg lg:text-xl sm:w-auto"
                  style={{ textShadow: '1.5px 1.5px 2px #C0C0C0' }}
                >
                  모든 코치진의 국제시합 경험
                </p>
                <p
                  className="para break-normal  font-extrabold text-gray-800 capitalize text-xs sm:text-base md:text-lg lg:text-xl sm:w-auto"
                  style={{ textShadow: '1.5px 1.5px 2px #C0C0C0' }}
                >
                  풍부한 티칭경험과 레퍼런스
                </p>
              <img
                className="object-cover md:mr-0 mr-10"
                src={main1_2}
                alt=""
              />
            </div>

          </div>
        </section> */}

        <div className="border-b-2 border-red w-4/5 mx-auto"></div>

        <section className="py-12 lg:py-20 xl:px-60 sm:px-32 px-10">
          <div className="sm:flex items-end space-x-8 mx-auto lg:max-w-full ">
            <div style={{ flex: '0 0 45%' }}>
              <img
                src={main2}
                alt="Image"
                className="object-fill mx-auto sm:h-[100%] h-52 w-full rounded-md"
              />
            </div>
            <div style={{ flex: '1 1 55%' }}>
              <h3
                style={{ textShadow: ' 1.5px 1.5px 2px #C0C0C0' }}
                className="mt-5 break-normal text-md hover:subpixel-antialiased text-md sm:text-lg font-extrabold text-gray-800 capitalize lg:text-3xl sm:w-auto mb-5 "
              >
                파워리프팅 온리인 코칭이란?
              </h3>
              <p
                className="2xl:mr-36 para break-normal text-md font-extrabold text-gray-800 capitalize lg:text-2xl sm:w-auto"
                style={{ textShadow: '1.5px 1.5px 2px #C0C0C0' }}
                id="textShadow"
              >
                나의 운동의 구애를 받지 않으며, 시간과 공간의 제약을 받지
                않으면서도 비용 효율적으로 관리를 받을 수 있는 온라인
                시스템입니다.
              </p>
            </div>
          </div>
        </section>

        <div className="border-b-2 border-red w-4/5 mx-auto"></div>

        {/* 본문 */}
        <div className="pt-12 sm:pt-16 w-3/5 mx-auto ">
          <p className="break-normal text-2xl font-bold text-gray-800 capitalize lg:text-3xl sm:w-auto w-235">
            파워리프팅 온라인 코칭! 누구에게 필요할까요?
          </p>
        </div>

        <section>
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

        <div className="border-b-2 border-red w-4/5 mx-auto"></div>

        <div className="pt-12 sm:pt-16 w-3/5 mx-auto">
          <p className="text-2xl font-bold text-gray-800 capitalize lg:text-3xl">
            Client Testimonial
          </p>
        </div>

        <section className="px-4 mb-10 mx-auto sm:px-6 lg:px-8 max-w-7xl mt-16">
          <AliceCarousel
            autoPlay={true}
            responsive={responsive}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
          >
            {review.map((i) => (
              <div className="yours-custom-class mx-10">
                <a className="" onClick={ReviewClick}>
                  <img src={i} />
                </a>
              </div>
            ))}
          </AliceCarousel>
        </section>

        <div className="border-b-2 border-red w-4/5 mx-auto"></div>

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

        <div className="border-b-2 border-red w-4/5 mx-auto py-10"></div>

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
      <style>
        {`
      #f_m  {
        text-align: inherit;
      }
      @media screen and (max-width: 768px) {
        #s_m{
          text-align:right
        }
      }
     
    `}
      </style>
    </div>
  );
};

export default AntMain;
