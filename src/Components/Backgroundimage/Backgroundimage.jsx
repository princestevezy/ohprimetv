import React from "react";
import { Link } from 'react-router-dom';
import './Backgroundimage.css';





function Backgroundimage(props){
         return(
                <div>
                <div
                className="d-block w-100 h-10" class="banner2">
                <div class="opacity">
                <br/>
                <h1 style={{color:"white"}} class='text-center' id='banner2-content'>{props.pagetitle1}</h1>   
                <p style={{color:"white"}} class='text-center'><Link to='/'><font style={{color:"red"}}>Home</font></Link> | {props.pagetitle2} </p>
           </div>
         </div>   
        </div>
  );
}

export default Backgroundimage;


