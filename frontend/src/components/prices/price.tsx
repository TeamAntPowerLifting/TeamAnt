import React from 'react';

const price = () => {
  return (
    <div className="overflow-hidden bg-gray-100 border-2 border-transparent rounded-md">
      <div className="p-6 md:py-8 md:px-9">
        <h3 className="text-xl font-semibold text-black">Online coaching</h3>

        <div className="flex items-end mt-5">
          <div className="flex items-start">
            <span className="text-xl font-medium text-black"> ₩ </span>
            <p className="text-5xl font-medium tracking-tight">140,000</p>
          </div>
          <span className="ml-0.5 text-lg text-gray-600"> / month </span>
        </div>

        <a
          href="#"
          title=""
          className="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold text-white transition-all duration-200 border-2 border-transparent rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
          role=""
        >
          문의하기
        </a>

        <ul className="flex flex-col mt-8 space-y-4">
          <li className="inline-flex items-center space-x-2">
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-medium text-gray-900">
              {' '}
              1:1 레슨 8회{' '}
            </span>
          </li>

          <li className="inline-flex items-center space-x-2">
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-medium text-gray-900">
              {' '}
              1:1 레슨 8회{' '}
            </span>
          </li>

          <li className="inline-flex items-center space-x-2">
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-medium text-gray-900">
              {' '}
              1:1 레슨 8회{' '}
            </span>
          </li>

          <li className="inline-flex items-center space-x-2">
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-medium text-gray-900">
              {' '}
              1:1 레슨 8회{' '}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default price;
