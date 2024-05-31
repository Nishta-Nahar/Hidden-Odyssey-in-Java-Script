import React ,{ useState } from 'react';
import BCard from './TCard';
import './Ticketin.css';
import PropTypes from 'prop-types';


export default function Ticketing() {
   
  return (
    <div className='ticket-div'>
      {/* <hr className='line'></hr> */}
      <hr></hr>
      <p>Dive into a world of endless entertainment and seamless ticket booking right here. we've curated a collection of the hottest events in town. Ready to secure your spot? Let the excitement begin!</p>
      <hr className='line'></hr>
        <div className='grid-container'>
        <div class="item1">
            <BCard hour={"8:00AM – 8:00 PM"} imgURL={"tour.jpeg"} place={"Lion City Bike Tour of Singapore"} price={"from $60"} details={"Discover Lion City’s charming back streets and historical landmark with this Lion City Bike Tour. You’ll be taken through the most beautiful and interesting aspects of the city learning about its rich history."}></BCard>
        </div>
        <div class="item2">
            <BCard  hour={"8:30AM – 9:15 PM"} imgURL={"car.jpeg"} place={"Singapore Cable Car"} price={"$15"} details={"The Singapore Cable Car, a gondola lift, is linked from Mount Faber located at the main island to the Sentosa island. The cable offers a scenic aerial view while transiting from one end to the other"}></BCard>
        </div>
        <div class="item3">
            <BCard  hour={"Open 24 hours"} imgURL={"flyer.jpg"} place={"Singapore Flyer"} price={"$40"} details={"Discover the thrill of riding on one of the world's tallestobservation wheels. Feast your eyes on breathtakingviews of Singapore's eclectic skyline."}></BCard>
        </div>
        <div class="item4">
            <BCard  hour={"9:00 AM – 9:00 PM"} imgURL={"gardens-by-the-bay.jpg"} place={"Gardens By the Bay"} 
            price={"$65"}  details={"Explore the must-see attractions of Gardens by the Bay,such as Floral Fantasy, Flower Dome, and Cloud Forest,all in one combo."}></BCard>
        </div>
        <div class="item5">
            <BCard  hour={" 11:00 AM TO 9:00 PM"} imgURL={"sands-skypark-observation.jpg"} place={"Sands Skypark"} price={" $20"} details={"Let your guests enjoy a spectacular 360-degree view of Singapore from 56 storeys above while sipping cocktailsand enjoying live entertainment."}></BCard>
        </div>
        <div class="item6">
            <BCard  hour={"8:30AM – 6:00 PM"} imgURL={"Sinagapore-zoo.jpg"} place={"Singapore Zoo"} price={"$48"} details={"Get up close with animals of all stripes, and walk on the wild side when you visit the Singapore Zoo."}></BCard>
        </div>
        </div>
        <hr className='line'></hr>
        <h3><u>Please Note:</u></h3>
        <p>*prices are subject to change</p>
        <p>For booking of tickets, please call reception.</p>
        <p>Booking must be done atleast 1 day prior to event.</p>
        <hr></hr>
        {/* {items.map((item) => (
              <div key = {item.id} id='div1' className='grid-container'>
                <BCard imgURL={item.imgURL} place={item.place} price={item.price} details={item.details} ></BCard>
                  </div>
          ))} */}
    </div>
  )
}  