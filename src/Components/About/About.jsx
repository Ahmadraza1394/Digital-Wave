import React,{useEffect} from 'react'
import './About.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, 
      easing: 'ease-in-out-back', 
    });
  }, []);

  return (
    <div className='about'>
      <h2 data-aos="fade-up" >WHO ARE WE?</h2>
      <p data-aos="fade-up" data-aos-delay="200">Brand Wave Digital, strategically located in the United Arab Emirates, excels in propelling diverse businesses forward by securing  high-quality leads through targeted advertising on major social media platforms. Our expertise in digital marketing allows you to focus on your core operations while we connect you with genuinely interested clients, ensuring efficient and effective business growth across various niches.</p>
    </div>
  )
}

export default About
