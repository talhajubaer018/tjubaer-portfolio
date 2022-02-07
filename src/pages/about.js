import React, { useEffect } from 'react';

const About = () => {
  useEffect (() => {
    if (typeof window !== 'undefined') {
      var timer = localStorage.getItem('timer') ? JSON.parse(localStorage.getItem('timer')) : null
      clearTimeout(timer)
    }
  }, [])

  return (
    <div>
      <h2>About Me.</h2>
    </div>
  )
};

export default About;
