import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../img/logo.png";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineLogout,
  AiOutlineLogin,
} from "react-icons/ai";
import { useUserContext } from "@/context/UserContext";
import { useStateContext } from "@/context/StateContext";
import { useProductContext } from "@/context/ProductContext";
import { Navbar } from "./Navbar";
import { Cart } from "./Cart";
import { useRouter } from "next/router";

export const Header = (props: { token: string }) => {
  const router = useRouter();
  const { logout } = useUserContext();
  const { quantity } = useStateContext();
  const { getProductByName } = useProductContext();

  const [modalShow, setModalShow] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const handleClickLogin = () => {
    router.push("/welcome");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (search.length) {
      getProductByName(search, "desc", null);
      router.push(`/search/${search}`);
    }
  };

  return (
    <div>
      <header id="home-header" className="pt-3 pb-3">
        <div className="d-flex justify-content-around container">
          <Image src={logo} alt="GameShop" className="logo" priority={true} />
          <div className="search">
            <form onSubmit={(e) => handleSubmit(e)} method="POST">
              <input
                type="text"
                className="form-control pt-3 pb-3"
                placeholder="Enter your search..."
                onChange={(e) => setSearch(e.target.value)}
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
              {quantity > 0 && props.token && (
                <span className="badge badge-warning" id="lblCartCount">
                  {" "}
                  {quantity}{" "}
                </span>
              )}
            </span>
            {props.token ? (
              <span className="icon" onClick={() => logout()}>
                <AiOutlineLogout />
              </span>
            ) : (
              <span className="icon" onClick={() => handleClickLogin()}>
                <AiOutlineLogin />
              </span>
            )}
          </div>
        </div>
      </header>
      <Navbar />

      <Cart
        show={modalShow}
        onHide={() => setModalShow(false)}
        token={props.token}
      />
    </div>
  );
};
