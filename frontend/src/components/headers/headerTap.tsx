import React from 'react';
import { useNavigate } from 'react-router-dom';
const headerTap = (props: { location: { pathname: string } }) => {
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
  } else if (props.location.pathname == '/about') {
    return (
      <>
        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button border-b-2 border-red"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToCantact}
        >
          Cantact
        </div>
      </>
    );
  } else if (props.location.pathname == '/coaching') {
    return (
      <>
        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button border-b-2 border-red"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600"
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
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button border-b-2 border-red"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600"
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
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button border-b-2 border-red"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToCantact}
        >
          Cantact
        </div>
      </>
    );
  } else if (props.location.pathname == '/contact') {
    return (
      <>
        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToHome}
        >
          Home
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToCAbout}
        >
          About
        </div>

        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToCoaching}
        >
          Coaching
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToCoaches}
        >
          Coaches
        </div>
        <div
          className="cursor-pointer hover:text-button text-gray-600"
          onClick={moveToArticle}
        >
          Article
        </div>
        <div
          className="cursor-pointer hover:text-button border-b-2 border-red"
          onClick={moveToCantact}
        >
          Cantact
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default headerTap;
