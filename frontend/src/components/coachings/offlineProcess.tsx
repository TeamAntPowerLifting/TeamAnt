import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import graph from '../../assets/images/graph.png';
import online from '../../assets/images/online.png';
import plan from '../../assets/images/plan.png';
import servey from '../../assets/images/servey.png';
import youtube from '../../assets/images/youtube.png';
import offline from '../../assets/images/offlinecoach.png';
import off1 from '../../assets/images/off1.png';
import off2 from '../../assets/images/off2.png';
import off3 from '../../assets/images/off3.png';
import off4 from '../../assets/images/off4.png';
import off5 from '../../assets/images/off5.png';
const OfflineProcess = () => {
  return (
    <div>
      <p className=" text-xl my-10 text-center text-gray-600">
        Offline Coaching Process (어떻게 진행되나요?)
      </p>
      <section className="pt-16 lg:pt-20 font-poppins">
        <div className="flex flex-col justify-center ">
          <div className="w-full mx-auto lg:max-w-4xl">
            <div className="relative">
              <div className="absolute hidden w-px h-full transform -translate-x-1/2 bg-blue-300  lg:block left-1/2 "></div>
              <div className="space-y-2 lg:space-y-4">
                <div>
                  <div className="flex flex-col items-center lg:-mt-16">
                    <div className="flex items-center justify-start w-full mx-auto">
                      <div className="w-full lg:w-1/2 lg:pr-8">
                        <div className="relative flex-1 mb-16 bg-white rounded shadow lg:mb-8 ">
                          <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                            <div className="hidden h-10 origin-bottom-left transform -rotate-45 bg-blue-600 shadow lg:block "></div>
                          </div>
                          <div className="relative z-20 p-6">
                            <div className="absolute -top-4 -right[-30px]  lg:top-0 lg:right-0 inline-block px-2 py-2  bg-blue-600  lg:rounded-bl-md lg:rounded-tr-md">
                              <span className="text-md text-gray-100">
                              사전 설문 및 상담 진행
                              </span>
                            </div>
                            <LazyLoadImage src={off1} className="mt-4 mb-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex invisible lg:visible items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-100 border border-blue-600 rounded-full  left-1/2 sm:translate-y-0">
                      <span className="text-blue-600 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-building"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                          />
                          <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center lg:-mt-16">
                    <div className="flex items-center justify-end w-full mx-auto">
                      <div className="w-full lg:w-1/2 lg:pl-8">
                        <div className="relative flex-1 mb-16 bg-white rounded shadow lg:mb-8 ">
                          <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                            <div className="hidden h-10 origin-top-right transform -rotate-45 bg-blue-600  lg:block drop-shadow-lg"></div>
                          </div>
                          <div className="relative z-20 p-6">
                            <div className="absolute -top-4 -left[-30px]  lg:top-0 lg:left-0 inline-block px-2 py-2.5  bg-blue-600 rounded-md lg:rounded-br-md lg:rounded-tl-md">
                              <span className="text-md text-gray-100">
                              운동 방향성 및 목적 설정
                              </span>
                            </div>
                            <LazyLoadImage src={off2} className="mt-4 mb-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute invisible lg:visible flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-100 border border-blue-600 rounded-full left-1/2 sm:translate-y-0">
                      <span className="text-blue-600 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-globe"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center lg:-mt-16">
                    <div className="flex items-center justify-start w-full mx-auto">
                      <div className="w-full lg:w-1/2 lg:pr-8">
                        <div className="relative flex-1 mb-16 bg-white rounded shadow lg:mb-8 ">
                          <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                            <div className="hidden h-10 origin-bottom-left transform -rotate-45 bg-blue-600 shadow lg:block "></div>
                          </div>
                          <div className="relative z-20 p-6">
                            <div className="absolute -top-4 -right[-30px]  lg:top-0 lg:right-0 inline-block px-2 py-2  bg-blue-600  lg:rounded-bl-md lg:rounded-tr-md">
                              <span className="text-md text-gray-100">
                              레슨 진행(온라인 코칭 서비스 무료제공)
                              </span>
                            </div>
                            <LazyLoadImage src={off3} className="mt-4 mb-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex invisible lg:visible items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-100 border border-blue-600 rounded-full left-1/2 sm:translate-y-0">
                      <span className="text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-building"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                          />
                          <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center lg:-mt-16">
                    <div className="flex items-center justify-end w-full mx-auto">
                      <div className="w-full lg:w-1/2 lg:pl-8">
                        <div className="relative flex-1 mb-16 bg-white rounded shadow lg:mb-8 ">
                          <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                            <div className="hidden h-10 origin-top-right transform -rotate-45 bg-blue-600 lg:block drop-shadow-lg"></div>
                          </div>
                          <div className="relative z-20 p-6">
                            <div className="absolute -top-4 -left[-30px]  lg:top-0 lg:left-0 inline-block px-2 py-2.5 bg-blue-600 rounded-md lg:rounded-br-md lg:rounded-tl-md">
                              <span className="text-md text-gray-100">
                              오프라인 레슨 졸업
                              </span>
                            </div>
                            <LazyLoadImage src={off4} className="mt-4 mb-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex invisible lg:visible items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-100 border border-blue-600 rounded-full left-1/2 sm:translate-y-0">
                      <span className="text-blue-600 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-clock"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center lg:-mt-16">
                    <div className="flex items-center justify-start w-full mx-auto">
                      <div className="w-full lg:w-1/2 lg:pr-8">
                        <div className="relative flex-1 mb-16 bg-white rounded shadow lg:mb-8 ">
                          <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                            <div className="hidden h-10 origin-bottom-left transform -rotate-45 bg-blue-600 shadow lg:block "></div>
                          </div>
                          <div className="relative z-20 p-6">
                            <div className="absolute -top-4 -right[-30px]  lg:top-0 lg:right-0 inline-block px-2 py-2  bg-blue-600  lg:rounded-bl-md lg:rounded-tr-md">
                              <span className="text-md text-gray-100">
                                온라인 코칭 전환 및 사후관리
                              </span>
                            </div>
                            <LazyLoadImage
                              src={off5}
                              className="mt-4 mb-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex invisible lg:visible items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-100 border border-blue-600 rounded-full  left-1/2 sm:translate-y-0">
                      <span className="text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-building"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                          />
                          <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 bg-white sm:py-10 lg:pb-24">
        <div className="px-4 mx-auto w-[80%] py-8 sm:px-6 lg:pb-8">
          <div className="grid  grid-cols-1 lg:grid-cols-1 gap-x-12 xl:gap-x-12 gap-y-12">
            <div className="2xl:pl-10 lg:mt-20">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              3대운동을 기초로 하는 신체의 조화로운 움직임 확립을 목표로 합니다.
              </h2>
              <p className="text-xl leading-relaxed text-gray-900 mt-9">
              3대운동이라 하는 스쿼트, 벤치프레스, 데드리프트에 대한 이해와 습득을 기초로 수업을 진행합니다. 
              회원님의 체형과 강점을 고려해 이론을 통하여 설명해 드리고, 
              기능적으로 부족한 부분과 약점을 보강해 나가며 스스로 신체의 조화로운 움직임을 만들어낼 수 있게끔 
              지도하여 혼자서도 아픈 곳 없이 운동할 수 있게끔 이끌어드리는 것을 목표로 하고 있습니다.
              </p>
              <p className="mt-6 text-xl leading-relaxed text-gray-900">
              팀앤트가 권장해드리는 이상적인 트레이닝 시퀀스는 오프라인에서 직접적으로 자세에 대한 레슨을 진행하며 기틀을 다잡은 이후, 
              온라인 코칭으로 전환하여 본인의 운동환경에 맞게 설정된 개인화 주간 프로그램을 제공받으며 스스로 운동을 해나가고, 
              비용 효율적으로 꾸준하게 관리를 받는것 입니다.
              </p>
            </div>

            <div className="relative lg:mb-12">
              <img
                className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
                alt=""
              />
             <div className="absolute -right-0 pl-12">
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
