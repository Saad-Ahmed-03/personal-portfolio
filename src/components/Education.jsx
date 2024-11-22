import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Education (){
  return (
    <>
    <Container>
        <div className="title-header">
            <h2 className="fs-70"> Education </h2>
        </div>
        <Row>
            <Col lg={12}>
                <div className="education-item">
                    <h3>Bachelor of Science in Computer Science (BSCS)</h3>
                    <h4>PAF-KIET</h4>
                    <p className='mb-0'>2017-2022</p>
                    <p>Majors in Machine leaarning | Data Science | Big Data </p>
                </div>
            </Col>
            <hr></hr>
            <Col lg={12}>
                <div className="education-item">
                    <h3>Intermediate</h3>
                    <h4>GDBC Nishtar Road </h4>
                    <p className='mb-0'>2013-2015</p>
                    <p> Pre-Engineering </p>
                </div>
            </Col>
            <hr></hr>
            <Col lg={12}>
                <div className="education-item">
                    <h3>Matriculation</h3>
                    <h4>Bahria College N-O-R-E-I </h4>
                    <p className='mb-0'>2011-2013</p>
                    <p> Computer Science </p>
                </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}