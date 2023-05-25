import React from 'react';

interface Title {
  title1: string;
  title2: string;
  title3: string;
}

const SubTtitle = (props: Title) => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="relative flex flex-col items-center">
        <div className="absolute hidden md:block -top-14  text-[120px] text-gray-400 font-bold opacity-10">
          {props.title1}
        </div>
        <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
          {' '}
          <span className="text-red"> {props.title2}</span> {props.title3}
        </h2>
      </div>
    </div>
  );
};

export default SubTtitle;
