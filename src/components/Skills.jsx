import htmlLogo from "../images/html-5-logo.svg"
import cssLogo from "../images/css3logo-com.svg"
import JsLogo from "../images/js-yellow.svg"
import JQueryDarkLogo from "../images/jQuery-Logo_On_Dark.svg"
import ReactLogo1 from "../images/React_logo_dark.svg"
import Remixlogo from "../images/remix-dark.svg"
import PythonLogo from "../images/python-logo-master-v3-TM.svg"
import ShopifyLogo1 from "../images/shopify-logo.svg"
import LiquidLogo from "../images/Shopify-liquid.webp"
import MongoDBLogoWhite from "../images/MongoDB_White.svg"
import githubCatLogo from "../images/github-mark-white.svg"
import vercelLogo from "../images/vercel-logotype-light.svg"
import PostManLogo from "../images/postman-logo.svg"
import TikTokLogo from "../images/TikTokapiLogo.svg"
import MetaLogo from "../images/MetaAPILogo.svg"
import RestAPILogo from "../images/rest-apiLogo.svg"
import GraphQLLogo from "../images/GraphQLLogo.png"
import bootsrtapLogo from "../images/bootstrap-4.svg"
import tailwindLogo from "../images/tailwindcss-logo.svg"
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { Tooltip } from 'bootstrap';


