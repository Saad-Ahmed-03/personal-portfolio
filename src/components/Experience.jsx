import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DevmontLogo from "../images/DevmontDigital.png"
import CubixLogo from "../images/cubixLogo.svg"
import QureshiLogo from "../images/QE-Logo.webp"


export default function Experience (){
  return (
    <>
      <Container>
        <div className="title-header">
            <h2 className="fs-70"> Experience </h2>
        </div>
        <Row className='devmontcompany'>
            <Col lg={6}>
                <div className="experience-item text-start">
                    <h3>Devmont Digital</h3>
                    <h4>Senior Shopify Theme & App Developer</h4>
                    <p className='mb-0'>Feb-2024 - Present</p>
                    <h4> Job Decsription: </h4>
                    <ul className="mb-0" style={{ listStyle:"square" }}>
                      <li>
                        <p className='mb-0'> Responsible for Development of Shopify Apps for various clients, ensuring seamless integration with Shopify's ecosystem. </p>
                      </li>
                      <li>
                        <p className='mb-0'> Successfully launched and maintained Shopify apps, demonstrating expertise in app development and integration with Shopify's platform. </p>
                      </li>
                    </ul>
                </div>
            </Col>
            <Col lg={6} className='d-flex justify-content-center align-items-center'>
                <div className="experience-logo">
                  <a href='https://devmontdigital.io/' target="_blank">
                    <img src={DevmontLogo} alt='Devmont' title='Devmont'/>
                  </a>
                </div>
            </Col>
        </Row>
        <hr></hr>
        <Row className='cubixcompany'>
            <Col lg={6}>
                <div className="experience-item text-start">
                    <h3>Cubix</h3>
                    <h4>Associate Software Engineer</h4>
                    <p className='mb-0'>Jul-2022 - Dec-2023</p>
                    <h4> Job Decsription: </h4>
                    <ul className="mb-0" style={{ listStyle:"square" }}>
                      <li>
                        <p className='mb-0'> Responsible for Development of Websites in Shopify with custom functionlaities in Shopify sites. </p>
                      </li>
                      <li>
                      <p className='mb-0'> Successfully launched and maintained Shopify Website, demonstrating expertise in Theme development and App Integration with Shopify's platform. </p>
                      </li>
                    </ul>
                </div>
            </Col>
            <Col lg={6} className='d-flex justify-content-center align-items-center'>
                <div className="experience-logo">
                  <a href='https://www.cubix.co/' target="_blank">
                    <img src={CubixLogo} alt='cubix' title='cubix'/>
                  </a>
                </div>
            </Col>
        </Row>
        <hr></hr>
        <Row className='cubixcompany'>
            <Col lg={6}>
                <div className="experience-item text-start">
                    <h3>Qureshi Enterprises</h3>
                    <h4> Internship </h4>
                    <p className='mb-0'>may-2021 - Sep-2021</p>
                    <h4> Job Decsription: </h4>
                    <ul className='mb-0' style={{ listStyle:"square" }}>
                      <li>
                      <p className='mb-0'> Successfully launched and maintained Shopify Website named "petologist.pk" now converted to WordPress. </p>
                      </li>
                    </ul>
                </div>
            </Col>
            <Col lg={6} className='d-flex justify-content-center align-items-center'>
                <div className="experience-logo">
                  <a href='https://petologist.pk/' target="_blank">
                    <img src={QureshiLogo} alt='' title='Qureshi Enterprises'/>
                  </a>
                </div>
            </Col>
        </Row>
      </Container>
    </>
  )
}