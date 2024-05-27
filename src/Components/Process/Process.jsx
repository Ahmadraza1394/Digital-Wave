import React,{useEffect} from 'react'
import './Process.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Process = () => {

  useEffect(() => {
    AOS.init({ 
      duration: 2000, 
      easing: 'ease-in-out-back', 
    });
  }, []);

  return (
    <div className='process'>

        <h2 data-aos="fade-up" >Our Process!</h2>

        <div className="content">
        <div className="processes processes1" data-aos="fade-up" >
            <div className="head">1</div>
            <h3>Gather Content</h3>
            <p>In the initial step, we collect visuals that highlight your craftsmanship. These form the foundation if our strategy, serving to
      attract a greater number of potential clients to your business.</p>
        </div>
        <div className="processes processes2" data-aos="fade-up" >
            <div className="head">2</div>
            <h3>Launch Ads</h3>
            <p>Next, we launch ads based on the content we've collected. These ads are strategically designed and placed on popular social
      media platforms to capture clients attention.</p>
        </div>
        <div className="processes processes3" data-aos="fade-up" >
            <div className="head">3</div>
            <h3>Generate Leads</h3>
            <p>Finally, we collect information from individuals who are genuinely interested in your services. Prioritising quote-ready leads and
      eliminating tire kickers.
</p>
        </div>
        </div>
      
    </div>
  )
}

export default Process
