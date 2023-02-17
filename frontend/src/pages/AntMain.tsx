import React from 'react';
import Headers from '@/components/headers/header';
import Footer from '@/components/footers/footer';
import main from '../assets/images/main.png';
import main3_1 from '../assets/images/main3_1.png';
import main3_2 from '../assets/images/main3_2.png';
import main3_3 from '../assets/images/main3_3.png';
import main3_4 from '../assets/images/main3_4.png';
import main3_5 from '../assets/images/main3_5.png';
import MainArticle from '@/components/articles/mainArticle';

const AntMain = () => {
  return (
    <div className="flex flex-col h-screen">
      <Headers />
      <div className="flex-1">
        <img
          className="object-cover w-full h-45 md:object-left md:scale-100 md:origin-top-left "
          src={main}
          alt=""
        />
        <div className="my-20 ml-80">
          <p className="text-2xl font-bold text-gray-800 capitalize lg:text-3xl">
            파워리프팅 온라인 코칭이란?
          </p>
        </div>

        <div className="border-b-2 border-red mx-40 mb-20 "></div>

        <div className="my-20 ml-80">
          <p className="text-2xl font-bold text-gray-800 capitalize lg:text-3xl">
            파워리프팅 온라인 코치! 누구에게 필요한가요?
          </p>
        </div>

        <section className="py-10 px-80">
          <div className="grid grid-cols-5 text-center">
            <div>
              <img
                className="object-cover mx-auto rounded-lg w-40 h-40"
                src={main3_1}
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                삼대 운동을 더 잘하고 싶으신 분들
              </p>
            </div>
            <div className="hidden lg:block"></div>
            <div>
              <img
                className="object-cover mx-auto rounded-lg w-40 h-40"
                src={main3_2}
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                스트렝스 훈련을 꾸준하게 하면서
                <br />
                중량을 올려나가고 싶으신 분들
              </p>
            </div>
            <div className="hidden lg:block"></div>

            <div>
              <img
                className="object-cover mx-auto rounded-lg w-40 h-40"
                src={main3_3}
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                파워리프팅 시합을 준비하려는 분들
              </p>
            </div>
          </div>

          <div className="grid grid-cols-5 text-center mt-20 ">
            <div className="hidden lg:block"></div>

            <div>
              <img
                className="object-cover mx-auto rounded-lg w-40 h-40"
                src={main3_4}
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                바벨운동은 할 줄 아는데,
                <br />
                어떻게 해나가야하는지 모르겠는 분들
              </p>
            </div>
            <div className="hidden lg:block"></div>
            <div>
              <img
                className="object-cover mx-auto rounded-lg w-40 h-40"
                src={main3_5}
                alt=""
              />
              <p className="mt-8 text-lg font-semibold leading-tight text-black">
                정체기를 겪으며 중량이 멈춰있는 분들
              </p>
            </div>
          </div>
          <div className="hidden lg:block"></div>
        </section>

        <div className="border-b-2 border-red mx-40 mb-20 "></div>

        <div className="my-20 ml-80">
          <p className="text-2xl font-bold text-gray-800 capitalize lg:text-3xl">
            우리가 다른 팀과 다른점
          </p>
        </div>

        <section>
          <div className="grid grid-cols-2 text-center mt-20 "></div>
        </section>
        <div className="border-b-2 border-red mx-40 mb-20 "></div>

        <div className="my-7 ml-80">
          <p className="text-2xl font-bold text-gray-800 capitalize lg:text-3xl">
            Article
          </p>
        </div>

        <section>
          <div className="text-center ">
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-2xl text-gray">
                <MainArticle />
              </div>
            </div>
          </div>
        </section>
        <div className="border-b-2 border-red mx-40 mb-20 "></div>
      </div>
      <Footer />
    </div>
  );
};

export default AntMain;
