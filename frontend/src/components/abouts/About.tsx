import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface About {
  image: string;
  title: string;
  subTitle: string;
  content: string[];
}

const About = (props: About) => {
  return (
    <>
      <div className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row">
        <div className="relative w-full overflow-hidden lg:w-2/4 h-80">
          <LazyLoadImage
            className="object-cover w-full h-full transition-all hover:scale-110"
            src={props.image}
            alt="aboutImage"
          />
        </div>
        <div className="relative flex self-center flex-1 p-8 ml-0 bg-white border rounded shadow lg:items-center lg:-ml-12">
          <div>
            <span className="block mb-2 text-md font-semibold text-blue-700 uppercase ">
              {props.title}
            </span>
            <h2 className="mb-4 text-3xl font-bold leading-9 text-black ">
              {props.subTitle}
            </h2>
            {props.content.map((content, idx) => (
              <p key={idx} className="text-sm leading-7 text-gray-400 mb-2">
                {content}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
