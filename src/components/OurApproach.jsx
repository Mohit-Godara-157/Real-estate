import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import image1 from "../assets/img/png/image1.png";
import image2 from "../assets/img/png/image2.png";
import image3 from "../assets/img/png/image3.png";
import image4 from "../assets/img/png/image4.png";
import Slider from "react-slick";

const OurApproach = () => {
  const [first, setfirst] = useState(1);

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autopplaySpeed: 1800,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 8000,
        settings: "unslick",
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="my-5 py-3 py-xl-5">
      <div className="d-xl-flex">
        <div className="w_66 w_100 my-2 my-xl-0 bgDarkBlue py-3 py-lg-5">
          <div className="sectionContainer">
            <Slider {...settings} className="pt-4 justify-content-center row">
              <Col xs={6} sm={4} md={3}>
                <div
                  onClick={() => setfirst(1)}
                  className={
                    first === 1 ? " p-3 DataBgBlue" : " DataBgtransparent p-3"
                  }
                >
                  <p
                    className={
                      first === 1
                        ? "mb-0 text-white fw-semibold fs_xsm fs_xsm GreenBox"
                        : "blueBox mb-0 text-white fw-semibold "
                    }
                  >
                    1
                  </p>
                  <h5 className="mb-0 mt-3 text-white fs_sm fw-semibold">
                    Big <span className="d-block mt-1">Data</span>
                  </h5>
                </div>
              </Col>
              <Col xs={6} sm={4} md={3}>
                <div
                  onClick={() => setfirst(2)}
                  className={
                    first === 2 ? " p-3 DataBgBlue" : "  DataBgtransparent p-3"
                  }
                >
                  <p
                    className={
                      first === 2
                        ? "GreenBox  mb-0 text-white fw-semibold fs_xsm fs_xsm "
                        : "blueBox  mb-0 text-white fw-semibold "
                    }
                  >
                    2
                  </p>
                  <h5 className="mb-0 mt-3 text-white fs_sm fw-semibold">
                    Event-<span className="d-block mt-1">Driven </span>
                  </h5>
                </div>
              </Col>
              <Col xs={6} sm={4} md={3}>
                <div
                  onClick={() => setfirst(3)}
                  className={
                    first === 3 ? " p-3 DataBgBlue" : "  DataBgtransparent p-3"
                  }
                >
                  <p
                    className={
                      first === 3
                        ? "GreenBox  mb-0 text-white fw-semibold fs_xsm fs_xsm "
                        : "blueBox  mb-0 text-white fw-semibold "
                    }
                  >
                    3
                  </p>
                  <h5 className="mb-0 mt-3 text-white fs_sm fw-semibold">
                    Artificial{" "}
                    <span className="d-block mt-1">Intelligence </span>
                  </h5>
                </div>
              </Col>
              <Col xs={6} sm={4} md={3}>
                <div
                  onClick={() => setfirst(4)}
                  className={
                    first === 4 ? " p-3 DataBgBlue" : "  DataBgtransparent p-3"
                  }
                >
                  <p
                    className={
                      first === 4
                        ? "GreenBox  mb-0 text-white fw-semibold fs_xsm fs_xsm "
                        : "blueBox  mb-0 text-white fw-semibold "
                    }
                  >
                    4
                  </p>
                  <h5 className="mb-0 mt-3 text-white fs_sm fw-semibold">
                    Predictive <span className="d-block mt-1">Analytics </span>
                  </h5>
                </div>
              </Col>
              
            </Slider>
            <Row className="py-4 my-4 my-lg-5 mx-1 mx-sm-0 rowBg align-items-center justify-content-center justify-content-lg-between">
              <Col className="my-2 my-lg-0" md={8} lg={6}>
                <img
                  onClick={() => setfirst(1)}
                  className={first === 1 ? "w-100 d-block" : "w-100 d-none"}
                  src={image1}
                  alt="image1"
                />
                <img
                  onClick={() => setfirst(2)}
                  className={first === 2 ? "w-100 d-block" : "w-100 d-none"}
                  src={image2}
                  alt="image2"
                />
                <img
                  onClick={() => setfirst(3)}
                  className={first === 3 ? "w-100 d-block" : "w-100 d-none"}
                  src={image3}
                  alt="image3"
                />
                <img
                  onClick={() => setfirst(4)}
                  className={first === 4 ? "w-100 d-block" : "w-100 d-none"}
                  src={image4}
                  alt="image4"
                />
              </Col>
              <Col className="my-2 my-lg-0" lg={5}>
                <h4 className="mb-0 text-white fw-semibold fs_xl ">Big Data</h4>
                <p className="text_white_40 mt-4 fs_xsm fw-semibold">
                  We gather hundreds of millions of data points in order to
                  perform advanced analytics to identify the highest propensity
                  prospects
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <div className="w_33 w_100 my-2 my-xl-0 bgDarkBlue p-3 p-md-5  ms-xl-2">
          <div className="d-flex flex-column justify-content-between h-100 py-5">
            <h5 className="fs_6xl text-white fw-semibold ">
              Our <span className="d-block mt-1">approach</span>
            </h5>
            <div className="mb-0">
              <h5 className="fs_6xl text-white fw-normal ">
                200k<span className="fs_3xl">Properties</span>
              </h5>
              <p className="mt-3  fs_md fw-normal text_white_50">
                of wealth will be transitioned in{" "}
                <span className="d-block">the next 25 years.</span>
              </p>
              <button className="fs_md fw-normal text-white signBtn2 mt-4">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
