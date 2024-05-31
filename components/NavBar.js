//put all needed pics in public folder
//rfce
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import './NavBar.css';
import myIcon from './myIcon.svg';


function NavBar() {
    // const [click,setClick]=useState(false);
    // // to update state of click
    
    // const [button,setButton]=useState(true);

    // const handleClick=()=>setClick(!click);
    // //toggles the state of click

    // const closeMobileMenu=()=>setClick(false);

    // //to check for resize of window
    // const showButton=()=>{
    //     if(window.innerWidth<=960){
    //         setButton(false);
    //     }
    //     else{
    //         setButton(true);
    //     }
    // };

    // useEffect(()=>{
    //     showButton();
    // },[])
    // //so that signup button does not show up after resize and refresh in mobile ratio

    // window.addEventListener('resize',showButton);
    // //whenever window is resized you want show button to work

    return (
        <nav className="navbar">
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' >
                <img src="project_logo.png" className="logo"></img>
                    {/* <img src={myIcon} /> */}
                    {/* adds font awesome icon */}
                </Link>
                <ul className='nav-menu'>
                    {/* for nav menu to disappear after selecting an option 
                    in mobile ratio*/}
                    
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Booking' className='nav-links' >
                            Booking
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/toVisit' className='nav-links' >
                            Places To Visit
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Rentals' className='nav-links' >
                            Rentals
                        </Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to='/wishlist' className='nav-links' onClick={closeMobileMenu}>
                            Wishlist
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Cart' className='nav-links' onClick={closeMobileMenu}>
                            Cart
                        </Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to='/login' className='nav-links-mobile' >
                            login
                        </Link>
                    </li>
                </ul>
                <Button buttonStyle='btn--outline'>login</Button>
                {/* if buttonStyle was not passed as attribut then primary style would have
                been made as default style */}
            </div>
        </nav>
    )
}

export default NavBar