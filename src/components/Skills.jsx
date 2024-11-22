import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { Tooltip } from 'bootstrap';
import GraphQLLogo from "../images/GraphQLLogo.png";
import LiquidLogo from "../images/Shopify-liquid.webp";

// Import all logos dynamically
const skillsData = {
  Frontend: [
    { name: 'HTML', logo: require("../images/html-5-logo.svg").default },
    { name: 'CSS', logo: require("../images/css3logo-com.svg").default },
    { name: 'Tailwind CSS', logo: require("../images/tailwindcss-logo.svg").default },
    { name: 'Bootstrap', logo: require("../images/bootstrap-4.svg").default },
    { name: 'JavaScript', logo: require("../images/js-yellow.svg").default },
    { name: 'JQuery', logo: require("../images/jQuery-Logo_On_Dark.svg").default },
    { name: 'React.js', logo: require("../images/React_logo_dark.svg").default },
  ],
  BackEnd: [
    { name: 'Remix.js', logo: require("../images/remix-dark.svg").default },
    { name: 'Python', logo: require("../images/python-logo-master-v3-TM.svg").default },
    { name: 'JavaScript', logo: require("../images/js-yellow.svg").default },
    { name: 'PostMan', logo: require("../images/postman-logo.svg").default },
  ],
  API: [
    { name: 'Instagram API\'s', logo: require("../images/MetaAPILogo.svg").default },
    { name: 'TikTok API\'s', logo: require("../images/TikTokapiLogo.svg").default },
    { name: 'Shopify Rest API\'s', logo: require("../images/rest-apiLogo.svg").default },
    { name: 'Shopify GraphQL API\'s', logo: GraphQLLogo },
  ],
  ShopifyTheme: [
    { name: 'Shopify', logo: require("../images/shopify-logo.svg").default },
    { name: 'Liquid Template language', logo: LiquidLogo },
    { name: 'JavaScript', logo: require("../images/js-yellow.svg").default },
    { name: 'JQuery', logo: require("../images/jQuery-Logo_On_Dark.svg").default },
  ],
  ShopifyApp: [
    { name: 'Shopify Partner', logo: require("../images/shopify-logo.svg").default },
    { name: 'Remix.js', logo: require("../images/remix-dark.svg").default },
    { name: 'React.js', logo: require("../images/React_logo_dark.svg").default },
    { name: 'Shopify Polaris', logo: require("../images/shopify-logo.svg").default },
    { name: 'MongoDB', logo: require("../images/MongoDB_White.svg").default },
    { name: 'GitHub', logo: require("../images/github-mark-white.svg").default },
    { name: 'Vercel', logo: require("../images/vercel-logotype-light.svg").default },
  ],
};


export default function Skills() {
  useEffect(() => {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));
  }, []);

  // Dynamic rendering for sections
  const renderSection = (title, skills, useSwiper = false) => (
    <Row className={`row-${title.replace(/\s/g, '')}`}>
      <Col lg={12} className="d-flex align-items-center">
        <Col lg={2}>
          <h3 className="category-title">{title}</h3>
        </Col>
        <Col lg={10}>
        <div className="skills-container d-flex align-items-center gap-5">
  {useSwiper ? (
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      navigation={true}
      grabCursor={true}
      modules={[Navigation, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {skills.map((skill, index) => (
        <SwiperSlide key={index}>
          <div className={`skill skill-${index + 1}`}>
            <img
              src={skill.logo}
              alt={skill.name}
              className={`${skill.name} skills-logo`}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={skill.name}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    skills.map((skill, index) => {
      // Log the logo path
      console.log(skill.logo);
      
      return (
        <div key={index} className={`skill skill-${index + 1}`}>
          <img 
            src={skill.logo} 
            alt={skill.name} 
            className={`${skill.name} skills-logo`}
            data-bs-toggle="tooltip" 
            data-bs-placement="top" 
            title={skill.name}
          />
        </div>
      );
    })
  )}
</div>

        </Col>
      </Col>
    </Row>
  );

  return (
    <Container>
      <div className="title-header">
        <h2 className="fs-70">Skills</h2>
      </div>
      {renderSection('Frontend', skillsData.Frontend, true)}
      {renderSection('BackEnd', skillsData.BackEnd)}
      {renderSection('API Development', skillsData.API)}
      {renderSection('Shopify Theme', skillsData.ShopifyTheme)}
      {renderSection('Shopify App', skillsData.ShopifyApp, true)}
    </Container>
  );
}