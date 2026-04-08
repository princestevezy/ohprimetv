import React, { useEffect } from "react";
import {Link} from "react-router-dom"
import './Homepage.css';
import Aos from "aos";
import Navbar from "../../Components/Navbar/Navbar"
import Backgroundcolor from "../../Components/Backgroundcolor/Backgroundcolor"
import Footer from "../../Components/Footer/Footer";
import Carousel from 'react-bootstrap/Carousel';
import { homeimages } from '../../images/image';


function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });

  }, []);
  return (
    <div>
       <Navbar home={{color:"gray"}}>
      </Navbar>
        <Carousel>
        <Carousel.Item>
        <br/>
        <br/>
        <div className="d-block" id="banner1">
        </div>
        </Carousel.Item>
        <Carousel.Item>
          <br/>
          <br/>
        <div className="d-block" id="banner2">
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <br/>
        <br/>
        <div className="d-block" id="banner3">
        </div>
      </Carousel.Item>
      </Carousel>
      <br></br>
      <div class="center2">
      <div className="row a-row">
          <div className="col-md-6">
          <div data-aos="flip-left" data-aos-duration="1000">
            <img className="img-1" src={ homeimages[0]}/>
          </div>
        </div>
          <div className="col-md-6">
          <div data-aos="flip-right" data-aos-duration="1000">
            <h2 className="oh-prime-h1"> Live Sport and TV-shows for family and best friends </h2>
            <p className="oh-prime-p">
              Get access to all your favorite channels and share with family and friends ! With more than
              40.000 streams between TV channels and VOD,
              the world is open to you. Let’s join the Ohprime Family !
              <br></br><br></br>
             <Link to='/getstarted'><button className="btn btn" style={{ fontSize: "20px", backgroundColor: "red", color: "white" }}> Get Started Now</button></Link>
            </p>
          </div>
        </div>
        </div>
      </div><br></br>
      <Backgroundcolor caroselcontent={
        <div>
          <br></br><br></br>
          <div class="text-center center">
          <div className="row">
            <div class="col-md-4">
              <div data-aos="zoom-in" data-aos-duration="2000">
                <img class="iconimage" src={homeimages[1]}/>
                <br></br>
                <p className="white">Download</p>
              </div>
            </div>
            <div className="col-md-4">
              <div data-aos="zoom-in" data-aos-duration="2000">
                <img className="iconimage" src={homeimages[2]}/>
                <br></br>
                <p className="white">Download</p>
              </div>
            </div>
            <div className="col-md-4">
              <div data-aos="zoom-in" data-aos-duration="2000">
                <img className="iconimage" src={homeimages[3]}/>
                <br></br>
                <p className="white">Download</p>
              </div>
            </div>
            <div class="col-md-4">
              <div data-aos="zoom-in" data-aos-duration="2000">
                <img className="iconimage" src={homeimages[4]} />
                <br></br>
                <p className="white">Download</p>
              </div>
            </div>
          </div>
          <br></br><br></br>
        </div>
        </div>
      }>
      </Backgroundcolor>
      <br></br>
      <h1 style={{ textAlign: "center"}} id='channels' class='tw'>Compatible with 
      <span className="span-h1">all Devises</span>
      </h1>
      <br></br>
      <div class="text-center center">
      <div className="row a-row">
        <div class="col-md-4">
          <div data-aos="zoom-in" data-aos-duration="2000">
            <img class="iconimage2" src={homeimages[5]} />
          </div>
        </div>
        <div className="col-md-4">
          <div data-aos="zoom-in" data-aos-duration="2000">
            <img className="iconimage2" src={homeimages[6]} />
          </div>
        </div>
        <div className="col-md-4">
          <div data-aos="zoom-in" data-aos-duration="2000">
            <img className="iconimage2" src={homeimages[7]} />
          </div>
        </div>
        <div class="col-md-4">
          <div data-aos="zoom-in" data-aos-duration="2000">
            <img className="iconimage2" src={homeimages[8]} />
          </div>
        </div>
        <div class="col-md-4">
          <div data-aos="zoom-in" data-aos-duration="2000">
            <img className="iconimage2" src={homeimages[9]}/>
          </div>
        </div>
        <div class="col-md-4">
          <div data-aos="zoom-in" data-aos-duration="2000">
            <img className="iconimage2" src={homeimages[10]}/>
          </div>
      </div>
      </div>
      </div>
      <div style={{ textAlign: "center"}}>
        <br></br><br></br>
      </div>
      <Backgroundcolor caroselcontent={
          <div>
           <h1 className="white text-center">
            <font style={{ color: "red", fontSize: "18px" }}>Interesing</font>
            <br></br>
            Featured
            <font style={{ color: "red", paddingLeft: "10px" }}>
              Shows</font></h1>
           <br></br>
           <div className="not-mobileview">
          <div class="text-center center">
          <Carousel style={{ color: "", textAlign: "center" }}  buttomIcon={<span aria-hidden="true" className="carousel-control-buttom-icon" />}>
          <Carousel.Item>
           <div class="text-center">
           <div class="row a-row">
             <div class="col-3">
              <img class="gallary-img" src={homeimages[11]}/>
            </div>
            <div class="col-3">
              <img class="gallary-img" src={homeimages[12]}/>
            </div>
            <div class="col-3">
              <img class="gallary-img" src={homeimages[13]} />
            </div>
            <div class="col-3">
            <img class="gallary-img" src={homeimages[14]}/>
            </div>
            </div>
            </div>
            <br></br>
          </Carousel.Item>
          <Carousel.Item>
           <div class="text-center">
           <div class="row a-row">
           <div class="col-3">
           <img class="gallary-img" src={homeimages[15]}/>
           </div>
            <div class="col-3">
              <img class="gallary-img" src={homeimages[16]}/>
            </div>
            <div class="col-3">
              <img class="gallary-img" src={homeimages[17]}/>
            </div>
            <div class="col-3">
              <img class="gallary-img" src={homeimages[18]}/>
            </div>
            </div>
            </div>
            <br></br>
          </Carousel.Item>
          </Carousel>
          </div>
          </div>
          <div class="mobileview">
          <div class="text-center">
          <Carousel>
          <Carousel.Item>  
          <div class="row a-row">
          <div class="col-4">
           <img class="gallary-img" src={homeimages[11]}/>
           <p class='text-white'>Abejoye</p>
          </div>
            <div class="col-4">
            <img class="gallary-img" src={homeimages[12]} />
            <p class='text-white'>Heart Pain</p>
            </div>
            <div class="col-4">
            <img class="gallary-img" src={homeimages[13]}/>
            <p class='text-white'>The Cry Of An Angel</p>
            </div>
            </div> 
            </Carousel.Item>
            <Carousel.Item>  
          <div class="row a-row">
          <div class="col-4">
           <img class="gallary-img" src={homeimages[15]}/>
           <p class='text-white'>Legion</p>
          </div>
            <div class="col-4">
            <img class="gallary-img" src={homeimages[16]} />
            <p class='text-white'>Abejoye 5</p>
            </div>
            <div class="col-4">
            <img class="gallary-img" src={homeimages[18]}/>
            <p class='text-white'>Gbemi2</p>
            </div>
            </div> 
            </Carousel.Item>
            </Carousel>
            </div>
            </div>
          <br></br><br></br><br></br>
          <br></br><br></br>
          </div>
      }>
      </Backgroundcolor>
      <br></br><br></br>
      <div>
        <h1 style={{ textAlign: "Center" }}>What our client says</h1>
        <br></br>
          <Carousel style={{ color: "", textAlign: "center" }} variant='dark' buttomIcon={<span aria-hidden="true" className="carousel-control-buttom-icon" />}>
          <Carousel.Item>
            <h5>John Emanuel</h5>
            <i class='fa fa-star yellow'></i>
            <i class='fa fa-star yellow'></i>
            <i class='fa fa-star yellow'></i>
            <p class='c-t'>I love the great service ohprime brings world wide.</p>
            <br></br>
          </Carousel.Item>
          <Carousel.Item>
            <h5>Rev Peter John</h5>
            <i class='fa fa-star yellow'></i>
            <i class='fa fa-star yellow'></i>
            <i class='fa fa-star yellow'></i>
            <p class='c-t'>I love the series Ohprime provides on there Tv channels.</p>
            <br></br>
          </Carousel.Item>
          <Carousel.Item>
            <h5>Esther Joy</h5>
            <i class='fa fa-star yellow'></i>
            <i class='fa fa-star yellow'></i>
            <i class='fa fa-star yellow'></i>
            <p class='c-t'>I love the sports ohprime provides on there tv channels .</p>
            <br></br>
          </Carousel.Item>
        </Carousel>
      </div>
      <br></br><br></br>
      <Footer />
    </div>
  );
}
export default Home




