import React from 'react';
import './Footer.css';

const Footer = () => {

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // };

  return (
    <div className='footer'>
      <div className="logo">
          <h3 data-aos="fade-right">BRAND WAVE</h3>
          <p data-aos="fade-right">Digital .</p>
      </div>
      <div className="copyright">
        Brand wave . &#169; 2024 All Rights Reserved 
      </div>
      
    </div>
  );
}

export default Footer;
