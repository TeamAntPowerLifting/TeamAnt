import React, { useState } from 'react';

const coache = (props: any) => {
  return (
    <div>
      <div className=" mt-8 bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg mx-auto flex">
        <img className="w-1/5 rounded-lg ml-19" src={props.image} alt="" />
        <div className="ml-10">
          {props.title.map((title: any) => (
            <div>{title}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default coache;
