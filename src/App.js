import React from 'react';
import './App.css';
import Header from './Components/Header';
import Info from './Components/Info';
import AboutUs from '../src/Components/AboutUs';
import lroom from './Assets/images/livingroom.jpg';
import NavBar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Buckhead from './Components/Buckhead';
import WestEnd from './Components/WestEnd';
import Events from './Components/Events';

function App() {
  return (
    <div className="App-background" style = {{ backgroundImage: `url(${lroom})`}}>
    <Header/>
    <br/>
    <BrowserRouter>
      <NavBar/> 
        <Routes>
          <Route path='/AboutUs*' element={<AboutUs/>}/>
          <Route path='/Buckhead*' element={<Buckhead/>}/>
          <Route path='/WestEnd*' element={<WestEnd/>}/>
          <Route path='/Events*' element={<Events/>}/>
          <Route path='/Contact*' element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
    <br/>                
    <Footer/>
    </div>
);
  
}
export default App;
