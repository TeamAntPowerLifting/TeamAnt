import React from 'react';
import { useNavigate } from 'react-router-dom';
const HeaderTap = (props: { location: { pathname: string } }) => {
  const navigate = useNavigate();

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

  const moveToArticle = () => {
    navigate('/article');
  };

  const moveToPrice = () => {
    navigate('/price');
  };

  const moveToCantact = () => {
    navigate('/contact');
  };

  if (props.location.pathname == '/') {
    return (
      <>
        <div
          className="cursor-pointer hover:text-button border-b-2 border-red text-xl"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToPrice}
        >
          Price
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
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
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button border-b-2 border-red text-xl"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToPrice}
        >
          Price
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
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
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button border-b-2 border-red text-xl"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToPrice}
        >
          Price
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
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
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToPrice}
        >
          Price
        </div>
        <div
          className="cursor-pointer hover:text-button border-b-2 border-red text-xl"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCantact}
        >
          Contact
        </div>
      </>
    );
  } else if (props.location.pathname == '/article') {
    return (
      <>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToPrice}
        >
          Price
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button border-b-2 border-red text-xl"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
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
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToPrice}
        >
          Price
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button border-b-2 border-red text-xl"
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
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button border-b-2 border-red text-xl"
          onClick={moveToPrice}
        >
          Price
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCantact}
        >
          Contact
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToPrice}
        >
          Price
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button border-b-2 border-red text-xl"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600 text-xl"
          onClick={moveToCantact}
        >
          Contact
        </div>
      </>
    );
  }
};

export default HeaderTap;
