import React, { useEffect } from 'react';

const Portfolio = () => {
  useEffectect (() => {
    if (typeof window !== 'undefined') {
      var timer = localStorage.getItem('timer') ? JSON.parse(localStorage.getItem('timer')) : null
      clearTimeout(timer)
    }
  }, [])
  return <div>Portfolio</div>;
};

export default Portfolio;
