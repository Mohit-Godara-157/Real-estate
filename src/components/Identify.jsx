import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../assets/img/png/img1.png";
import img2 from "../assets/img/png/img2.png";
import img3 from "../assets/img/png/img3.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Identify = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="z_2 position-relative ">
      <div className="positiongreenBox position-absolute opacity top-50 end-0"></div>
      <div className="positionskyBox position-absolute opacity1  start-0"></div>
      <div className="positionskyBox2 position-absolute opacity bottom-0 start-0"></div>
      <div className="positionlightgreenBox position-absolute opacity1  end-0 top-0"></div>
      <Container className="customContainer">
        <div className=" headerLine mb-5"></div>
        <div></div>
        <h2 className="text-center pt-4 pt-lg-5 fw-semibold fs_7xl">
          Identify Inherited Properties in your{" "}
          <span className="d-lg-block">local area that will sell</span>
        </h2>
        <p className="mb-0 mt-5 pt-lg-5 ms-lg-5 ps-lg-4 fs_xl fw-normal">
          Industry High <span className="d-block">Prediction Rate</span>
        </p>
        <Row className="py-4 align-items-center justify-content-center justify-content-lg-between  ">
          <Col className="my-2 my-lg-0" sm={6} lg={3}>
            <div className="h-100 text-center text-lg-start ">
              <h5 className="text-center fw-semibold fs_5xl ">40%</h5>
              <img className="w_lg_100 my-lg-5 my-4" src={img1} alt="img1" />
              <p className="text-center fs_md fw-normal">
                Roughly 4 out of 10 property leads sell within 12 months.
              </p>
            </div>
          </Col>
          <Col className="my-2 my-lg-0" sm={6} lg={3}>
            <div className="h-100 text-center text-lg-start">
              <h5 className="text-center fw-semibold fs_5xl ">
                $77<span className=" fs_4xl fw-normal">Bn</span>
              </h5>
              <img className="w_lg_100 my-lg-5 my-4" src={img2} alt="img2" />
              <p className="text-center fs_md fw-normal">
                Predicted total property value that will sell per year.
              </p>
            </div>
          </Col>
          <Col className="my-2 my-lg-0" sm={6} lg={3}>
            <div className="h-100 text-center text-lg-start ">
              <h5 className="text-center fw-semibold fs_5xl ">77%</h5>
              <img className="w_lg_100  my-4" src={img3} alt="img3" />
              <p className="text-center fs_md fw-normal">
                Of recent seller contacted only one agent before finding the
                right agent they worked with to sell their home.
              </p>
            </div>
          </Col>
        </Row>
        <div className="sectionLine mt-1"></div>
      </Container>
      <div className="my-5 py-lg-5">
        <div className="bg_image my-5 py-5 d-flex flex-column align-items-center">
          <h3 className="text-white fw-semibold mt-5 fs_8xl">Watch a demo</h3>

          <Button className="bg-transparent border-0 p-0" onClick={handleShow}>
            <p className="playBtnCircle my-4 ">
              <svg
                width="22"
                height="26"
                viewBox="0 0 22 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66138 0.340504C1.9344 -0.106868 0.998413 0.416161 0.998413 1.26977V24.2228C0.998413 25.0764 1.9344 25.5995 2.66138 25.1521L21.3107 13.6756C22.0031 13.2495 22.0031 12.2431 21.3107 11.817L2.66138 0.340504Z"
                  fill="#83899D"
                />
              </svg>
            </p>
          </Button>

          <Modal
            className="d-flex flex-column align-items-center justify-content-center"
            show={show}
            onHide={handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <iframe
                className="mw_946"
                height="516"
                src="https://www.youtube.com/embed/PhKhhr4yoRw?autoplay=1"
                title="Ram Siya Ram 🙏🚩"
                frameborder="0"
                allow=" autoplay"
                allowfullscreen
              ></iframe>
            </Modal.Body>
          </Modal>
          <p className="mb-5 text-white fw-semibold mt-1 text-center fs_lg">
            Catalyze AI is a predictive analytics business development platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default Identify;
