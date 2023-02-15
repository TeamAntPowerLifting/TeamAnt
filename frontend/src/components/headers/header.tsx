import React, { useEffect, useState } from 'react';
import Log from '../../assets/images/HeaderLogo.png';
import { useLocation } from 'react-router-dom';
import HeaderTap from './headerTap';
const headers = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      <img
        className="md:w-60 xs:w-48 lg:w-48 xl:w-60 ml-8"
        src={Log}
        alt="logo"
      />
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 mr-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <HeaderTap location={location} />
          </div>
        </section>

        <div className="DESKTOP-MENU hidden  lg:flex md:space-x-6 xs:space-x-12 lg:space-x-12 xl:space-x-16 pr-10">
          <HeaderTap location={location} />
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
  //return (

  // <div
  //   id="header wrap"
  //   className='"fixed z-20 flex w-full flex-wrap justify-between font-eng-bold font-bold text-black max-sm:justify-end"'
  // >
  //   <div
  //     id="logo wrap"
  //     className="bg-logo flex w-full justify-center border bg-background px-12 pt-4 pb-4 max-sm:pl-0 md:w-screen lg:px-16 xl:px-20"
  //   >
  //     <img className="m-auto w-60" src={Log}></img>
  //     <div
  //       id="menue1"
  //       className="m-auto flex w-full justify-end gap-8 font-eng-regular max-xl:text-3xl max-sm:hidden md:gap-16 lg:gap-32"
  //     >
  //       <HeaderTap location={location} />
  //     </div>
  //   </div>
  // </div>
  //);
};

export default headers;
