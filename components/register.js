import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './register.css';
import { useNavigate } from 'react-router-dom';

// const Register = () => {


function Register(){

  const [email,setEmail] = useState('');
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e)=>{


    e.preventDefault();
    axios.post('http://localhost:3000/register',{name,phone,email,password})
    .then(result=>{
      alert("Welcome to Hidden Odessy!");
      console.log(result);
      navigate('/login');
    
    })
    .catch(err=>console.log(err));

  }

  return (
    <div className='register-div'>
      <div className='register-img'>
      </div>
      <div className='register-container'>
        <p>124567909876543</p>
        <div className='register-info'>
          <h2>Welcome to Hidden Odessy</h2>
          <br></br>
          <form onSubmit={handleSubmit}>
          <p>Name: </p>
          <input type='text' className='cname' name='user-name' onChange={(e)=> setName(e.target.value)} placeholder='Full Name' size={30}></input>
          <br></br>
          <br></br>
          <p>Phone Number: </p>
          <input type='text' className='ph' name='user-phone' onChange={(e)=> setPhone(e.target.value)}  placeholder='Enter country code also.' size={30} maxLength={14}></input>
          <br></br>
          <br></br>
          <p>Email: </p>
          <input type='email' className='mailid' name='user-email' onChange={(e)=> setEmail(e.target.value)}   placeholder='Email' size={30}></input>
          <br></br>
          <br></br>
          <p>Password: </p>
          <input type='password' className='passwd' name='user-password' onChange={(e)=> setPassword(e.target.value)} placeholder='Password' size={30}></input>
          <br></br>
          <br></br>
          <button type='submit' className='reg'>Register</button>
          {/* <Link to='/login' className='log-exp'>Already a member? Login now. </Link> */}
          </form>
          {/* <br></br> */}
          <br></br>
          {/* <p>New member? Register now.</p> */}
          {/* <button className='sign'>Sign-up</button> */}
        </div>
      </div>
    </div>
  )
}

export default Register;