export default function Skills() {

  useEffect(() => {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));
  }, []);

  return (
    <Container>
      <div className="title-header">
        <h2 className="fs-70">Skills</h2>
      </div>
      <Row className="row-1 FrontEnd">
          <Col lg={12} className="d-flex align-items-center">
            <Col lg={2} className="">
              <h3 className="category-title">Frontend</h3>
            </Col>
            <Col lg={10}>
              <div className="skills-container d-flex align-items-center gap-5">
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                navigation={true}
                grabCursor={true}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                  <SwiperSlide>
                    <div className="skill skill-1">
                      <img src={htmlLogo} alt="HTML" className="skills-logo" data-bs-toggle="tooltip" data-bs-placement="top" title="HTML"/>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="skill skill-2">
                      <img src={cssLogo} alt="CSS" className="skills-logo" data-bs-toggle="tooltip" data-bs-placement="top" title="CSS"/>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="skill skill-3">
                      <img src={tailwindLogo} alt="CSS" className="skills-logo tailwind" data-bs-toggle="tooltip" data-bs-placement="top" title="Tailwind CSS"/>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="skill skill-4">
                      <img src={bootsrtapLogo} alt="CSS" className="skills-logo" data-bs-toggle="tooltip" data-bs-placement="top" title="Bootstrap"/>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="skill skill-5">
                      <img src={JsLogo} alt="JavaScript" className="skills-logo" data-bs-toggle="tooltip" data-bs-placement="top" title="JavaScript"/>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="skill skill-6">
                      <img src={JQueryDarkLogo} alt="JQuery" className="skills-logo jQuery" data-bs-toggle="tooltip" data-bs-placement="top" title="JQuery"/>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="skill skill-7">
                      <img src={ReactLogo1} alt="React.js" className="skills-logo" data-bs-toggle="tooltip" data-bs-placement="top" title="React.js"/>
                    </div>
                  </SwiperSlide>
              </Swiper>
              </div>
            </Col>
          </Col>
      </Row>
      <Row className="row-2 BackEnd mt-3">
      <Col lg={12} className="d-flex align-items-center">
        <Col lg={2}>
          <h3 className="category-title">BackEnd</h3>
        </Col>
        <Col lg={10}>
          <div className="skills-container d-flex align-items-center gap-5">
            <div className="skill skill-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Remix.js">
              <img src={Remixlogo} alt="Remix" className="skills-logo" />
              {/* <p>Remix.js</p> */}
            </div>
            <div className="skill skill-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Python">
              <img src={PythonLogo} alt="Python" className="skills-logo Python" />
              {/* <p>Python</p> */}
            </div>
            <div className="skill skill-3" data-bs-toggle="tooltip" data-bs-placement="top" title="JavaScript">
              <img src={JsLogo} alt="JavaScript" className="skills-logo" />
              {/* <p>JavaScript</p> */}
            </div>
            <div className="skill skill-4">
              <img src={PostManLogo} alt="PostMan" className="skills-logo PostMan" data-bs-toggle="tooltip" data-bs-placement="top" title="PostMan"/>
              {/* <p>PostMan</p> */}
            </div>
          </div>
        </Col>
      </Col>
      </Row>
      <Row className="row-3 APIdevelop mt-3">
      <Col lg={12} className="d-flex align-items-center">
        <Col lg={2}>
          <h3 className="category-title">API Development</h3>
        </Col>
        <Col lg={10}>
          <div className="skills-container d-flex align-items-center gap-5">
            <div className="skill skill-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram API's">
              <img src={MetaLogo} alt="Instagram" className="skills-logo" />
              {/* <p>Remix.js</p> */}
            </div>
            <div className="skill skill-2" data-bs-toggle="tooltip" data-bs-placement="top" title="TikTok API's">
              <img src={TikTokLogo} alt="TikTok" className="skills-logo TikTok" />
              {/* <p>Python</p> */}
            </div>
            <div className="skill skill-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Shopify Rest API's">
              <img src={RestAPILogo} alt="Shopify Rest API's" className="skills-logo RestAPI" />
              {/* <p>JavaScript</p> */}
            </div>
            <div className="skill skill-4">
              <img src={GraphQLLogo} alt="Shopify GraphQL API's" className="skills-logo GraphQL" data-bs-toggle="tooltip" data-bs-placement="top" title="Shopify GraphQL API's"/>
              {/* <p>PostMan</p> */}
            </div>
          </div>
        </Col>
      </Col>
      </Row>
      <Row className="row-4 Shopify-Theme mt-3">
        <Col lg={12} className="d-flex align-items-center">
          <Col lg={2}>
            <h3 className="category-title">Shopify Theme</h3>
          </Col>
          <Col lg={10}>
            <div className="skills-container d-flex align-items-center gap-5">
              <div className="skill skill-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Shopify">
                <img src={ShopifyLogo1} alt="Shopify" className="skills-logo shopify" />
                {/* <p>Shopify</p> */}
              </div>
              <div className="skill skill-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Liquid Template language">
                <img src={LiquidLogo} alt="Liquid" className="skills-logo liquid" />
                {/* <p>Liquid</p> */}
              </div>
              <div className="skill skill-3" data-bs-toggle="tooltip" data-bs-placement="top" title="JavaScript">
                <img src={JsLogo} alt="JavaScript" className="skills-logo" />
                {/* <p>JavaScript</p> */}
              </div>
              <div className="skill skill-4">
                <img src={JQueryDarkLogo} alt="JQuery" className="skills-logo jQuery" data-bs-toggle="tooltip" data-bs-placement="top" title="JQuery"/>
                {/* <p>JQuery</p> */}
              </div>
            </div>
          </Col>
        </Col>
      </Row>
      <Row className="row-5 Shopify-App">
        <Col lg={12} className="d-flex align-items-center">
          <Col lg={2}>
            <h3 className="category-title">Shopify App</h3>
          </Col>
          <Col lg={10}>
            <div className="skills-container d-flex align-items-center gap-5">
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                navigation={true}
                grabCursor={true}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="skill skill-1">
                    <img src={ShopifyLogo1} alt="Shopify" className="skills-logo shopify" data-bs-toggle="tooltip" data-bs-placement="top" title="Shopify Partner"/>
                    {/* <p>Shopify Partner</p> */}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="skill skill-2 Remix-js">
                    <img src={Remixlogo} alt="Remix" className="skills-logo" data-bs-toggle="tooltip" data-bs-placement="top" title="Remix.js"/>
                    {/* <p>Remix.js</p> */}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="skill skill-3">
                    <img src={ReactLogo1} alt="React.js" className="skills-logo" data-bs-toggle="tooltip" data-bs-placement="top" title="React.js"/>
                    {/* <p>React.js</p> */}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="skill skill-4">
                    <img src={ShopifyLogo1} alt="Polaris" className="skills-logo" data-bs-toggle="tooltip" data-bs-placement="top" title="Shopify Polaris"/>
                    {/* <p>Polaris</p> */}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="skill skill-5 MongoDB">
                    <img src={MongoDBLogoWhite} alt="MongoDB" className="skills-logo" data-bs-toggle="tooltip" data-bs-placement="top" title="MongoDB"/>
                    {/* <p>MongoDB</p> */}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="skill skill-6">
                    <img src={githubCatLogo} alt="GitHub" className="skills-logo" data-bs-toggle="tooltip" data-bs-placement="top" title="GitHub"/>
                    {/* <p>GitHub</p> */}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="skill skill-7 Vercel">
                    <img src={vercelLogo} alt="Vercel" className="skills-logo" data-bs-toggle="tooltip" data-bs-placement="top" title="Vercel"/>
                    {/* <p>Vercel</p> */}
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}