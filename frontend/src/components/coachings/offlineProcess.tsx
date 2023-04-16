import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import graph from '../../assets/images/graph.png';
import online from '../../assets/images/online.png';
import plan from '../../assets/images/plan.png';
import servey from '../../assets/images/servey.png';
import youtube from '../../assets/images/youtube.png';
import offline from '../../assets/images/offlinecoach.png';
const OfflineProcess = () => {
  return (
    <div>
      <p className=" text-xl my-10 text-center text-gray-600">
        Offline Coaching Process (어떻게 진행되나요?)
      </p>

      <section className="pb-10 bg-white sm:py-10 lg:pb-24">
        <div className="px-4 mx-auto w-[80%] py-8 sm:px-6 lg:pb-8">
          <div className="grid  grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-12 gap-y-12">
            <div className="2xl:pl-10 lg:mt-20">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                바벨을 기초로 하는 신체의 조화로운 움직임을 목표로 합니다.
              </h2>
              <p className="text-xl leading-relaxed text-gray-900 mt-9">
                삼대운동, 즉, 스쿼트, 벤치프레스, 데드리프트에 대한 이해와
                습득을 기초로 수업을 진행하며, 회원님의 체형과 강점을 고려하여
                이론을 통해 설명하고, 스스로 신체의 조화로운 움직임을 만들어낼
                수 있게끔 지도하는 방식으로 수업이 진행됩니다.
              </p>
              <p className="mt-6 text-xl leading-relaxed text-gray-900">
                가장 추천드리는 방식은 오프라인에서 직접적으로 자세에 대한
                레슨을 받고, 이후 온라인 코칭과 병행하여 개인의 운동환경에 맞춘
                개인화 주간 프로그램을 제공받으며 스스로 운동을 해나가며 관리를
                받는것이 가장 좋은 방법입니다.
              </p>
            </div>

            <div className="relative lg:mb-12">
              <img
                className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
                alt=""
              />
              <div className="pl-12 pr-6">
                <img className="relative opacity-75" src={offline} alt="" />
              </div>
              <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                <div className="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                  <div className="px-3 py-4 sm:px-5 sm:py-8">
                    <div className="flex items-start">
                      <p className="text-3xl sm:text-4xl">👋</p>
                      <blockquote className="ml-5">
                        <p className="text-sm font-medium text-white sm:text-lg">
                          “ TeamAnt aims for harmonious movements of the body
                          based on the barbell. ”
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfflineProcess;
