import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShippingFast } from "react-icons/fa";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav
      id="home-navbar"
      className="navbar navbar-expand-lg navbar-light pt-3 pb-3"
    >
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavDropdown title="Shop by Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Category 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Category 3</NavDropdown.Item>
            </NavDropdown>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              Contact Us
            </Link>
          </li>
        </ul>
        <h6 className="info">
          <span>
            <FaShippingFast />
          </span>{" "}
          Free Shipping on Orders $150+
        </h6>
      </div>
    </nav>
  );
};
