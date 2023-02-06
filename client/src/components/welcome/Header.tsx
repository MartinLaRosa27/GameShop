import React from "react";
import logo from "../../img/logo.png";
import Image from "next/image";

export const Header = () => {
  return (
    <header id="welcome-header">
      <div className="container">
        <h6 className="pt-3">
          <Image src={logo} alt="GameShop" className="logo" priority={true} />
        </h6>
      </div>
    </header>
  );
};
