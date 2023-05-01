import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import earthImage from "../assets/img/svg/earthImage.svg";
import lmapImage from "../assets/img/png/lmapImage.png";
const YourTarget = () => {
  return (
    <div className="py-lg-5">
      <Container className="customContainer">
        <Row className="align-items-center  flex-column-reverse flex-lg-row justify-content-center justify-content-lg-between ">
          <Col className="my-3 my-lg-0" lg={5}>
            <h2 className="fw-semibold fs_7xl  ">Your Target Market</h2>
            <div className="d-flex align-items-center mt-3">
              <img src={earthImage} alt="earthImage" />
              <p className="ms-2 mb-0 fs_md fw-normal">Nationwide coverage</p>
            </div>
            <p className="mt-2 pt-1 fs_md fw-normal text_dark_70">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
            <button className="startBtn text-white fs_md mt-4 fw-normal">
              Get started
            </button>
          </Col>
          <Col className="my-3 my-lg-0" md={8} lg={5}>
            <img className="w-100" src={lmapImage} alt="lmapImage" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default YourTarget;
