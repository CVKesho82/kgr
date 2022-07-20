import React from 'react';
import {Card} from 'react-bootstrap';
import {FaRegCopyright, FaFacebook, FaInstagramSquare, FaAirbnb} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer1" >
    <Card className="footer2"body><FaRegCopyright/> 2022 Kesho Group, LLC 
    <FaFacebook/><FaInstagramSquare/><FaAirbnb/></Card>
</div>
  )
}

export default Footer