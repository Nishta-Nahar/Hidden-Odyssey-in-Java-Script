import React from "react";
import './homePage.css';
import Carousel from './Carousel.js';

function homePage() {

    const slides=[
      {url: 'botanical1.jpg',title: 'h1'},
      // {url: 'hotel2.jpg',title: 'h2'},
      {url: 'hotel3.jpg',title: 'h3'},
      {url: 'restaurant.jpg',title: 'h4'},
      {url: 'sitout.jpg',title: 'h5'},
      {url: 'bathroom.jpg',title: 'h6'},
      {url: 'sitout2.jpg',title: 'h6'},
      // {url: 'chinatown.jpg',title: 'ct'},
    ]

    const container_style = {
      width: "500px",
      height: "280px",
      margin: "10 10 10 10"
    };
  return (
    <div className="home-div">
        <div className="hotel-pic">
          {/* <img src="hotel1.jpeg"/> */}
        </div>


        <div className="hotel-brief-container">
        <p>Nestled amidst the vibrant shoreline of Singapore, 
                our luxurious resort offers an unparalleled haven of tranquility and indulgence. 
                From the moment you step into our grand lobby, you'll be enveloped in an 
                atmosphere of refined elegance, where every detail is meticulously crafted 
                to surpass your expectations. Our spacious and opulent accommodations are designed 
                to provide the ultimate in comfort and relaxation, while our world-class amenities 
                and personalized service ensure that your stay is nothing short of extraordinary. 
                Whether you're seeking adventure from our services, indulging in culinary delights 
                at our country's award-winning restaurants, or exploring the captivating sights and sounds of 
                Singapore, our resort serves as the perfect sanctuary for creating unforgettable memories.</p>
          <div className="brief-img" style={container_style}>
            {/* <img src="hotel2.jpg"/>
            <p>Our comfy rooms, top-notch amenities, 
              and super-friendly staff are here to make your stay a breeze. 
              From a hearty breakfast to late-night snacks, we got you. 
              We're right in the heart of the action, so explore the city at your pace.
            </p> */}
            <Carousel slides={slides}/>

          </div> 
        </div>
    </div>
  )
}

export default homePage