import React from 'react';
import Price from './price';

const offlinePT = () => {
  return (
    <div>
      {' '}
      <p className="max-w-md text-center mx-auto mt-4 text-2xl leading-relaxed text-gray">
        Offline Coaching
      </p>
      <div className="grid max-w-2xl grid-cols-1 mx-auto mt-14">
        <Price
          month={`1`}
          tab={`Offline caching`}
          content={`※ 코치님들이 활동하는 체육관이 모두 달라 코치님마다 진행 가능한 체육관의 위치가 다를 수 있고, 그에 따라 비용 또한 상이할 수 있습니다.`}
        />
      </div>
    </div>
  );
};

export default offlinePT;
