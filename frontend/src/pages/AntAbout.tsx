import React from 'react';
import Headers from '@/components/headers/header';
import Footer from '@/components/footers/footer';
import about from '../assets/images/aboutus.png';


const AntAbout = () => {


  return (
    <>
      <div className="flex flex-col h-screen">
        <Headers />
        <div className="flex-1">

          <img className='object-cover ' src={about} alt=""></img>
          <h2 className='--text-center'>우리가 어떠한 팀이고, 어떠한 비전과 가치관을 지니고 있는지 소개해드립니다.</h2>
        </div>




        <Footer />
      </div>
    </>
  );
};

export default AntAbout;
