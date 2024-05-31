import React from 'react';
import { Button } from './button';
import './Footer.css'
import { Navigate, useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className='footer-subscription-heading'>
              Join us to recieve hassle-free vaction times.
              <br></br>
              <br></br>
              <p>
              Email us at HiddenOdyssey@gmail.com for booking.
            </p>
            <p>or call us:</p>
            <p><ul>
              <li>+911234567890</li>
              <li>+915738475932</li>
              <li>+913748294756</li>
            </ul></p>
            </p>
        </section>
        <div className='footer-links'>
        </div>
    </div>
  )
}

export default Footer