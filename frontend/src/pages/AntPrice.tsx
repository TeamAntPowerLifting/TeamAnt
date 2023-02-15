import React from 'react';
import Headers from '@/components/headers/header';
import Footer from '@/components/footers/footer';
import Price from '@/components/prices/price';
const AntPrice = () => {
  return (
    <div className="flex flex-col h-screen">
      <Headers />
      <div className="flex-1">
        <section className="py-12 sm:py-14 lg:py-14">
          <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="relative flex flex-col items-center">
                <div className="absolute hidden md:block -top-14  text-[120px] text-gray-400 font-bold opacity-10">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Coaching <span className="text-red"> Service</span>
                </h2>
                <p className="max-w-md mx-auto mt-4 text-2xl leading-relaxed text-gray">
                  Online Coaching
                </p>
              </div>
            </div>
            <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 mt-14 md:gap-9">
              <Price />
              <Price />
            </div>
          </div>

          <div className="px-full mx-auto max-w-screen-2xl">
            <div className="max-w-2xl mx-auto text-center">
              <p className="max-w-md mx-auto mt-4 text-2xl leading-relaxed text-gray">
                Offline PT
              </p>
            </div>
            <pre className="whitespace-pre-wrap mt-4 text-2xl leading-relaxed text-gray text-center">
              {`※ 모든 오프라인 PT는 1:1로 진행되며, 코치님 별로 진행 가능한 장소가 다를 수 있으니 확인 부탁드립니다`}
            </pre>
            <div className="grid  grid-cols-1 gap-6 lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-2 mt-14 md:gap-9">
              <Price />
              <Price />
              <Price />
              <Price />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AntPrice;
