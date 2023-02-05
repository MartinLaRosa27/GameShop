import React from "react";
import logo from "../../assets/img/logo.png";
import Image from "next/image";

export const Header = () => {
  return (
    <header id="welcome-header">
      <div className="container">
        <h6 className="pt-3">
          <Image src={logo} alt="GameShop" className="logo" />
        </h6>
      </div>
    </header>
  );
};
