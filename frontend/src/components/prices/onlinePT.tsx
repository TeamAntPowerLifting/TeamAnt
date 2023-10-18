import React from 'react';
import Price from './price';

const OnlinePT = () => {
  const content = [
    '훈련 전략, 빈도, 운동종목 등의 개인화',

    '주마다 갱신되는 개인화 프로그램 제공',

    '최고의 효율성과 방향성 정립을 위한 화상미팅 진행',

    '코치와의 지속적인 연락 및 화상통화를 통한 쌍방향성 소통',

    '영상을 통한 자세 및 약점 보완에 대한 피드백 제공',

    '훈련에 대한 참고자료 영상 제공',
  ];
  return (
    <div>
      <p className="max-w-md text-center mx-auto mt-4 text-2xl leading-relaxed text-gray">
        Online Coaching
      </p>
      <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 mt-14 md:gap-9">
        <Price
          price={`140,000`}
          month={`1 month`}
          tab={`Online Coaching`}
          content={'📢 30일 기준 온라인 코칭 프로그램'}
        />
        <Price
          price={`400,000`}
          month={`3 month`}
          tab={`Online Coaching`}
          content={'📢 42만원 -> 40만원 할인 혜택 제공'}
        />
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <div className="mt-8 bg-white mb-10 shadow-lg left-0 p-2 border mt-2 border-indigo-300 rounded-lg mx-auto">
          <div className="ml-5">
            {content.map((title: string, idx: number) => (
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
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-center text-lg">
          {`※최초 가입비 3만원이 별도로 청구되며, 가입비에는 코칭 시작 전의 사전미팅,`}
        </p>
        <p className="text-center text-lg">
          {`테크니컬 피드백, 프로그램 구성, 팀앤트 티셔츠 증정의 비용이 모두 포함되어 있습니다.`}
        </p>
      </div>
    </div>
  );
};

export default OnlinePT;
