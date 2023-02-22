import React, { useState } from 'react';
import about1 from '../../assets/images/about1.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const coache = (props: any) => {
  return (
    <div>
      <div className="container m-auto px-6 pt-10 md:px-12 lg:px-20">
        <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
          <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
            <div
              aria-hidden="true"
              className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div className="relative p-6 space-y-6 lg:p-5">
              <div>
                <LazyLoadImage
                  className=" rounded-lg  ml-19"
                  src={props.image}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="relative group md:w-6/12 lg:w-7/12">
            <div
              aria-hidden="true"
              className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"
            ></div>
            <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16 border">
              {props.title.map((title: any, idx: any) => (
                <div key={idx} className="mt-2 ">
                  {title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default coache;
