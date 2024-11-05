import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faGoogle, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Introduction() {
  return (
    <>
      <Container>
        <Row>
            <Col xs={12} lg={8}>
                <div className='intro text-start'>
                    <h1 className='fw-bold fs-70 cusrive-font'>Hi, I am Saad Ahmed</h1>
                    <p className='fw-normal fs-1'>Software Engineer</p>
                </div>
                <div className="mt-3 text-start">
                <a href="#" target="_blank" rel="noopener noreferrer" className="me-3 github">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="me-3 kinkedin">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="me-3 gmail">
                    <FontAwesomeIcon icon={faGoogle} size="2x" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="me-3 whatsapp">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
                </div>
            </Col>
            <Col xs={12} lg={4}>
                <img src='' alt='' className='image-fluid'/>
            </Col>
        </Row>
      </Container>
    </>
  );
}
