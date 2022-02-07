import React, { useEffect } from 'react';

const Contact = () => {
  useEffect (() => {
    if (typeof window !== 'undefined') {
      var timer = localStorage.getItem('timer') ? JSON.parse(localStorage.getItem('timer')) : null
      clearTimeout(timer)
    }
  }, [])
  return <div>Contact</div>;
};

export default Contact;
