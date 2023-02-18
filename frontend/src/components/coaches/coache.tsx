import React, { useState } from 'react';
import about1 from '../../assets/images/about1.jpg';
const coache = (props: any) => {
  return (
    <div>
      <div className="mt-8 bg-white mb-28 shadow-lg left-0 p-6  mt-2 border-indigo-300 rounded-lg mx-auto flex">
        <img className="w-1/3 rounded-lg  ml-19" src={props.image} alt="" />
        <div className="ml-10">
          {props.title.map((title: any, idx: any) => (
            <div key={idx} className="mt-2 ">
              {idx + 1}. {title}
            </div>
          ))}
        </div>
        {/* <img className="w-1/6 h-1/6 mt-auto" src={about1} /> */}
      </div>
    </div>
  );
};

export default coache;
