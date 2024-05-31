import React, { Component } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import homePage from "./components/homePage";
import Login from "./components/Login";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Rentals from './components/rental';
import Booking from './components/Bookin';
import Ticketing from './components/Ticket';
import Register from './components/register';
import './components/App.css';

function App() {
  // const [user,setLoginUser] = useState({});
  return (
    <div className='app-div'>
      <Router>
        <NavBar/>
        {/* contains all pages/paths */}
        <Routes>
          {/* all switch statements */}
          <Route  path='/' Component={homePage} >
            {
              
            }
          </Route>

          <Route  path='/login' element={<Login />} ></Route>

          <Route  path='/register' element={<Register />} ></Route>

          <Route path='/Rentals'  Component={Rentals}>
          </Route>

          <Route path='/Booking'  Component={Booking}>
          </Route>

          <Route path='/toVisit'  Component={Ticketing}>
          </Route>

          {/* <Route path='/Cart' >
          </Route>

          <Route path='/wishlist'>
          </Route> */}




        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;


// import './logging_in/log_server.js';
 
// class App extends Component {
//   render() {
//     return (
//       <div className='app-div'>
//         <Router>
//           <NavBar/>
//           {/* contains all pages/paths */}
//           <Routes>
//             {/* all switch statements */}
//             <Route path='/'  Component={homePage}>
//             </Route>

//             <Route path='/login'  Component={Login}>
//             </Route>

//             <Route path='/register'  Component={Register}>
//             </Route>

//             <Route path='/Rentals'  Component={Rentals}>
//             </Route>

//             <Route path='/Booking'  Component={Booking}>
//             </Route>

//             <Route path='/toVisit'  Component={Ticketing}>
//             </Route>

//             <Route path='/Cart' >
//             </Route>

//             <Route path='/wishlist'  Component={Rentals}>
//             </Route>




//           </Routes>
//           <Footer/>
//         </Router>
//       </div>
//     );
//   }
// }
  
// export default App;



