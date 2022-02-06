import React, { useEffect } from 'react';

const About = () => {
  useEffect (() => {
    if (typeof window !== 'undefined') {
      var timer = localStorage.getItem('timer') ? JSON.parse(localStorage.getItem('timer')) : null
      clearTimeout(timer)
    }
  }, [])

  return <div>About</div>;
};

export default About;
