import React, { useEffect, useState } from 'react';
import Headers from '@/components/headers/headers';
import Footer from '@/components/footers/footers';
import { useLocation } from 'react-router-dom';
import SubTtitle from '@/components/titles/SubTtitle';
import studio1 from '../assets/images/studio1.jpeg';
import studio2 from '../assets/images/studio2.jpeg';
import studio3 from '../assets/images/studio3.jpeg';
import studio4 from '../assets/images/studio4.png';
import studio5 from '../assets/images/studio5.jpeg';
import studiomain from '../assets/images/studio_main.png';


const AntStudio = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div className="flex flex-col">
        <Headers />
        <div className="flex-1 pt-40 pb-12 md:pb-4">
          <div className='relative'>
            <div className="pb-10 ">
              <SubTtitle title1={`Studio`} title2={`Team ANT`} title3={`Offline Studio`} />
            </div>
          </div>
          <div className='h-[60%] pt-4 '>
            <img
              className=" object-fill w-full sm:h-[92%] h-36  md:object-left md:scale-100 md:origin-top-left z-10 "
              src={studiomain}
              alt=""
            />
          </div>

          <div className='pt-12 grid grid-rows-1 grid-flow-col gap-4 px-8'>
            <div>
          <img
              className="object-fill w-full sm:h-64 h-48  md:scale-100 "
              src={studio1}
              alt=""
            />
            </div>
            <div>
          <img
              className=" object-fill w-full sm:h-64 h-48  md:scale-100 "
              src={studio2}
              alt=""
            />
            </div>
            <div>
          <img
              className="object-fill w-full sm:h-64 h-48  md:scale-100"
              src={studio3}
              alt=""
            />
            </div>
            <div>
          <img
              className="object-fill w-full sm:h-64 h-48  md:scale-100  z-10  "
              src={studio4}
              alt=""
            />
            </div>
            <div>
          <img
              className=" object-fill w-full sm:h-64 h-48  md:scale-100  z-10 "
              src={studio5}
              alt=""
            />
            </div>

          </div>
          <div className='py-12'>
            <p className="mb-4 text-5xl font-bold leading-9 text-black grid place-items-center">
              Team ANT Offline Studio
            </p>
          </div>
          <div className='grid place-items-center'>
            <p className='para break-normal text-md font-extrabold text-gray-500 capitalize lg:text-2xl sm:w-auto pb-4'>
              Team ANT 대표 정지훈 코치 상주
            </p>
            <p className='para break-normal text-md font-extrabold text-gray-500 capitalize lg:text-2xl sm:w-auto pb-4'>
              합리적인 가격으로 오프라인 레슨 수강 가능
            </p>
            <p className='para break-normal text-md font-extrabold text-gray-500 capitalize lg:text-2xl sm:w-auto pb-4'>
              3대운동 최적화 규격장비 구비 (엘리코 콤보랙, 오하이오 파워바, 주물원판, 데드리프트 플랫폼 등)
            </p>
            <p className='para break-normal text-md font-extrabold text-gray-500 capitalize lg:text-2xl sm:w-auto pb-4'>
              오프라인 레슨 기간 내 온라인 코칭 서비스 무료제공
            </p>
            <p className='para break-normal text-md font-extrabold text-gray-500 capitalize lg:text-2xl sm:w-auto pb-4'>
              정규레슨 등록시 팀앤트 티셔츠 증정
            </p>
            <p className='para break-normal text-md font-extrabold text-gray-500 capitalize lg:text-2xl sm:w-auto pb-4'>
              온라인 코칭 클라이언트 한정 스튜디오 무료개방 혜택 (*네이버 예약 필수)
            </p>
          </div>
          <div className='grid place-items-center pt-16 sm:py-8'>
            <a
              href='https://map.naver.com/p/entry/place/1109130661?lng=126.7819485&lat=37.6705335&placePath=%2Fhome%3Fentry%3Dplt'
              title=""
              className=" grid place-items-center para break-normal text-md font-extrabold text-gray-500 capitalize lg:text-2xl sm:w-auto pb-4"
              role=""
            >
              오프라인 레슨 문의하기
            </a>
            <p className='para break-normal text-md font-extrabold text-gray-500 capitalize lg:text-2xl sm:w-auto pb-4 pt-12 sm:pt-4'>
              경기도 고양시 일산동구 일산로 394번길 19-3 지하 팀앤트 파워리프팅
            </p>
          </div>

        </div>

        <Footer />
      </div>

    </>

  );
};
export default AntStudio;
