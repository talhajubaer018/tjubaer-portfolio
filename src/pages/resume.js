import React, { useEffect } from 'react';

const Resume = () => {
  useEffect (() => {
    if (typeof window !== 'undefined') {
      var timer = localStorage.getItem('timer') ? JSON.parse(localStorage.getItem('timer')) : null
      clearTimeout(timer)
    }
  }, [])
  return <div>Resume</div>;
};

export default Resume;
