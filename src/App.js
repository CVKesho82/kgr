import React from 'react';
import {BrowserRouter, HashRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import AboutUs from '../src/Components/AboutUs';
import lroom from './Assets/images/livingroom.jpg';
import NavBar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Buckhead from './Components/Buckhead';
import WestEnd from './Components/WestEnd';
import Events from './Components/Events';
import Home from './Components/Home';
import Reservations from './Components/Reservations';


function App() {
  return (
    <div className="App-background" style = {{ backgroundImage: `url(${lroom})`, opacity:.7}}>
    <Header/>
    <br/>
    <NavBar />
    <BrowserRouter>  
    <Routes> 
          <Route exact path='/kgr/*' element={<Home />} />
          <Route exact path='/Reservations/*' element={<Reservations/>}/>
          <Route exact path='/Buckhead/*' element={<Buckhead/>}/>
          <Route exact path='/WestEnd/*' element={<WestEnd/>}/>
          <Route exact path='/Events/*' element={<Events/>}/>
          <Route exact path='/Contact/*' element={<Contact/>}/>
          <Route exact path='/AboutUs/*' element={<AboutUs/>}/>
          </Routes>
      
    </BrowserRouter>
    <br/>                
    <Footer/>
    </div>
);
  
}
export default App
