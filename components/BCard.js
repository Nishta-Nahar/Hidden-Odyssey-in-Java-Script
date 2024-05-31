import React ,{ useState } from 'react';
import './BCard.css'

export default function TkCard(props) {
  const [count, setCount] = useState(0);
  const increment =() =>
  {
      setCount(count+1);
  }
  const decrement =() =>
  {
      setCount(count-1);
  }
  return (

    <div className='booking-div'>
      <div className='wrapper-div'>
        <div className='booking-img'>
          <img src={props.imgURL} width="280px" height="170px"></img>
        </div>
        <div className='room-info'>
          <p>{props.id}. <b>{props.room}</b></p>
          
          <p>{props.details}</p>
          <p><b>{props.rate}</b>/ per night</p>
        </div>
      </div>
    </div>
  )
}
