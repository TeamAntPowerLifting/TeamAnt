import React from 'react';
import { useNavigate } from 'react-router-dom';
const headerTap = (props: { location: { pathname: string } }) => {
  const navigate = useNavigate();
  const url = 'http://smartstore.naver.com/antpowerlifting';

  const moveToHome = () => {
    navigate('/');
  };

  const moveToCAbout = () => {
    navigate('/about');
  };

  const moveToCoaching = () => {
    navigate('/coaching');
  };

  const moveToCoaches = () => {
    navigate('/coaches');
  };

  const moveToReviews = () => {
    navigate('/reviews');
  };

  const moveToArticle = () => {
    navigate('/article');
  };

  const moveToPrice = () => {
    navigate('/price');
  };
  const moveToStudio = () => {
    navigate('/studio');
  };

  const moveToCantact = () => {
    navigate('/contact');
  };
  const moveToStore = () => {
    window.open(url);
  };
  if (props.location.pathname == '/') {
    return (
      <>
        <div
          className="cursor-pointer hover:text-button border-b-2 border-red text-lg"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToPrice}
        >
          Price
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToReviews}
        >
          Testimonial
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStore}
        >
          Store
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStudio}
        >
          Studio
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCantact}
        >
          Contact
        </div>
      </>
    );
  } else if (props.location.pathname == '/about') {
    return (
      <>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button border-b-2 border-red text-lg"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToPrice}
        >
          Price
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToReviews}
        >
          Testimonial
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStore}
        >
          Store
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStudio}
        >
          Studio
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCantact}
        >
          Contact
        </div>
      </>
    );
  } else if (props.location.pathname == '/coaching') {
    return (
      <>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button border-b-2 border-red text-lg"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToPrice}
        >
          Price
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToReviews}
        >
          Testimonial
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStore}
        >
          Store
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStudio}
        >
          Studio
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCantact}
        >
          Cantact
        </div>
      </>
    );
  } else if (props.location.pathname == '/coaches') {
    return (
      <>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToPrice}
        >
          Price
        </div>
        <div
          className="cursor-pointer hover:text-button border-b-2 border-red text-lg"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToReviews}
        >
          Testimonial
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStore}
        >
          Store
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStudio}
        >
          Studio
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCantact}
        >
          Contact
        </div>
      </>
    );
  } else if (props.location.pathname == '/reviews') {
    return (
      <>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToPrice}
        >
          Price
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button border-b-2 border-red text-lg"
          onClick={moveToReviews}
        >
          Testimonial
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStore}
        >
          Store
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStudio}
        >
          Studio
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCantact}
        >
          Cantact
        </div>
      </>
    );
  } else if (props.location.pathname == '/article') {
    return (
      <>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToPrice}
        >
          Price
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToReviews}
        >
          Testimonial
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStore}
        >
          Store
        </div>
        <div
          className="cursor-pointer hover:text-button border-b-2 border-red text-lg"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStudio}
        >
          Studio
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCantact}
        >
          Contact
        </div>
      </>
    );
  } else if (props.location.pathname == '/contact') {
    return (
      <>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToPrice}
        >
          Price
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToReviews}
        >
          Testimonial
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStore}
        >
          Store
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStudio}
        >
          Studio
        </div>
        <div
          className="cursor-pointer hover:text-button border-b-2 border-red text-lg"
          onClick={moveToCantact}
        >
          Contact
        </div>
      </>
    );
  } else if (props.location.pathname == '/price') {
    return (
      <>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button border-b-2 border-red text-lg"
          onClick={moveToPrice}
        >
          Price
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToReviews}
        >
          Testimonial
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStore}
        >
          Store
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStudio}
        >
          Studio
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCantact}
        >
          Contact
        </div>
      </>
    );
  } else if(props.location.pathname == '/content'){
    return (
      <>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToPrice}
        >
          Price
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToReviews}
        >
          Testimonial
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStore}
        >
          Store
        </div>
        <div
          className="cursor-pointer hover:text-button border-b-2 border-red text-lg"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStudio}
        >
          Studio
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCantact}
        >
          Contact
        </div>
      </>
    );
  }else {
    return (
      <>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToPrice}
        >
          Price
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToReviews}
        >
          Testimonial
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToStore}
        >
          Store
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button border-b-2 border-red text-lg"
          onClick={moveToStudio}
        >
          Studio
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-lg"
          onClick={moveToCantact}
        >
          Contact
        </div>
      </>
    );
  }
};

export default headerTap;
