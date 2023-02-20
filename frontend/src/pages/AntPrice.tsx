import React from 'react';
import Headers from '@/components/headers/header';
import Footer from '@/components/footers/footer';
import Price from '@/components/prices/price';
import 'src/media.css';
const AntPrice = () => {
  const content = [
    '훈련 전략, 빈도, 운동종목 등의 개인화',

    '주마다 갱신되는 개인화 프로그램 제공',

    '최고의 효율성과 방향성 정립을 위한 화상미팅 진행',

    '코치와의 지속적인 연락 및 화상통화를 통한 쌍방향성 소통',

    '영상을 통한 자세 및 약점 보완에 대한 피드백 제공',

    '훈련에 대한 참고자료 제공',
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
                <p className="max-w-md mx-auto mt-4 text-2xl leading-relaxed text-gray">
                  Online Coaching
                </p>
              </div>
            </div>
            <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 mt-14 md:gap-9">
              <Price price={`140,000`} month={`1`} />
              <Price price={`400,000`} month={`3`} />
            </div>
          </div>

          <div className="px-full mx-auto max-w-screen-2xl">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mt-8 bg-white mb-10 shadow-lg left-0 p-2 border mt-2 border-indigo-300 rounded-lg mx-auto">
                <div className="ml-5">
                  {content.map((title: any, idx: any) => (
                    <>
                      <div className="text-left flex my-3 text-md" key={idx}>
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-2 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>{' '}
                        {title}
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <p className="text-center text-lg">
                {`※ Offline Coaching은 상단의 Contact를 통해 문의해주세요`}
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AntPrice;
