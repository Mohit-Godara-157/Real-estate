import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import homeImage from "../assets/img/png/homeImage.png";
import polygonImage from "../assets/img/svg/polygonImage.svg";
import polygonImage1 from "../assets/img/svg/polygonImage1.svg";
import triangleImage from "../assets/img/svg/triangleImage.svg";
const CloseMore = () => {
  return (
    <div className="z_2 ">
      <Container className="customContainer ">
        <Row className="py-lg-5 my-5 align-items-center justify-content-center justify-content-lg-between ">
          <Col className="my-3" sm={6} lg={3}>
            <img className="w-100" src={homeImage} alt="homeImage" />
          </Col>
          <Col className="my-3" sm={6} lg={3}>
            <p className="fw-normal fs_md mb-0 ">
              Leverage big data and artificial intelligence to identify your
              next Client
            </p>
            <p className="mt-4 text_black_80 fw-normal fs_md">
              Compliment your current business development with Unconstrained
              predictive analytics.
            </p>
            <div className="position-relative z_2 ms-4 mt-4">
              <div className="positionDarkBox position-absolute top-0 start-0"></div>
              <img
                className="setTriangleImage"
                src={triangleImage}
                alt="triangleImage"
              />
              <div className="triangleBox  py-3 px-4">
                <div className="d-flex align-items-center">
                  <img src={polygonImage} alt="polygonImage" />
                  <p className=" mb-0 ms-2 fw-normal text_dark_70 fs_md">
                    Unconstrained
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img src={polygonImage1} alt="polygonImage1" />
                  <p className=" mb-0 ms-2 fw-normal text_dark_70 fs_md">
                    Constrained
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col className="my-3" sm={12} lg={3}>
            <h4 className="fs_7xl fw-semibold mb-3">
              Close <span className="d-lg-block">More</span> Deals
            </h4>
            <button className=" fs_md mt-2 mt-lg-5 fw-semibold text_green bookBtn">
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CloseMore;
