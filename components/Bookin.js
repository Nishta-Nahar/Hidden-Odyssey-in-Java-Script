import React from 'react'
import TkCard from './BCard'
import "./Booking.css"

export default function Booking() {
  return (
      <div className='page'>
        <br></br>
        <p className='line'>Welcome to your portal to comfort and convenience. </p>
        <p className='line'>Browse our diverse selection of rooms, find the perfect match for your stay, and book with ease. Your journey to a relaxing and memorable stay starts right here</p>
        <hr className='line'></hr>
          <TkCard id={"1"} room={"Single Room"} details={"Escape to a world of refined elegance and unparalleled comfort in our luxurious double room. Featuring a private balcony, air conditioning, en suite bathroom, flat-screen TV, soundproofing, coffee machine, minibar, and free Wi-Fi, this haven of tranquility is designed to surpass your expectations. From the moment you step into your spacious retreat, you'll be enveloped in an atmosphere of sophistication, where every detail is meticulously crafted to ensure your utmost relaxation and enjoyment."} 
          rate={"$200"} imgURL={"single.png"}></TkCard>
          <TkCard id={"2"} room={"Double Room"} details={"Step into a realm of unparalleled luxury and comfort in our exquisite double room, designed to cater to your every desire. Indulge in the serenity of a private balcony, bask in the comfort of air conditioning, and escape into a tranquil retreat with soundproof walls. Unwind in the lavish en suite bathroom, complete with a rejuvenating walk-in shower and a relaxing bath. Discover endless entertainment at your fingertips on the flat-screen TV."} 
          rate={"$320"} imgURL={"double.png"}></TkCard>
          <TkCard id={"3"} room={"Suite"} details={"Embrace the epitome of luxury and sophistication as you step into our exquisite royal suite, a sanctuary designed to elevate your stay to an unforgettable experience. This haven of tranquility offers a private balcony, air conditioning, soundproof walls for undisturbed tranquility, a private bathroom with a walk-in shower and a relaxing bath, and a flat-screen TV for entertainment at your fingertips."} 
          rate={"$450"} imgURL={"suite.png"}></TkCard>
        <hr className='line'></hr>
        {/* <p className='line'>P</p> */}
      </div>
  )
}
