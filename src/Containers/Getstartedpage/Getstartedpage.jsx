import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { getstarted } from "../../images/image";
import Footer from "../../Components/Footer/Footer";
import Backgroundimage from "../../Components/Backgroundimage/Backgroundimage";
import './Getstartedpage.css';


function Getstarted(){
 return(
           <div>
           <Navbar getstarted={{backgroundColor:"white",color:"black"}}>
          </Navbar>
           <Backgroundimage pagetitle1='Getstarted' pagetitle2='Getstarted'>
          </Backgroundimage>
          <br/>
          <br/>
          <h1 class="text-center a-h1">Getstarted 
          <span className="span-h1">now</span></h1> 
          <br/>
          <h4 class='text-center'>Get The Mobile App Version Now On 
          <span className="span-h1">Apple Store Or Google Play Store</span></h4>
           <div class='text-center center'>
           <div class='row a-row'>
           <div class='col-12'>
            <div class="mobileview">
            <img src={getstarted[0]} style={{width:"100%"}}/>
            </div>
            <div class="not-mobileview">
            <img src={getstarted[0]} class='w-50'/>
            </div>
            </div>
            <div class='col-6'>
            <div class="mobileview">
            <a href="https://play.google.com/store/apps/details?id=com.open.heavens.ohprimes&hl=en"><img src={getstarted[2]} class='dbutton' style={{width:"100%"}}/></a> 
            <a href="https://apps.apple.com/ng/app/oh-prime/id1573372232"><img src={getstarted[1]} style={{width:"100%"}}/></a>
            </div>
            <div class="not-mobileview">
            <div style={{display:"inline-block"}}>
            <a href="https://play.google.com/store/apps/details?id=com.open.heavens.ohprimes&hl=en"><img src={getstarted[2]} class='dbutton' style={{width:"50%"}}/></a> 
            <a href="https://apps.apple.com/ng/app/oh-prime/id1573372232"><img src={getstarted[1]} style={{width:"50%"}}/></a>
            </div>
            </div>
            <br/>
            <br/>
            <br/>
           </div>
           </div>
           </div>
          <Footer/>
          </div>
 );
}

export default Getstarted