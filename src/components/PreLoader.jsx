import React from "react";
import logoImage from "../assets/img/svg/navLogo.svg";
const PreLoader = () => {
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
    document.body.classList.remove("overflow-hidden");
  }, 3000);
  return (
    <div>
      <div className="preloader">
        <img className=" animatoinCard5" src={logoImage} alt="logoImage" />
      </div>
    </div>
  );
};

export default PreLoader;
