import React, { useState } from 'react';
import about1 from '../../assets/images/about1.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

interface locationImageType {
  img: string;
  location: string;
  msg: string | null;
}

interface coache {
  title: string[] | undefined;
  locationImage: locationImageType[] | undefined;
  image: string | undefined;
}

const Coache = (props: coache) => {
  const navigate = useNavigate();
  const moveToContact = () => {
    navigate(`/contact`);
  };
  return (
    <div>
      <div className="container m-auto pt-10 md:px-5 lg:px-20 max-w-[90%]">
        <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12 ">
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
            <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-18 lg:p-14 border">
              {props.title?.map((title: string, idx: number) => (
                <div key={idx} className="mt-2 ">
                  {title}
                </div>
              ))}
              <div className="flex items-center justify-end mt-24">
                <p className="font-bold">
                  {`오프라인 레슨 진행가능 체육관 :`} <br />
                  <span className="text-sm text-gray-500">{`(이미지 클릭시 위치 확인가능)`}</span>
                </p>
                {props.locationImage?.map(
                  (image: locationImageType, idx: number) => (
                    <div key={idx}>
                      {image.msg ? (
                        <div className="w-28 ml-10">
                          <img
                            className="w-20 rounded-lg cursor-pointer ml-19"
                            key={idx}
                            src={image.img}
                            alt=""
                            onClick={moveToContact}
                          />
                          <div className="ml-3 mt-5">{image.msg}</div>
                        </div>
                      ) : (
                        <>
                          <a key={idx} href={image.location}>
                            <img
                              className="w-20 rounded-lg ml-19"
                              key={idx}
                              src={image.img}
                              alt=""
                            />
                          </a>
                        </>
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coache;
