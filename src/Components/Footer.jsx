import React from 'react';
import {Card} from 'react-bootstrap';
import {FaRegCopyright, FaFacebook, FaInstagramSquare, FaTwitter} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer1" >
    <Card className="footer2" body><FaRegCopyright/> 2022 Kesho Group, LLC {' '} 
    <a href='https://www.facebook.com/keshogroup'><FaFacebook size={30}/></a>{' '}<a href='https://www.instagram.com/keshogrouprentals/'><FaInstagramSquare size={30}/></a>{' '}<a href ='https://twitter.com/KeshoGroupREI'><FaTwitter size={30}/></a>{' '}</Card>
</div>
  )
}
export default Footer