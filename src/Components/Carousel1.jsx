import React from 'react';
import {Carousel} from 'react-bootstrap';
import Exterior from '../Assets/images/Exterior.jpg';
import kitchen from '../Assets/images/kitchentableangel.jpg';
import bathroom from '../Assets/images/bathroom.jpg';

function Carousel1() {
    return (
      <div>
      <div className="carousel">
      <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Exterior} width='400px' height='400px'
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Peachtree Dunwoody</h5>
          <p>3000 sq ft 4 bed 3 bath</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={kitchen} width='400px'height='400px'
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Dining for 8</h5>
          <p>Spacious, modern room for formal dining</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bathroom} width='400px' height='400px'
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>En Suite Bath</h5>
          <p>Rain shower, dual vanity, dimming chandeler with separate shower and soaking tub</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
    )
}
export default Carousel1