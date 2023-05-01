import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImage from "../assets/img/png/harderImage.png";
import position1 from "../assets/img/png/position1.png";
import position2 from "../assets/img/png/position2.png";
import position3 from "../assets/img/png/position3.png";

const HeroSection = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1   ">
      <div className="positiongreenBox transformX position-absolute top-0 end-0"></div>
      <Container className="customContainer">
        <Row className="py-5 align-items-center flex-column-reverse flex-lg-row">
          <Col className="my-2 my-lg-0" lg={6}>
            <h1 className="fs_9xl fw-semibold">
              Event-Driven <span className="d-block">Listing Leads</span>
            </h1>
            <p className="mb-0 mt-3 fs_md fw-normal">
              Not your average smart farming, not statistical analysis, but
              <span className="d-lg-block"> actionable behaviors.</span>
            </p>
            <div className="mt-5 d-flex align-items-center pt-2">
              <button className="startBtn text-white fs_md z_2 fw-normal">
                Get started
              </button>
              <button className="ms-4 fs_md z_2 fw-semibold text_green bookBtn">
                Book a demo
                <svg
                  className="ms-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_270_243)">
                    <path
                      d="M8.5 7.53347V16.0665C8.49997 16.1614 8.52527 16.2546 8.57327 16.3365C8.62127 16.4183 8.69024 16.4859 8.77307 16.5322C8.8559 16.5785 8.94958 16.6019 9.04446 16.5999C9.13933 16.5979 9.23195 16.5706 9.31278 16.5209L16.2459 12.2544C16.3235 12.2067 16.3877 12.1399 16.4322 12.0603C16.4766 11.9808 16.5 11.8911 16.5 11.8C16.5 11.7089 16.4766 11.6192 16.4322 11.5397C16.3877 11.4602 16.3235 11.3933 16.2459 11.3456L9.31278 7.07908C9.23195 7.02936 9.13933 7.0021 9.04446 7.00012C8.94958 6.99813 8.8559 7.0215 8.77307 7.06781C8.69024 7.11411 8.62127 7.18168 8.57327 7.26354C8.52527 7.34539 8.49997 7.43857 8.5 7.53347Z"
                      fill="#1AD079"
                    />
                  </g>
                  <rect
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="23"
                    rx="11.5"
                    stroke="#1AD079"
                  />
                  <defs>
                    <clipPath id="clip0_270_243">
                      <rect width="24" height="24" rx="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </Col>
          <Col className="my-2 my-lg-0" md={10} lg={6}>
            <div className="position-relative">
              <img
                className="position1image animationMove"
                src={position1}
                alt="position1"
              />
              <img
                className="position2image animationMoveY"
                src={position2}
                alt="position2"
              />
              <img
                className="position3image animationMov"
                src={position3}
                alt="position3"
              />
              <img
                className="w-100  ps-lg-5"
                src={headerImage}
                alt="headerImage"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
