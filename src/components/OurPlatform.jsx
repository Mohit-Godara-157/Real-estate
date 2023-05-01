import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import diamond from "../assets/img/svg/diamond.svg";
import railRoad from "../assets/img/svg/railroad.svg";
import moneyImage from "../assets/img/svg/moneyImage.svg";
import percentImage from "../assets/img/svg/percentImage.svg";
import eyeImage from "../assets/img/svg/eyeImage.svg";
import halfCircle from "../assets/img/svg/halfCircle.svg";
import document from "../assets/img/svg/document.svg";
import dollarImage from "../assets/img/png/dolarImage.png";
const OurPlatform = () => {
  return (
    <div className="z_2">
      <Container className="customContainer">
        <Row className="py-4 py-lg-5 justify-content-center">
          <Col className="my-2 px-sm-2" sm={12} lg={12} xl={3}>
            <h3 className="fw-semibold fs_7xl">Our <span className="d-block">Platform</span></h3>
          </Col>
          <Col className="my-2 px-sm-2" sm={6} lg={4} xl={4}>
            <div className="cardBox h-100 p-4 p-lg-5">
              <div className="d-flex align-items-center justify-content-between">
                <h6 className="mb-0 fw-semibold fs_xl">Exclusive</h6>
                <img src={diamond} alt="diamond" />
              </div>
              <p className="mt-5 mb-0 pt-5 fs_md fw-normal text_black_70">
                200 exclusive prospects{" "}
                <span className="d-lg-block"> pushed to your platfrom</span>{" "}
                monthly.
              </p>
            </div>
          </Col>
          <Col className="my-2 px-sm-2" sm={6} lg={4} xl={4}>
            <div className="cardBox h-100 p-4 p-lg-5">
              <div className="d-flex align-items-center justify-content-between">
                <h6 className="mb-0 fw-semibold fs_xl">
                  In your <span className="d-block mt-1">backyard</span>
                </h6>
                <img src={railRoad} alt="railRoad" />
              </div>
              <p className="mt-5 mb-0 pt-5 fs_md fw-normal text_black_70">
                Radius based leads within 50-miles from you, prioritizing those
                closer to you.
              </p>
            </div>
          </Col>
          <Col className="my-2 px-sm-2" sm={6} lg={4} xl={4}>
            <div className="cardBox h-100 p-4 p-lg-5">
              <div className="d-flex align-items-center justify-content-between">
                <h6 className="mb-0 fw-semibold fs_xl">
                  High <span className="d-block mt-1">net worth</span>
                </h6>
                <img src={moneyImage} alt="moneyImage" />
              </div>
              <p className="mt-5 mb-0 pt-5 fs_md fw-normal text_black_70">
                Average investable assets of $1.5{" "}
                <span className="d-block"> million.</span>
              </p>
            </div>
          </Col>
          <Col className="my-2 px-sm-2" sm={6} lg={4} xl={4}>
            <div className="cardBox h-100 p-4 p-lg-5">
              <div className="d-flex align-items-center justify-content-between">
                <h6 className="mb-0 fw-semibold fs_xl">
                  High <span className="d-block mt-1">propensity</span>
                </h6>
                <img src={percentImage} alt="percentImage" />
              </div>
              <p className="mt-5 mb-0 pt-4 fs_md fw-normal text_black_70">
                Our combination of event-driven data, historical data,
                behavioral analytics, and real-time data results in the highest
                propensity prospects.
              </p>
            </div>
          </Col>
          <Col className="my-2 px-sm-2" sm={6} lg={4} xl={3}>
            <div className="cardBox">
              <img
                className="w-100 h-100"
                src={dollarImage}
                alt="dollarImage"
              />
            </div>
          </Col>
        </Row>
        <Row className="py-4 py-lg-5 align-items-center justify-content-center">
          <Col className="my-3 my-lg-0" sm={6} lg={4}>
            <div className="text-center h-100">
              <img src={eyeImage} alt="eyeImage" />
              <p className="mt-4 mb-0 fw-normal fs_md">
                Harness the power of 30 million data points to reach your
                highest converting target market
              </p>
            </div>
          </Col>
          <Col className="my-3 my-lg-0" sm={6} lg={4}>
            <div className="text-center h-100">
              <img src={halfCircle} alt="halfCircle" />
              <p className="mt-4 mt-sm-5 mt-lg-4 mb-0 fw-normal fs_md">
                Increase your marketingdollars{" "}
                <span className="d-lg-block">ROI</span>
              </p>
            </div>
          </Col>
          <Col className="my-3 my-lg-0" sm={6} lg={4}>
            <div className="text-center h-100">
              <img src={document} alt="document" />
              <p className="mt-4 mb-0 fw-normal fs_md">
                A top of funnel marketing solution to fill your prospect
                pipeline
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurPlatform;
