import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Col, Container, Row } from 'react-bootstrap';
import htmlLogo from "../images/html-5-logo.svg"


const Reactjs = "React.js";
const percentage = 66;


export default function SkillRating() {
  return (
    <Container>
      <div className="title-header">
        <h2 className="fs-70"> Skills Rating </h2>
      </div>
      <Row className="skill-rating">
          <Col lg={2}>
            <div className="rating-stars">
              <div className="progress-bar-container">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
              </div>
            </div>
          </Col>
          <Col lg={2}>
            <div className="rating-stars">
              <div className="progress-bar-container">
              <CircularProgressbar 
                  value={percentage} 
                  text="React.js"
                  styles={{
                  path: {
                    stroke: '#4CAF50',
                  },
                  text: {
                    fill: '#4CAF50',
                    fontSize: '16px',
                  },
                }} />
              </div>
            </div>
          </Col>
          <Col lg={2}>
          <CircularProgressbarWithChildren value={66}>
            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
            <img style={{ width: 100, marginTop: -5 }} src={htmlLogo} alt="HTML" />
            <div style={{ fontSize: 12, marginTop: 5 }}>
              <strong>66%</strong>
            </div>
          </CircularProgressbarWithChildren>;
          </Col>
          <Col lg={2}>
            <div className="rating-stars">
              <div className="progress-bar-container">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
              </div>
            </div>
          </Col>
          <Col lg={2}>
            <div className="rating-stars">
              <div className="progress-bar-container">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
              </div>
            </div>
          </Col>
          <Col lg={2}>
            <div className="rating-stars">
              <div className="progress-bar-container">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
              </div>
            </div>
          </Col>
      </Row>
      <Row className="skill-rating">
          <Col lg={2}>
            <div className="rating-stars">
              <div className="progress-bar-container">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
              </div>
            </div>
          </Col>
          <Col lg={2}>
            <div className="rating-stars">
              <div className="progress-bar-container">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
              </div>
            </div>
          </Col>
          <Col lg={2}>
            <div className="rating-stars">
              <div className="progress-bar-container">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
              </div>
            </div>
          </Col>
          <Col lg={2}>
            <div className="rating-stars">
              <div className="progress-bar-container">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
              </div>
            </div>
          </Col>
      </Row>
    </Container>
  );
}