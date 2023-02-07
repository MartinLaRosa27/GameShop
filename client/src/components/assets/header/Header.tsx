import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../img/logo.png";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineLogout,
} from "react-icons/ai";

import { useUserContext } from "../../../context/UserContext";
import { Navbar } from "./Navbar";
import { Cart } from "./Cart";

export const Header = () => {
  const { logout } = useUserContext();
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <header id="home-header" className="pt-3 pb-3">
        <div className="d-flex justify-content-around container">
          <Image src={logo} alt="GameShop" className="logo" priority={true} />
          <div className="search">
            <form>
              <input
                type="text"
                className="form-control pt-3 pb-3"
                placeholder="Enter your search..."
              />
              <button type="submit" className="btn btn-primary">
                <span>
                  <AiOutlineSearch />
                </span>{" "}
                Search
              </button>
            </form>
          </div>
          <div className="icons">
            <span className="icon" onClick={() => setModalShow(true)}>
              <AiOutlineShoppingCart />
              <span className="badge badge-warning" id="lblCartCount">
                {" "}
                5{" "}
              </span>
            </span>
            <span className="icon" onClick={() => logout()}>
              <AiOutlineLogout />
            </span>
          </div>
        </div>
      </header>
      <Navbar />

      <Cart show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};
