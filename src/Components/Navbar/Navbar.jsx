import React from "react";
import { Link } from "react-router-dom";
import { slide } from "../../images/image"; 
import './Navbar.css'


function Navbar(active){
     return(
     <div>
     <div class="webname">
     <img src="https://res.cloudinary.com/prince-stevzy/image/upload/v1682592838/m507t0006_retro_tv_20june22_03-removebg-preview_1_bya9e6.png" class="ohprime-logo"/>
     <font id="head">Ohprime Tv</font><br/>
     <nav id="link">
      <Link to="/"      style={active.home}>Home</Link>
      <Link to="/about" style={active.about}>About us</Link>
      <Link to="/channels" style={active.channels}>Channels</Link>
      <Link to="/getstarted"> <button  className="btn gs" style={active.getstarted}>Get started</button></Link>
    </nav>
    <nav id="phone-link"  class='navbar navbar-dark h' style={{position:"fixed",width:"100%"}}>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" style={{top:"-21px",right:"0",position:"absolute",marginRight:"17px"}} data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" style={{color:"blue"}}></span>
    </button>
    </nav>
    </div>
    <div id="phone-link" style={{position:"fixed",width:"100%",zIndex:"3"}}>
    <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-black p-4 text-center">
    <br></br><br></br>
    <Link to='/'>Home</Link><br></br>
     <br></br>
    <Link to='/about'>About us</Link>
    <br></br><br></br>
    <Link to='/channels' className="">Channels</Link>
    <br></br><br></br>
    <Link to='/getstarted' className="">Get started</Link>
    <br></br><br></br>
    </div>
    </div> 
    </div>
    </div>
  );
}
export default Navbar