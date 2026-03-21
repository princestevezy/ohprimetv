import React from "react";
import './Backgroundcolor.css'


function BackgroundColor(props){
   return(
     <div>
    <div className="color-banner-1">
    <br></br>
     { props.caroselcontent }
    </div>
    </div>

   );

}
export default BackgroundColor