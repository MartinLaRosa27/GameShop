import React from "react";
import Image from "next/image";
import logo from "../../img/logo.png";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineLogout,
} from "react-icons/ai";
import { useUserContext } from "../../context/UserContext";

export const Header = () => {
  const { logout } = useUserContext();

  return (
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
          <span className="icon">
            <AiOutlineHeart />
            <span className="badge badge-warning" id="lblCartCount">
              {" "}
              5{" "}
            </span>
          </span>
          <span className="icon">
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
  );
};
