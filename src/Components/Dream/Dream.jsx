import React,{useEffect} from 'react'
import './Dream.css'


import AOS from 'aos';
import 'aos/dist/aos.css';


import quality from '../assets/quality.png'
import recuirt from '../assets/recruitment.png'
import remodel from '../assets/remodeling.png'

const Dream = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, 
      easing: 'ease-in-out-back', 
    });
  }, []);

  return (
    <div className='dream'>
      <h2 data-aos="fade-up" >What We Promise To You!</h2>
      <div className="process">
        <div className="processes process1">
            <div className="bar" data-aos="fade-up" >
                <div className="icon" data-aos="fade-up" data-aos-delay="200"><img src={quality} alt="icon" /></div>
            </div>
            <h5>Guaranteed Results</h5>
        </div>

        <div className="processes process2">
            <div className="bar" data-aos="fade-up" >
                <div className="icon" data-aos="fade-up" data-aos-delay="200"><img src={recuirt} alt="icon" /></div>
            </div>
            <h5>Qualified Leads</h5>
        </div>
        
        <div className="processes process3">
            <div className="bar" data-aos="fade-up" >
                <div className="icon" data-aos="fade-up" data-aos-delay="200"><img src={remodel} alt="icon" /></div>
            </div>
            <h5>Industry Specialists</h5>
        </div>
      
      </div>
    
    </div>
  )
}

export default Dream
