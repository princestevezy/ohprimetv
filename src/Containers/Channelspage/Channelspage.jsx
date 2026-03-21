import React from "react";
import '../../Containers/Homepage/Homepage.css';
import Table from 'react-bootstrap/Table';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { channelimages } from "../../images/image";
import Backgroundimage from "../../Components/Backgroundimage/Backgroundimage";

function Channels() {
  return (
    <div>
       <Navbar channels={{color:"gray"}}>
       </Navbar>
        <Backgroundimage pagetitle1='Channels' pagetitle2='Channels'>
        </Backgroundimage>
          <br/>
          <br/>
          <div class="text-center">
          <h1 class="text-center a-h1 tw">Check Out  
          <span className="span-h1">Ohprime Channels</span></h1>
          <br/>    
          <Table striped bordered hover variant="">
      <thead>
          <tr>
          <th>No</th>
          <th>Channel name</th>
          <th>Channel image</th>
          <th>About the channels</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 1</td>
          <td><b>Dove Television</b></td>
          <td><img class="iconimage2" src={ channelimages[0] }/></td>
          <td style={{width:"40%"}}><p style={{textAlign:"justify"}}>Dove Television, the official TV Channel of the
           Redeemed Christian Church of God.</p></td>
        </tr>
        <tr>
        <td>2</td>
        <td><b>Dove Entertainment</b></td>
        <td><img class="iconimage2" src={ channelimages[1] }/></td>
        <td style={{width:"40%"}}><p style={{textAlign:"justify"}}>Dove Television brings you Christian entertainment in its purest form; on 
         sports, movies, music, life style and more.</p></td>
         </tr>
         <tr>
        <td>3</td>
        <td><b>Dove Africa</b></td>
        <td><img class="iconimage2" src={ channelimages[0] }/></td>
        <td style={{width:"40%"}}><p style={{textAlign:"justify"}}>
        You want to know more about what God is doing 
        across the continent of Africa? Dove Africa gives you more; 
        from the mission fields, ministration and more 
        that will bless your hearts and souls.
          </p></td> 
         </tr>
         <tr>
        <td>4</td>
        <td><b>DOVE EUROPE</b></td>
        <td><img class="iconimage2" src={ channelimages[4] }/></td>
        <td style={{width:"40%"}}><p style={{textAlign:"justify"}}>
         Dove Europe is an extended arm of Dove Television to the Europian continent.
         Enjoy non-stop Christian programming from anointed and
         seasoned men of God and more.
          </p></td> 
         </tr>
         <tr>
        <td>5</td>
        <td><b>DOVE NORTH-AMERICA</b></td>
        <td><img class="iconimage2" src={ channelimages[0] }/></td>
        <td style={{width:"40%"}}><p style={{textAlign:"justify"}}>
        Dove North America is an extended arm of Dove Television to the America continent. Enjoy non-stop 
        Christian programming from anointed and
        seasoned men of God and more.
        </p></td> 
         </tr>
      </tbody>
    </Table>
    <br/>
       <br/>
       </div>
      <Footer/>
    </div>
  );
}
export default Channels;