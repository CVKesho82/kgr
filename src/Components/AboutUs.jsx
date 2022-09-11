import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CCard, CCardImage, CCol, CCardText, CCardTitle, CRow, CCardBody} from 'react-bootstrap';

function AboutUs() {
  return (
    <div className="about">
    <br></br>
    <div>
    
    <CCard className="mb-3" style={{ maxWidth: '540px' }}>
  <CRow className="g-0">
    <CCol md={4}>
      <CCardImage src="/images/react400.jpg" />
    </CCol>
    <CCol md={8}>
      <CCardBody>
        <CCardTitle>Kesho Group</CCardTitle>
        <CCardText>
        The Kesho Group, a real estate investment company started in 2012, focuses on offering quality housing for all. <br></br>

        Chris Kesho, owner of the Kesho Group, is an electrical engineer and has been applying his unique technical perspective to the real estate industry for more than 10 years. <br></br>
        <br></br>
        </CCardText>
        <CCardText>
          <small className="text-medium-emphasis">Last updated 3 mins ago</small>
        </CCardText>
      </CCardBody>
    </CCol>
  </CRow>
</CCard>

 
    <br></br>     
    </div> 
    </div>
  )
}

export default AboutUs