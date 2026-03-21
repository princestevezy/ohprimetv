import React, {useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Backgroundimage from "../../Components/Backgroundimage/Backgroundimage";



function Readmore(){
  useEffect(()=>{
  },
  [])
      return(       
              <div>
              <Navbar>
              </Navbar>
              <Backgroundimage pagetitle1='Read more' pagetitle2='Read more'>
              </Backgroundimage>
          <br/>
          <br/>
            <div class="text-center">
            <h1 class="text-center a-h1 tw">Read more
            <span className="span-h1">about ohpime</span></h1>
            <br/>    
            <p className="a-p">The Ohprime subscription offers you a wide choice of tv channels broadcast through streaming technology.
            Ohprime subscription is a 100% streaming service, you just need to subscribe and have a minumum 4 Mega internet connection to enjoy the IPTV service with no Freez.Start now watching our bouquets on your TV without satellite dish, whatever your geographic location on earth!
            The service Ohprime is currently the largest supplier of IPTV channels in Europe.</p>
            </div>
             <br/>
             <br/>
             <Footer/>
             </div>
);
}
export default Readmore