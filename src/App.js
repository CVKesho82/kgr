import React from 'react';
import {BrowserRouter, HashRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import AboutUs from '../src/Components/AboutUs';
import lroom from './Assets/images/livingroomww.jpg';
import NavBar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import EventRequest from './Components/EventRequest';
import HiddenDiamondBuckhead from './Components/HiddenDiamondBuckhead';
import HiddenDiamondAshviewHeights from './Components/HiddenDiamondAshviewHeights';
import Reservations from './Components/Reservations';

function App() {
  return (
    <div>
    <Header/>
    <br/>
    <NavBar />
    <BrowserRouter>  
    <Routes> 
          <Route exact path='/*' element={<Reservations />} />
          <Route exact path='/Reservations/*' element={<Reservations/>}/>
          <Route exact path='/HiddenDiamondBuckhead/*' element={<HiddenDiamondBuckhead/>}/>
          <Route exact path='/HiddenDiamondAshviewHeights/*' element={<HiddenDiamondAshviewHeights/>}/>
          <Route exact path='/EventRequest/*' element={<EventRequest/>}/>
          <Route exact path='/AboutUs/*' element={<AboutUs/>}/>
          </Routes>    
    </BrowserRouter>
    <br/>                
    <Footer/>
    </div>
);
}
export default App
