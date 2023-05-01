import React, { useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import accordianImage1 from "../assets/img/png/accordianImage1.png";
import accordianImage2 from "../assets/img/png/accordianImage2.png";
import accordianImage3 from "../assets/img/png/accordianImage3.png";
import accordianImage4 from "../assets/img/png/accordianImage4.png";
import position4 from "../assets/img/png/position4.png";
import position5 from "../assets/img/png/position5.png";
import position6 from "../assets/img/png/position6.png";
const HowToGet = () => {
  const [first, setfirst] = useState(2);
  return (
    <div className="py-4 py-lg-5 bgDarkBlue ">
      <Container className="customContainer">
        <h2 className="text-center text-white fw-semibold fs_7xl">
          How to get started?
        </h2>
        <Row className="py-2 py-lg-5 justify-content-center justify-content-xl-between align-items-center">
          <Col className="my-2 my-lg-0" lg={6} xl={6}>
            <Accordion defaultActiveKey="1">
              <Accordion.Item
                onClick={() => setfirst(1)}
                className="accordian_bg "
                eventKey="0"
              >
                <Accordion.Header>
                  <div className="d-flex align-items-center ">
                    <p
                      className={
                        first === 1
                          ? "fw-semibold  accordionGreenBox   fs_md mb-0"
                          : "fw-semibold accordionBox  fs_md mb-0"
                      }
                    >
                      1
                    </p>
                    <h4 className="ms-4 mb-0 fw-semibold fs_2xl">
                      Provide your information
                    </h4>
                  </div>
                </Accordion.Header>

                <Accordion.Body>
                  <p className="mb-0 ps-5 fs_md fw-normal text_dark">
                    Provide a zip code and we will provide you with the highest
                    propensity prospects in a 50 mile radius
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                onClick={() => setfirst(2)}
                className="accordian_bg "
                eventKey="1"
              >
                <Accordion.Header>
                  {" "}
                  <div className="d-flex align-items-center ">
                    <p
                      className={
                        first === 2
                          ? "fw-semibold accordionGreenBox  fs_md mb-0"
                          : "fw-semibold  accordionBox  fs_md mb-0"
                      }
                    >
                      2
                    </p>
                    <h4 className="ms-4 mb-0 fw-semibold fs_2xl">
                      Select your location
                    </h4>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mb-0 ps-2 fs_md fw-normal text_dark">
                    Provide a zip code and we will provide you with the highest
                    propensity prospects in a 50 mile radius
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                onClick={() => setfirst(3)}
                className="accordian_bg "
                eventKey="2"
              >
                <Accordion.Header>
                  <div className="d-flex align-items-center ">
                    <p
                      className={
                        first === 3
                          ? "fw-semibold accordionGreenBox  fs_md mb-0"
                          : "fw-semibold  accordionBox fs_md mb-0"
                      }
                    >
                      3
                    </p>
                    <h4 className="ms-4 mb-0 fw-semibold fs_2xl">
                      Purchase your subscription
                    </h4>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mb-0 ps-2 fs_md fw-normal text_dark">
                    Provide a zip code and we will provide you with the highest
                    propensity prospects in a 50 mile radius
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                onClick={() => setfirst(4)}
                className="accordian_bg "
                eventKey="3"
              >
                <Accordion.Header>
                  <div className="d-flex align-items-center ">
                    <p
                      className={
                        first === 4
                          ? "fw-semibold accordionGreenBox  fs_md mb-0"
                          : "fw-semibold  accordionBox fs_md mb-0"
                      }
                    >
                      4
                    </p>
                    <h4 className="ms-4 mb-0 fw-semibold fs_2xl">
                      Access your dashboard
                    </h4>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mb-0 ps-2 fs_md fw-normal text_dark">
                    Provide a zip code and we will provide you with the highest
                    propensity prospects in a 50 mile radius
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="my-2 my-lg-0" md={9} lg={6} xl={5}>
            <div className=" ps-lg-5 ">
              <div className="position-relative">
                <img
                  className={
                    first === 2
                      ? "position4image animationRotate d-block"
                      : "position4image  d-none"
                  }
                  src={position4}
                  alt="position4"
                />
                <img
                  className={first === 2 ? "w-100  d-block" : "w-100 d-none"}
                  src={accordianImage1}
                  alt="accordianImage1"
                />
              </div>
              <img
                className={first === 1 ? "w-100  d-block" : "w-100 d-none"}
                src={accordianImage4}
                alt="accordianImage4"
              />
              <div className="position-relative">
                <img
                  className={
                    first === 3
                      ? "position5image animation d-block"
                      : "position5image d-none"
                  }
                  cl
                  src={position5}
                  alt="position5"
                />
                <img
                  className={
                    first === 3
                      ? "position6image  d-block"
                      : "position6image d-none"
                  }
                  cl
                  src={position6}
                  alt="position6"
                />
                <img
                  className={first === 3 ? "w-100  d-block" : "w-100 d-none"}
                  src={accordianImage2}
                  alt="accordianImage4"
                />
              </div>

              <img
                className={first === 4 ? "w-100  d-block" : "w-100 d-none"}
                src={accordianImage3}
                alt="accordianImage4"
              />

              <div className="mt-4 d-flex align-items-center justify-content-between">
                <button className="fs_md fw-semibold text-white signBtn">
                  Sign up
                </button>
                <button className="fs_md fw-normal registerBtn ">
                  Register in under 5 minutes.
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowToGet;
