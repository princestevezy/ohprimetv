import React from "react";
import './Footer.css'

function Footer(){
    return(
               <div style={{textAlign:"center"}}>
               <div class="footer">
                <p id="nd"></p>
                <br></br>
                <h1 id="gt">Get In Touch With Us</h1>
                <div class="row">
                <div class="col-md-4">
                 <p class="oh-p1">Phone number</p>
                 <p class="oh-p1"><i class="fa fa-phone c"></i> +2347072735452</p>
                </div>
                <div class="col-md-4">
                 <p class="oh-p1">Email address</p>
                 <p class="oh-p1"><i class="fa fa-message c"></i> info9oh-prime@gmail.com</p>
                </div>
                <div class="col-md-4">
                 <p class="oh-p1">Follow us</p>
                 <p class="oh-p1"><i class="fa fa-facebook c"></i>
                 <i class="fa fa-twitter c"></i>
                 <i class="fa fa-instagram c"></i>
                  </p>
                </div>
                </div>
                <br></br>
               </div>
               </div>
    )

}
export default Footer