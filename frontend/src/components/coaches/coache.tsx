import React, { useState } from 'react';
import about1 from '../../assets/images/about1.jpg';
const coache = (props: any) => {
  return (
    <div>
      {/* <div className="mt-8 bg-white mb-28 shadow-lg left-0 p-6  mt-2 border-indigo-300 rounded-lg  mx-auto flex">
        <img className="w-1/3 rounded-lg  ml-19" src={props.image} alt="" />
        <div className="ml-10">
          {props.title.map((title: any, idx: any) => (
            <div key={idx} className="mt-2 ">
              {idx + 1}. {title}
            </div>
          ))}
        </div>
      </div> */}
      <div className="container m-auto px-6 py-10 md:px-12 lg:px-20">
        <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
          <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
            <div
              aria-hidden="true"
              className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div className="relative p-6 space-y-6 lg:p-5">
              <div>
                <img className=" rounded-lg  ml-19" src={props.image} alt="" />
                {/* <div className="relative flex justify-around">
                  <div className="flex items-end">
                    <span className="text-8xl text-gray-800 font-bold leading-0">
                      35
                    </span>
                    <div className="pb-2">
                      <span className="block text-2xl text-gray-700 font-bold">
                        %
                      </span>
                      <span className="block text-xl text-purple-500 font-bold">
                        Off
                      </span>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* <ul
                role="list"
                className="w-max space-y-4 py-6 m-auto text-gray-600"
              >
                <li className="space-x-2">
                  <span className="text-purple-500 font-semibold">&check;</span>
                  <span>First premium advantage</span>
                </li>
                <li className="space-x-2">
                  <span className="text-purple-500 font-semibold">&check;</span>
                  <span>Second advantage weekly</span>
                </li>
                <li className="space-x-2">
                  <span className="text-purple-500 font-semibold">&check;</span>
                  <span>Third advantage donate to project</span>
                </li>
              </ul> */}
              {/* <p className="flex items-center justify-center space-x-4 text-lg text-gray-600 text-center">
                <span>Call us at</span>
                <a
                  href="tel:+24300"
                  className="flex space-x-2 items-center text-purple-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                  <span className="font-semibold">+1 000 000</span>
                </a>
                <span>or</span>
              </p> */}
              {/* <button
                type="submit"
                title="Submit"
                className="block w-full py-3 px-6 text-center rounded-xl transition bg-purple-600 hover:bg-purple-700 active:bg-purple-800 focus:bg-indigo-600"
              >
                <span className="text-white font-semibold">
                  Send us an email
                </span>
              </button> */}
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
                  {idx + 1}. {title}
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
