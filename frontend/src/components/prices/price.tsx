import React from 'react';

const price = () => {
  return (
    <div className="overflow-hidden bg-white border-2 border-transparent rounded-md">
      <div className="p-6 md:py-8 md:px-9">
        <h3 className="text-xl font-semibold text-black">Agency</h3>
        <p className="mt-2.5 text-sm text-gray-600">
          All the extended features to boost your agency career
        </p>

        <div className="flex items-end mt-5">
          <div className="flex items-start">
            <span className="text-xl font-medium text-black"> $ </span>
            <p className="text-6xl font-medium tracking-tight">99</p>
          </div>
          <span className="ml-0.5 text-lg text-gray-600"> / month </span>
        </div>

        <a
          href="#"
          title=""
          className="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold text-white transition-all duration-200 border-2 border-transparent rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
          role=""
        >
          Start 14 Days Free Trial
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
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-base font-medium text-gray-900">
              {' '}
              100 Domain License{' '}
            </span>
            <svg
              className="w-4 h-4 ml-0.5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </li>

          <li className="inline-flex items-center space-x-2">
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-base font-medium text-gray-900">
              {' '}
              Full Celebration Library{' '}
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
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-base font-medium text-gray-900">
              {' '}
              120+ Coded Blocks{' '}
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
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-base font-medium text-gray-900">
              {' '}
              Design Files Included{' '}
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
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-base font-medium text-gray-900">
              {' '}
              Premium Support{' '}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default price;
