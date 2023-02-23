import React, { useEffect, useState } from 'react';
import Headers from '@/components/headers/header';
import Footer from '@/components/footers/footer';
import Coache from '@/components/coaches/coache';
import Coache1 from '../assets/images/Coache1.png';
import Coache2 from '../assets/images/Coache2.png';
import Coache3 from '../assets/images/Coache3.png';
import Coache4 from '../assets/images/Coache4.png';
import fmgym from '../assets/images/fmgym.jpeg';
import actgym from '../assets/images/actgym.png';
import gym from '../assets/images/gym.png';
import strength from '../assets/images/strength.jpeg';
import 'src/media.css';
import { useLocation } from 'react-router-dom';
const AntCoaches = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [openTab, setOpenTap] = useState<number>(1);
  const test = [
    {
      title: [
        'IPF 59kg 파워리프터',
        '한국 최초 IPF 국제시합 전종목(스쿼트, 벤치프레스, 데드리프트, 종합기록)그랜드슬램 달성',
        '아시아 -59kg체급 스쿼트 신기록 보유',
        '한국 -59kg체급 스쿼트, 벤치프레스, 데드리프트, 종합기록 신기록 보유',
        '2022 Asian Classic Powerlifting Championship -59kg체급 1위',
        '2022 IPF두바이 아시아 파워리프팅 선발전 -59kg체급 1위',
        '2022 IPF Busan Powerlifting Championship -59kg체급 1위',
        '2022 Korea Powerlifting Championship -59kg체급 1위',
        '2021 Grandprix Powerlifting Championship -59kg체급 1위',
        '파워리프팅 유튜브 59kg앤트맨 채널 운영중',
        'SBD Korea 공식 지원선수',
        'SBS 세상에 이런일이 1216회 출연',
      ],
      locationImage: [
        {
          img: strength,
          location:
            'https://map.naver.com/v5/search/%EC%8A%A4%ED%8A%B8%EB%A0%9D%EC%8A%A4%EB%AE%A4%EC%A7%80%EC%97%84/place/1787752073?c=15,0,0,0,dh&isCorrectAnswer=true',
          msg: null,
        },
        {
          img: fmgym,
          location:
            'https://map.naver.com/v5/search/fmgym/place/1818968620?c=15,0,0,0,dh&isCorrectAnswer=true',
          msg: null,
        },
      ],
      image: Coache1,
    },
    {
      title: [
        'IPF 74/83kg 파워리프터',
        '차의과대학교 스포츠의학대학원 선수트레이닝전공 석사과정',
        '2022 IPF -74kg체급 국가대표',
        '2022 IPF두바이 아시아 파워리프팅 선발전 -74kg체급 2위',
        '2022 Korea Powerlifting Championship -66kg체급 1위',
        '2020 WPC/AWPC -67.5kg체급 2위',
        '강남대학교 스포츠복지전공',
      ],
      image: Coache2,
      locationImage: [
        {
          img: gym,
          location: '',
          msg: '문의요망',
        },
      ],
    },
    {
      title: [
        'IPF 93kg 파워리프터',
        '2022 IPF -93kg체급 국가대표',
        '2022 IPF두바이 아시아 파워리프팅 선발전 -93kg체급 1위',
        '2022 IPF Busan Powerlifting Championship -93kg체급 1위',
        '2022 Korea Powerlifting Championship -83kg체급 3위',
        '용인대 체육학과',
      ],
      image: Coache3,
      locationImage: [
        {
          img: strength,
          location:
            'https://map.naver.com/v5/search/%EC%8A%A4%ED%8A%B8%EB%A0%9D%EC%8A%A4%EB%AE%A4%EC%A7%80%EC%97%84/place/1787752073?c=15,0,0,0,dh&isCorrectAnswer=true',
          msg: null,
        },
        {
          img: actgym,
          location:
            'https://map.naver.com/v5/search/actgym/place/1966720325?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=15,0,0,0,dh',
          msg: null,
        },
      ],
    },
    {
      title: [
        'IPF 66kg 파워리프터',
        '한국 -66kg체급 벤치프레스 신기록 보유',
        '2022 -66kg체급 국가대표',
        '2022 IPF두바이 아시아 파워리프팅 선발전 -66kg체급(Jr) 1위',
        '2019 IPF Korea -59kg체급 1위',
        'ICN 피지크 Junior 1위',
        '한서대 물리치료학과',
      ],
      image: Coache4,
      locationImage: [
        {
          img: gym,
          location: '',
          msg: '문의요망',
        },
      ],
    },
    ,
  ];
  return (
    <div className="flex flex-col h-screen">
      <Headers />
      <div className="flex-1 pt-28 pb-28">
        <div className="max-w-2xl mx-auto text-center mt-10">
          <div className="relative flex flex-col items-center">
            <div className="absolute hidden md:block -top-14  text-[120px] text-gray-400 font-bold opacity-10">
              Coaches
            </div>
            <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
              {' '}
              TeamAnt <span className="text-red"> Coaches</span>
            </h2>
          </div>
        </div>

        <div className="flex items-center justify-center max-h-screen mt-16 sm:px-56">
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
              title={test[0]?.title}
              image={test[0]?.image}
              locationImage={test[0]?.locationImage}
            />
          </div>
          <div className={openTab === 2 ? 'block' : 'hidden'} id="second">
            <Coache
              title={test[1]?.title}
              locationImage={test[1]?.locationImage}
              image={test[1]?.image}
            />
          </div>
          <div className={openTab === 3 ? 'block' : 'hidden'} id="third">
            <Coache
              title={test[2]?.title}
              locationImage={test[2]?.locationImage}
              image={test[2]?.image}
            />
          </div>
          <div className={openTab === 4 ? 'block' : 'hidden'} id="fourth">
            <Coache
              title={test[3]?.title}
              locationImage={test[3]?.locationImage}
              image={test[3]?.image}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AntCoaches;
