import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Service from '../components/Service'
import Blog from '../components/Blog'
import slider from"../assets/images/slider-img.jpg"
import "../css/Home.css"
function Home() {
  return (
    <>

<div className="slider_section">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="detail_box">
          <h1>
            Electrical <br />
            Services <br />
            Providers
          </h1>
          <p>
            It is a long established fact that a reader will be distracted
            by readable content of a page when looking at its layout. The
            point of using Electrochip.
          </p>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
      <div className="col-lg-5 col-md-6 offset-lg-1">
        <div className="img_content">
        <div className="img_container">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="img-box">
                  <img src={slider} alt="slider"/>
                </div>
              </div>
              <div className="carousel-item">
                <div className="img-box">
                  <img src={slider} alt="slider"/>
                </div>
              </div>
              <div className="carousel-item">
                <div className="img-box">
                  <img src={slider} alt="slider"/>
                </div>
              </div>
            </div>
            </div>
            </div>
            
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="sr-only">Next</span>
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>



      <Service/>
      <About/>
      <Blog/>
      <Contact/>

      

    </>
  )
}

export default Home
