import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Col, Container, Row } from 'react-bootstrap';
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


export default function SkillRating() {
  return (
    <Container>
      <div className="title-header">
        <h2 className="fs-70"> Skills Rating </h2>
      </div>
      <Row className="skill-rating">
          <Col lg={2}>
            <CircularProgressbarWithChildren 
              value={85} 
              styles={buildStyles(
                {
                  pathColor: "#e44d26",
                }
              )}>
                <img style={{ width: 100, marginTop: -5 }} src={htmlLogo} alt="HTML" />
            </CircularProgressbarWithChildren>
          </Col>
          <Col lg={2}>
            <CircularProgressbarWithChildren
              value={84} 
              styles={buildStyles(
                {
                  pathColor: "#000",
                }
              )}>
                <img style={{ width: 100, marginTop: -5 }} src={cssLogo} alt="CSS" />
            </CircularProgressbarWithChildren>
          </Col>
          <Col lg={2}>
          <CircularProgressbarWithChildren
              value={50} 
              styles={buildStyles(
                {
                  pathColor: "#f1dc50",
                }
              )}>
                <img style={{ width: 100, marginTop: -5 }} src={JsLogo} alt="Javascript" />
            </CircularProgressbarWithChildren>
          </Col>
          <Col lg={2}>
          <CircularProgressbarWithChildren
              value={50} 
              styles={buildStyles(
                {
                  pathColor: "#668291",
                }
              )}>
                <img style={{ width: 100, marginTop: -5 }} src={JQueryDarkLogo} alt="JQuery" />
            </CircularProgressbarWithChildren>
          </Col>
          <Col lg={2}>
          <CircularProgressbarWithChildren
              value={65} 
              styles={buildStyles(
                {
                  pathColor: "#58c4dc",
                }
              )}>
                <img style={{ width: 100, marginTop: -5 }} src={ReactLogo1} alt="React" />
            </CircularProgressbarWithChildren>
          </Col>
          <Col lg={2}>
          <CircularProgressbarWithChildren
              value={66} 
              styles={buildStyles(
                {
                  pathColor: "#000",
                }
              )}>
                <img style={{ width: 100, marginTop: -5 }} src={Remixlogo} alt="Remix" />
            </CircularProgressbarWithChildren>
          </Col>
      </Row>
      <Row className="skill-rating mt-4 justify-content-center">
      <Col lg={2}>
            <CircularProgressbarWithChildren
                value={66} 
                styles={buildStyles(
                  {
                    pathColor: "##234c6f",
                  }
                )}>
                <img style={{ width: 100, marginTop: -5 }} src={PythonLogo} alt="Python" />
            </CircularProgressbarWithChildren>
          </Col>
          <Col lg={2}>
          <CircularProgressbarWithChildren
                value={80} 
                styles={buildStyles(
                  {
                    pathColor: "#5e8e3e",
                  }
                )}>
                <img style={{ width: 100, marginTop: -5 }} src={ShopifyLogo1} alt="Shopify" />
 
            </CircularProgressbarWithChildren>
          </Col>
          <Col lg={2}>
          <CircularProgressbarWithChildren
                value={80} 
                styles={buildStyles(
                  {
                    pathColor: "#4c7ba9",
                  }
                )}>
                <img style={{ width: 100, marginTop: -5 }} src={LiquidLogo} alt="Liquid" />
 
            </CircularProgressbarWithChildren>
          </Col>
          <Col lg={2}>
          <CircularProgressbarWithChildren
                value={50} 
                styles={buildStyles(
                  {
                    pathColor: "#00684A",
                  }
                )}>
                <img style={{ width: 100, marginTop: -5 }} src={MongoDBLogoWhite} alt="MongoDB" />
 
            </CircularProgressbarWithChildren>
          </Col>
          <Col lg={2}>
          <CircularProgressbarWithChildren
                value={60} 
                styles={buildStyles(
                  {
                    pathColor: "#000",
                  }
                )}>
                <img style={{ width: 100, marginTop: -5 }} src={githubCatLogo} alt="github" />
 
            </CircularProgressbarWithChildren>
          </Col>
          <Col lg={2}>
          <CircularProgressbarWithChildren
                value={65} 
                styles={buildStyles(
                  {
                    pathColor: "#000",
                  }
                )}>
                <img style={{ width: 100, marginTop: -5 }} src={vercelLogo} alt="vercel" />
 
            </CircularProgressbarWithChildren>
          </Col>
          <Col lg={2}>
          <CircularProgressbarWithChildren
                value={70} 
                styles={buildStyles(
                  {
                    pathColor: "#ff6c37",
                  }
                )}>
                <img style={{ width: 100, marginTop: -5 }} src={PostManLogo} alt="PostMan" />
 
            </CircularProgressbarWithChildren>
          </Col>
      </Row>
    </Container>
  );
}