import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import rightArrow from "../assets/img/svg/rightArrow.svg";
import leftArrow from "../assets/img/svg/leftArrow.svg";
import comaImage from "../assets/img/svg/coma.svg";
import Slider from "react-slick";
const SeeWhatOur = () => {
  const first = useRef();
  console.log(first);
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autopplaySpeed: 2200,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="mt-5 mb-lg-5 mb-2 py-lg-5 py-4 z_2 position-relative">
      <Container className="customContainer">
        <div className="d-flex allign-items-center justify-content-between">
          <img
            onClick={() => first.current.slickPrev()}
            className="curser"
            src={leftArrow}
            alt="leftArrow"
          />

          <h3 className=" fw-semibold fs_7xl text-center">
            See what our users say
          </h3>
          <img
            onClick={() => first.current.slickNext()}
            className="curser"
            src={rightArrow}
            alt="rightArrow"
          />
        </div>
        <div className="positionCardSky position-absolute opacity"></div>
        <div className="positionCardgreen position-absolute opacity1 "></div>
        <Slider {...settings} ref={first} className="py-5 ">
          <Col className="px-lg-1" lg={6}>
            <div className="cardBackground p-3 p-md-5 ">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="cardCircle fw-semibold fs_md">RC</div>
                  <div className="ms-4">
                    <h3 className="mb-0 fw-semibold fs_xl">Richard Chung</h3>
                    <p className="mb-0 fs_xsm fw-normal text_dark_70">
                      Killer Williams
                    </p>
                  </div>
                </div>
                <img className="imageOpacity" src={comaImage} alt="comaImage" />
              </div>
              <p className="mb-0 mt-5 fs_xsm fw-normal text_dark_70">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The 'Content here, content here', making it look like readable
                English.
              </p>
            </div>
          </Col>
          <Col className="px-lg-1" lg={6}>
            <div className="cardBackground p-3 p-md-5 ">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="cardCircle fw-semibold fs_md">PM</div>
                  <div className="ms-4">
                    <h3 className="mb-0 fw-semibold fs_xl">Paul Morris</h3>
                    <p className="mb-0 fs_xsm fw-normal text_dark_70">
                      CEO of KW Forward Living KW Regianal Owner
                    </p>
                  </div>
                </div>
                <img className="imageOpacity" src={comaImage} alt="comaImage" />
              </div>
              <p className="mb-0 mt-5 fs_xsm fw-normal text_dark_70">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The Point making it look like readable English.
              </p>
            </div>
          </Col>
          <Col className="px-lg-1" lg={6}>
            <div className="cardBackground p-3 p-md-5 ">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="cardCircle fw-semibold fs_md">RC</div>
                  <div className="ms-4">
                    <h3 className="mb-0 fw-semibold fs_xl">Richard Chung</h3>
                    <p className="mb-0 fs_xsm fw-normal text_dark_70">
                      Killer Williams
                    </p>
                  </div>
                </div>
                <img className="imageOpacity" src={comaImage} alt="comaImage" />
              </div>
              <p className="mb-0 mt-5 fs_xsm fw-normal text_dark_70">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The 'Content here, content here', making it look like readable
                English.
              </p>
            </div>
          </Col>
          <Col className="px-lg-1" lg={6}>
            <div className="cardBackground p-3 p-md-5 ">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="cardCircle fw-semibold fs_md">PM</div>
                  <div className="ms-4">
                    <h3 className="mb-0 fw-semibold fs_xl">Paul Morris</h3>
                    <p className="mb-0 fs_xsm fw-normal text_dark_70">
                      CEO of KW Forward Living KW Regianal Owner
                    </p>
                  </div>
                </div>
                <img className="imageOpacity" src={comaImage} alt="comaImage" />
              </div>
              <p className="mb-0 mt-5 fs_xsm fw-normal text_dark_70">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The Point making it look like readable English.
              </p>
            </div>
          </Col>
        </Slider>
      </Container>
    </div>
  );
};

export default SeeWhatOur;
