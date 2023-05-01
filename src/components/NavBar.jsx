import React, { useState } from "react";
import { Container } from "react-bootstrap";
import navLogo from "../assets/img/svg/navLogo.svg";
import realState from "../assets/img/svg/realState.svg";
import financial from "../assets/img/svg/financial.svg";
import closeBtn from "../assets/img/png/closeBtn.jpg";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  if (nav) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible ";
  }
  return (
    <>
      <div className="py-4 navBg z_4 ">
        <Container className="customContainer">
          <nav className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <a href="#">
                <img className="w_110 w_md_170" src={navLogo} alt="navLogo" />
              </a>
              <a
                className="d d-none d-md-block NavLinks position-relative   text-black ms-5 fw-semibold fs_md"
                href="#"
              >
                <img src={financial} alt="financial" />
                <span className="ps-2 "> Financial Services</span>
              </a>
              <a
                className="d d-none d-md-block NavLinks position-relative   text-black ms-5 fw-semibold fs_md"
                href="#"
              >
                <img src={realState} alt="realState" />
                <span className="ps-2 "> Real Estate</span>
              </a>
            </div>
            <ul
              className={
                nav
                  ? "navOpen mb-0 ps-0 d-flex align-items-center"
                  : " navClose mb-0 ps-0 d-flex align-items-center"
              }
            >
              <img
                onClick={() => setNav(false)}
                className="m-4 bg-black d-lg-none position-absolute rounded-5 curser top-0 end-0 "
                width={40}
                src={closeBtn}
                alt="closeBtn"
              />
              <a
                onClick={() => setNav(false)}
                className=" my-3 my-lg-0  d-md-none NavLinks position-relative   text-black  fw-semibold fs_md"
                href="#"
              >
                <img src={financial} alt="financial" />
                <span className="ps-2 pt-2 "> Financial Services</span>
              </a>
              <a
                onClick={() => setNav(false)}
                className=" my-3 my-lg-0  d-md-none NavLinks position-relative   text-black  fw-semibold fs_md"
                href="#"
              >
                <img src={realState} alt="realState" />
                <span className="ps-2 pt-2 "> Real Estate</span>
              </a>
              <li onClick={() => setNav(false)} className=" my-3 my-lg-0">
                <a className="fw-semibold fs_md text_green navBtn" href="#">
                  Sign up
                </a>
              </li>
              <li
                onClick={() => setNav(false)}
                className=" my-3 my-lg-0 ms-lg-5 "
              >
                <a className="fw-semibold fs_md text_green logBtn" href="#">
                  Log in
                  <svg
                    className="ms-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.325 16.275C9.14167 16.0583 9.05 15.8127 9.05 15.538C9.05 15.2633 9.14167 15.034 9.325 14.85L11.175 13H4C3.71667 13 3.479 12.904 3.287 12.712C3.095 12.52 2.99934 12.2827 3 12C3 11.7167 3.096 11.479 3.288 11.287C3.48 11.095 3.71734 10.9993 4 11H11.175L9.325 9.15C9.125 8.95 9.025 8.71234 9.025 8.437C9.025 8.16167 9.125 7.92434 9.325 7.725C9.50834 7.525 9.73767 7.425 10.013 7.425C10.2883 7.425 10.5173 7.51667 10.7 7.7L14.3 11.3C14.4 11.4 14.471 11.5083 14.513 11.625C14.555 11.7417 14.5757 11.8667 14.575 12C14.575 12.1333 14.5543 12.2583 14.513 12.375C14.4717 12.4917 14.4007 12.6 14.3 12.7L10.7 16.3C10.5 16.5 10.2667 16.5917 10 16.575C9.73334 16.5583 9.50834 16.4583 9.325 16.275ZM13 21C12.7167 21 12.4793 20.9043 12.288 20.713C12.0967 20.5217 12.0007 20.284 12 20C12 19.7167 12.096 19.479 12.288 19.287C12.48 19.095 12.7173 18.9993 13 19H19V5H13C12.7167 5 12.479 4.904 12.287 4.712C12.095 4.52 11.9993 4.28267 12 4C12 3.71667 12.096 3.479 12.288 3.287C12.48 3.095 12.7173 2.99934 13 3H19C19.55 3 20.021 3.196 20.413 3.588C20.805 3.98 21.0007 4.45067 21 5V19C21 19.55 20.804 20.021 20.412 20.413C20.02 20.805 19.5493 21.0007 19 21H13Z"
                      fill="#1AD079"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <div
              onClick={() => setNav(true)}
              className="d-flex flex-column d-lg-none"
            >
              <span className="menuitems"></span>
              <span className="menuitems my-1"></span>
              <span className="menuitems"></span>
            </div>
          </nav>
        </Container>
      </div>
    </>
  );
};

export default NavBar;
