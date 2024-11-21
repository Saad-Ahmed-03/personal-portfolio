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
                    <p className='fw-normal fs-18 mb-0'>Software Engineer | Shopify Theme & App Developer | Python </p>
                    <p className='fw-normal fs-18'>
                      Passionate about creating seamless e-commerce experiences, I specialize in Shopify theme and app development, 
                      blending technical expertise with creative problem-solving to help businesses thrive online. With a strong foundation 
                      in front-end and back-end customization, I’m dedicated to delivering high-quality solutions tailored to each client’s unique needs.
                    </p>
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
