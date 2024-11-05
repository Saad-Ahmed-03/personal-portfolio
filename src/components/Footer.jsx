import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer (){
  return (
    <>
        <Container fluid="md">
            <Row>
                <Col xs={12} md={4} lg={4}>
                    <h2>Company</h2>
                    <p>Our company is a leading provider of innovative solutions.</p>
                    <p>Address: 123 Main St, Anytown, USA 12345</p>
                    <p>Phone: 555-555-5555</p>
                    <p>Email: <a href="mailto:info@company.com">info@company.com </a></p>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <h2>Follow Us</h2>
                    <ul>
                        <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </>
  )
}