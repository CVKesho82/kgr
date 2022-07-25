import React from 'react';
import {Row,Col, Container, Card} from 'react-bootstrap';

function Events() {
  return (
    <div><h3>Custom Events</h3>
     <Container className="textcontainer">
   <div></div>
   <Row>
    <Col xs={4} md={4}>
   <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Header><h3>Intimate Weddings</h3></Card.Header>
        <Card.Body>
          <Card.Title>10 hr rental</Card.Title>
          <Card.Text>
            Up to 25 Guests
            <br></br>
            Groom's/Bride's Dressing Room
            <br></br>
            Lawn Ceremony
            <br></br>
            Parking Shuttle
            <br></br>
        </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Header><h3>Celebration Picnics</h3></Card.Header>
        <Card.Body>
          <Card.Title>10 hr rental</Card.Title>
          <Card.Text>
            Up to 12 Guests
            <br></br>
            Picnic Decorations
            <br></br>
            Picnic Setup
            <br></br>
            Catering
            <br></br>
            Parking Shuttle
            <br></br>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Header><h3>Corporte Retreats</h3></Card.Header>
        <Card.Body>
          <Card.Title>10 hr rental</Card.Title>
          <Card.Text>
            Up to 10 Employees
            <br></br>
            Presentation Monitors
            <br></br>
            Game Room 
            <br></br>
            Parking Shuttle
            <br></br>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </Row>
</Container>        
    </div>
  )
}

export default Events