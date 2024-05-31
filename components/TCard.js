import React ,{ useState } from 'react';
import './TCard.css'

export default function BCard(props) {
    
    return (
    <div className='visit-div'>
       <div className="card">
        <img className='image' src={props.imgURL}
         alt="...." width="300" height="200" />
         <div className='info'>
        <p className='place'><b>{props.place}</b></p>
        
        <div className='details'>
        <p className="details_">{props.details}</p>
        <p><b>{props.price} </b>/ per person</p>
        <p><b>Opening Hours: {props.hour}</b></p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        </div>
        </div>
    </div>
    )
}
