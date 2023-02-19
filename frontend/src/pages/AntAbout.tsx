import React from 'react';
import Headers from '@/components/headers/header';
import Footer from '@/components/footers/footer';
import about from '../assets/images/AboutUscut.png';
import about1 from '../assets/images/about1.jpg';
import about2 from '../assets/images/about2.jpg';
import about3 from '../assets/images/about3.jpg';
import about4 from '../assets/images/about4.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'src/media.css';
const AntAbout = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Headers />
        <div className="flex-1 pt-28 mb-36">
          {/* <section className="py-20 bg-white"> */}
          <div className="flex flex-col px-28 mx-auto space-y-12 max-w-7xl xl:px-32 pt-10 ">
            <div className="relative">
              <div className="max-w-2xl mx-auto text-center">
                <div className="relative flex flex-col items-center">
                  <div className="absolute hidden md:block -top-14  text-[120px] text-gray-400 font-bold opacity-10">
                    About
                  </div>
                  <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
                    {' '}
                    <span className="text-red"> About</span> TeamAnt
                  </h2>
                  <p className="w-full py-8 mx-auto mt-10 text-lg text-center text-gray-700 intro sm:max-w-3xl">
                    우리가 어떠한 팀이고, 어떠한 비전과 가치관을 지니고 있는지
                    소개해드립니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 
                <p className="w-full py-8 mx-auto mt-10 text-lg text-center text-gray-700 intro sm:max-w-3xl">
                  우리가 어떠한 팀이고, 어떠한 비전과 가치관을 지니고 있는지
                  소개해드립니다.
                </p>
              </div>
              <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
                <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                  <img
                    className="rounded-lg mt-20 shadow-xl"
                    src={about1}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12">
                  <div className="bg-white shadow-xl rounded-lg -mr-12 z-10 p-5">
                    <p className="mb-2 text-lg font-semibold leading-none text-left text-indigo-600 uppercase">
                      한국 파워리프팅의 선두주자가 함께합니다
                    </p>
                    <h3 className="mt-2 text-2xl sm:text-left md:text-5xl">
                      Frontrunner
                    </h3>
                    
                    <p
                      id="content"
                      className="mt-5 text-lg text-gray-700 text md:text-left"
                    >
                      코치진 모두 국내에서 선두를 달리고 있으며, 특히 정지훈
                      코치의 경우 2022년 두바이에서 개최된 IPF 아시아 파워리프팅
                      국제경기에서 당당하게 1등을 했으며, 또한 모든 종목(스쿼트,
                      벤치프레스, 데드리프트, 종합기록)에서 금메달을 따내며
                      그랜드슬램을 달성했습니다. 이렇게 국제시합에서 모든 종목
                      금메달을 이룩한 것은 한국에 파워리프팅이 들어온 이후
                      최초이며, 또한 해당 시합에서 아시아 스쿼트 신기록을
                      갱신하기도 했습니다. 단순히 국내에서만 잘 하는 사람이
                      아니라, 국제 경기에서도 기록을 세우고 입상을 해내는,
                      한국의 파워리프팅의 역사를 써내고 있으며, 한국을 알리고
                      있기도 하죠.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
                <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
                  <img
                    className="rounded-lg mt-20 shadow-xl"
                    src={about2}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 ">
                  <div className="bg-white shadow-xl rounded-lg -ml-12 -mt-10 z-10 p-5">
                    <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                      모든 코치진의 해외무대경험 有
                    </p>
                    <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
                      Overseas Experience
                    </h3>
                    <p className="mt-5 text-lg text-gray-700 text md:text-left">
                      팀앤트의 모든 코치진은 한국을 대표하여 국제시합이라는 큰
                      무대를 경험했다는 특징이 있습니다. 이는 다른 코칭 팀들과의
                      가장 큰 차이점이자, 팀앤트의 강점이라고도 할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
                <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                  <img
                    className="rounded-lg mt-20 shadow-xl"
                    src={about3}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12">
                  <div className="bg-white shadow-xl rounded-lg -mr-12 z-10 p-5">
                    <p className="mb-2 text-md font-semibold leading-none text-left text-indigo-600 uppercase">
                      쌍방향성 소통을 중시합니다.
                    </p>
                    <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
                      Two-Way Communication
                    </h3>
                    <p className="mt-5 text-lg text-gray-700 text md:text-left">
                      우리는 코칭은 수직적인 관계로 이루어지는 것이 아니라는
                      점을 강조하고 있습니다. 그러한 만큼, 수평적인 관계에서
                      클라이언트의 방향성을 함께 의논하고 제시하는 팀이라는 것을
                      알려드리고 싶습니다. 단순히 구매자와 서비스 제공자로서가
                      전부가 아닌, 진정으로 함께 해나갈 수 있는 관계를 형성하는
                      것을 목표로 하고 있습니다.{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
                <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
                  <img className="rounded-lg shadow-xl" src={about4} alt="" />
                </div>
                <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 ">
                  <div className="bg-white shadow-xl rounded-lg -ml-12 z-10  p-5">
                    <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                      우리는 팀으로서 활동을 합니다
                    </p>
                    <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
                      Team Solidarity
                    </h3>
                    <p className="mt-5 text-lg text-gray-700 text md:text-left">
                      기본적으로 코칭은 1:1로 진행이 되지만, 세미나 진행 혹은
                      시합 현장에서의 서포팅과 같은 다양한 곳에서 담당 코치
                      이외의 코치에게도 도움을 받을 수 있습니다. 한 명의 코치와
                      함께 하게 되었다고 해서, 그 한명에게만 모든 것이 한정되는
                      것이 아닙니다. 모든 코치들에게 도움을 받을 수 있죠. 그것이
                      팀이고, 우리가 목표하는 바이기도 합니다. 또한 팀으로써
                      활동을 한다는 것은, 그만큼 더 많은 레퍼런스가 쌓인다는
                      뜻이 됩니다. 정보가 많을수록, 더 많은 수를 볼 수 있겠죠.
                      코치들은 많은 경험과 이론적 근거를 통해 프로그램과
                      방향성을 제시하고, 시합에 참여하는 경우 여러 코치들이 힘을
                      합쳐 여러분이 최고의 기량을 낼 수 있도록 도와드릴 겁니다.
                      또한, 여러분이 보여주시는 결과물들은 또다시 우리의 소중한
                      레퍼런스가 되어 더욱 발전하는 코칭팀을 만들어낼 것이구요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="flex items-center mt-20">
            <div className="p-4 mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-4 lg:gap-20 sm:gap-4 sm:grid-cols-1 lg:grid-cols-1">
                <a
                  className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row"
                  href="#"
                >
                  <div className="relative w-full overflow-hidden lg:w-2/4 h-80">
                    <LazyLoadImage
                      className="object-cover w-full h-full transition-all hover:scale-110"
                      src={about1}
                      alt=""
                    />
                    {/* <span className="absolute px-4 py-2 text-xs text-white bg-blue-500 rounded top-4 left-4">
                      Exercise
                    </span> */}
                  </div>
                  <div className="relative flex self-center flex-1 p-8 ml-0 bg-white border rounded shadow lg:items-center lg:-ml-12">
                    <div>
                      <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase ">
                        한국 파워리프팅의 선두주자가 함께합니다
                      </span>
                      <h2 className="mb-3 text-2xl font-bold leading-9 text-black ">
                        Frontrunner
                      </h2>
                      <p className="text-sm leading-7 text-gray-400">
                        코치진 모두 국내에서 선두를 달리고 있으며, 특히 정지훈
                        코치의 경우 2022년 두바이에서 개최된 IPF 아시아
                        파워리프팅 국제경기에서 당당하게 1등을 했으며, 또한 모든
                        종목(스쿼트, 벤치프레스, 데드리프트, 종합기록)에서
                        금메달을 따내며 그랜드슬램을 달성했습니다. 이렇게
                        국제시합에서 모든 종목 금메달을 이룩한 것은 한국에
                        파워리프팅이 들어온 이후 최초이며, 또한 해당 시합에서
                        아시아 스쿼트 신기록을 갱신하기도 했습니다. 단순히
                        국내에서만 잘 하는 사람이 아니라, 국제 경기에서도 기록을
                        세우고 입상을 해내는, 한국의 파워리프팅의 역사를 써내고
                        있으며, 한국을 알리고 있기도 하죠.
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row "
                  href="#"
                >
                  <div className="relative w-full overflow-hidden lg:w-2/4 h-80">
                    <LazyLoadImage
                      className="object-cover w-full h-full transition-all hover:scale-110"
                      src={about2}
                      alt=""
                    />
                  </div>
                  <div className="relative self-center flex-1 p-8 ml-0 bg-white border rounded shadow lg:items-center lg:-ml-12">
                    <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase ">
                      {' '}
                      모든 코치진의 해외무대경험 有
                    </span>
                    <h2 className="mb-3 text-2xl font-bold leading-9 text-black ">
                      Overseas Experience
                    </h2>
                    <p className="text-sm leading-7 text-gray-400">
                      팀앤트의 모든 코치진은 한국을 대표하여 국제시합이라는 큰
                      무대를 경험했다는 특징이 있습니다. 이는 다른 코칭 팀들과의
                      가장 큰 차이점이자, 팀앤트의 강점이라고도 할 수 있습니다.
                    </p>
                  </div>
                </a>
                <a
                  className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row "
                  href="#"
                >
                  <div className="relative w-full overflow-hidden lg:w-2/4 h-80">
                    <LazyLoadImage
                      className="object-cover w-full h-full transition-all hover:scale-110"
                      src={about3}
                      alt=""
                    />
                    <span className="absolute px-4 py-2 text-xs text-white bg-blue-500 rounded top-4 left-4">
                      Exercise
                    </span>
                  </div>
                  <div className="relative self-center flex-1 p-8 ml-0 bg-white border rounded shadow  lg:items-center lg:-ml-12">
                    <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase ">
                      {' '}
                      쌍방향성 소통을 중시합니다.
                    </span>
                    <h2 className="mb-3 text-2xl font-bold leading-9 text-black ">
                      Two-Way Communication
                    </h2>
                    <p className="text-sm leading-7 text-gray-400">
                      우리는 코칭은 수직적인 관계로 이루어지는 것이 아니라는
                      점을 강조하고 있습니다. 그러한 만큼, 수평적인 관계에서
                      클라이언트의 방향성을 함께 의논하고 제시하는 팀이라는 것을
                      알려드리고 싶습니다. 단순히 구매자와 서비스 제공자로서가
                      전부가 아닌, 진정으로 함께 해나갈 수 있는 관계를 형성하는
                      것을 목표로 하고 있습니다.
                    </p>
                  </div>
                </a>
                <a
                  className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row "
                  href="#"
                >
                  <div className="relative w-full overflow-hidden lg:w-2/4 h-80">
                    <LazyLoadImage
                      className="object-cover w-full h-full transition-all hover:scale-110"
                      src={about4}
                      alt=""
                    />
                  </div>
                  <div className="relative self-center flex-1 p-8 ml-0 bg-white border rounded shadow lg:items-center lg:-ml-12">
                    <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase ">
                      {' '}
                      우리는 팀으로서 활동을 합니다
                    </span>
                    <h2 className="mb-3 text-2xl font-bold leading-9 text-black">
                      Team Solidarity
                    </h2>
                    <p className="text-sm leading-7 text-gray-400">
                      기본적으로 코칭은 1:1로 진행이 되지만, 세미나 진행 혹은
                      시합 현장에서의 서포팅과 같은 다양한 곳에서 담당 코치
                      이외의 코치에게도 도움을 받을 수 있습니다. 한 명의 코치와
                      함께 하게 되었다고 해서, 그 한명에게만 모든 것이 한정되는
                      것이 아닙니다. 모든 코치들에게 도움을 받을 수 있죠. 그것이
                      팀이고, 우리가 목표하는 바이기도 합니다. 또한 팀으로써
                      활동을 한다는 것은, 그만큼 더 많은 레퍼런스가 쌓인다는
                      뜻이 됩니다. 정보가 많을수록, 더 많은 수를 볼 수 있겠죠.
                      코치들은 많은 경험과 이론적 근거를 통해 프로그램과
                      방향성을 제시하고, 시합에 참여하는 경우 여러 코치들이 힘을
                      합쳐 여러분이 최고의 기량을 낼 수 있도록 도와드릴 겁니다.
                      또한, 여러분이 보여주시는 결과물들은 또다시 우리의 소중한
                      레퍼런스가 되어 더욱 발전하는 코칭팀을 만들어낼 것이구요.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
      {/* <style>{`
      #content{
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
    -webkit-text-fill-color: #black;
      }
    `}</style> */}
    </>
  );
};

export default AntAbout;
