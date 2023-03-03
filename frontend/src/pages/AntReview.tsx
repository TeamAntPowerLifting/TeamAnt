import React, { useEffect, useState } from 'react';
import Headers from '@/components/headers/header';
import Footer from '@/components/footers/footer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'src/media.css';
import { useLocation } from 'react-router-dom';


const AntReview = () => {


    return (
        <div className="flex flex-col h-screen">
            <Headers />
            <div className="flex-1 pt-28 mb-36">
                <div className="flex flex-col px-28 mx-auto space-y-12 max-w-7xl xl:px-32 pt-10 ">
                    <div className="relative">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="relative flex flex-col items-center">
                                <div className="absolute hidden md:block -top-14  text-[120px] text-gray-400 font-bold opacity-10">
                                    About
                                </div>
                                <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
                                    {' '}
                                    <span className="text-red"> About</span> TeamAnt
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div>

                </div>

                <Footer />
            </div>
        </div>

    );

};
export default AntReview;
