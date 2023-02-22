import React from 'react';
import Price from '../prices/price';

const offlinePT = () => {
  const content = [
    '3대 운동인 스쿼트, 벤치프레스, 데드리프트에 대한 이해와 습득',

    '개개인의 체형과 강점을 고려한 내게 맞는 자세 만들기',

    '통증없는 건강한 움직임 형성',

    '스스로 운동을 할 수 있게끔 기틀 구축 및 방향성 제시',

    '(온라인 코칭 병행시) 주마다 갱신되는 개인화 프로그램 제공',
  ];
  return (
    <div>
      {' '}
      <p className="max-w-md text-center mx-auto mt-4 text-2xl leading-relaxed text-gray">
        Offline Coaching
      </p>
      <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 mt-14 md:gap-9">
        <Price
          month={`1`}
          tab={`Offline Coaching`}
          content={``}
        />
        <Price
          month={`1`}
          tab={`OnePoint Coaching`}
          content={``} />
      </div>

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
          {`※ 코치님들이 활동하는 체육관이 모두 달라 코치님마다 진행 가능한 체육관의 위치가 다를 수 있고, 그에 따라 비용 또한 상이할 수 있습니다.`}
        </p>
      </div>
    </div>
  );
};

export default offlinePT;
