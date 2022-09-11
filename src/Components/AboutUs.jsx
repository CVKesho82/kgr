import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

function AboutUs() {
  return (
     <Card style={{ width: '18rem' }}>
        <Card.Img variant="left" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Kesho Group</Card.Title>
          <Card.Text>
          A real estate investment company started in 2012, the Kesho Group, focuses on offering quality housing for all.
          Chris Kesho, owner of the Kesho Group, is an electrical engineer and has been applying his unique technical perspective to the real estate industry for the last 10 years.

          </Card.Text>
        </Card.Body>
      </Card>
    );
}

export default AboutUs