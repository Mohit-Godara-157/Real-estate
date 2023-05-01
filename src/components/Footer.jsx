import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import footerLogo from "../assets/img/svg/footerlogo.svg";
import upBtn from "../assets/img/svg/upBtn.svg";

const Footer = () => {
  const [first, setfirst] = useState(true);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return (
    <div className="footerBgDark z_2 position-relative overflow-hidden mt-5">
      <a
        className={
          first
            ? " position-fixed z_4  d-none end-0 bottom-0 "
            : " position-fixed z_4 setBtn justify-content-end d-block m-5"
        }
        onClick={() => moveToTop()}
      >
        <a href="#">
          <img
            className="bgDarkBlue p-2 rounded-5"
            src={upBtn}
            alt="up_arrow"
          />
        </a>
      </a>
      <div className="positionbluebox position-absolute opacity  end_10 top_40 top_xl_0"></div>
      <Container className="customContainer">
        <Row className="py-0 py-md-4 py-lg-5">
          <Col className="my-3 my-xl-0" xl={7}>
            <Row className="align-items-center">
              <Col className="my-3 my-lg-0" md={7}>
                <input
                  type="text"
                  placeholder="Name"
                  className="inputModify fs_md text_white_40  fw-semibold"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="inputModify fs_md text_white_40 my-2 fw-semibold"
                />
                <div className="d-flex align-items-center justify-content-between">
                  <button className="d-flex align-items-center  fw-semibold fs_md text_green_50 footerBtn">
                    <div className="btnCircle1 me-2"></div> Financial Services
                  </button>
                  <button className="d-flex align-items-center  fw-semibold fs_md text_white_50 stateBtn">
                    <div className="btnCircle me-2"></div> Real Estate
                  </button>
                </div>
              </Col>
              <Col className="my-3 my-lg-0" md={5}>
                <textarea
                  className="inputModify text_white_40 fs_md fw-semibold"
                  cols="30"
                  rows="3"
                  placeholder="Message.."
                ></textarea>
                <button className="submitBtn mt-2 text-white fw-semibold fs_md">
                  Submit
                </button>
              </Col>
            </Row>
          </Col>
          <Col className="my-3 my-xl-0 " xl={5}>
            <div className="ps-xl-5 ">
              <h3 className="text-white fw-semibold mb-0 fs_5xl">Contact us</h3>
              <p className="mb-0 text_white_20 mt-4">
                Our Predictive Analytics utilize a
                <span className="d-lg-block">
                  combination of event-driven data,
                </span>{" "}
                historical data.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footerLine mx-3 mx-xl-5"></div>
      <Container className="customContainer">
        <Row className="py-4 py-lg-5">
          <Col className="my-3 my-lg-0" lg={4}>
            <a href="#">
              <img
                className="w_110 w_md_170"
                src={footerLogo}
                alt="footerLogo"
              />
            </a>
            <div className=" mt-2 ">
              <a
                className="text-white fs_md fw-semibold"
                href="mailto:info@catalyzeai.com"
              >
                info@catalyzeai.com
              </a>
            </div>
            <a
              className="text-white fs_md fw-semibold"
              href="tel:+(941) 867-1761"
            >
              (941) 867-1761
            </a>
          </Col>
          <Col className="my-3 my-lg-0" lg={8}>
            <Row>
              <Col className="my-3 my-sm-0" xs={6} sm={4}>
                <ul className="ps-0 ">
                  <li className="text-white fs_md fw-semibold">
                    Financial Services
                  </li>
                  <li className="mt-3">
                    <a
                      className="position-relative footerLinks text-white fs_md fw-normal"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="mt-2 pt-1">
                    <a
                      className="position-relative footerLinks text-white fs_md fw-normal"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </Col>
              <Col className="my-3 my-sm-0" xs={6} sm={4}>
                <ul className="ps-0 ">
                  <li className="text-white fs_md fw-semibold">Real Estate</li>
                  <li className="mt-3">
                    <a
                      className="position-relative footerLinks text-white fs_md fw-normal"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="mt-2 pt-1">
                    <a
                      className="position-relative footerLinks text-white fs_md fw-normal"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </Col>
              <Col className="my-3 my-sm-0" xs={6} sm={4}>
                <ul className="ps-0 ">
                  <li className="text-white fs_md fw-semibold">LinkedIn</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="pb-4 d-flex flex-column mb-lg-3 flex-md-row align-items-center justify-content-center justify-content-md-between">
          <div className="d-sm-flex align-items-center ">
            <p className="mb-0 me-md-5  fs_xsm fw-normal text_white_50">
              All rights reserved.©20022 Catalyze AI
            </p>
            <a
              href="#"
              className=" ms-5 my-3 my-md-0 text_white_50 position-relative lineAfter fs_xsm fw-normal"
            >
              Do not sell my data
            </a>
          </div>
          <div className="d-flex my-3 my-md-0 align-items-center justify-content-center">
            <a
              href="#"
              className=" text_white_50 position-relative lineAfter fs_xsm fw-normal"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="ms-md-5 ms-4 text_white_50 position-relative lineAfter fs_xsm fw-normal"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
