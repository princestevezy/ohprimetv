import React, {useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Backgroundimage from "../../Components/Backgroundimage/Backgroundimage";
import './Aboutpage.css';

function About(){
  useEffect(()=>{  
  },
  [])
      return(       
              <div>
              <Navbar about={{color:"gray"}}>
              </Navbar>
              <Backgroundimage pagetitle1='About us' pagetitle2='About us'>
              </Backgroundimage>
          <br/>
          <br/>
            <div class="text-center">
            <h1 class="text-center a-h1 tw">Do you want to know 
            <span className="span-h1">more about ohpime</span></h1>
            <br/>    
            <br/>
            <video  class="about-video" src='https://res.cloudinary.com/prince-stevzy/video/upload/v1704212483/ohprime/OH_PRIME.mp4_t4ahvr.mp4' controls/>
            <br></br>
            <br></br>
            <br></br>
            <p className="a-p">The Ohprime  subscription offers you a wide choice of tv channels broadcast through streaming technology.
            Ohprime subscription is a 100% streaming service, you just need to subscribe and have a minumum 4 Mega internet connection to enjoy the Ohprime service with no Freez.Start now watching our bouquets on your TV without satellite dish, whatever your geographic location on earth!
            The service Ohprime is currently the largest supplier of IPTV channels in Europe.</p>
            </div>
             <br/>
             <br/>
             <Footer/>
             </div>
);
}
export default About
