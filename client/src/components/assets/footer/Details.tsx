import React from "react";
import { FaCcMastercard, FaCcVisa, FaCcPaypal } from "react-icons/fa";
import { MdLocationOn, MdOutlinePhoneInTalk, MdEmail } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";

export const Details = () => {
  return (
    <div id="footer-details">
      <div className="container">
        <div className="row">
          <div className="col information">
            <ul className="contact mt-4">
              <li>
                <span>
                  <MdLocationOn />
                </span>{" "}
                Address: 123 False Street, Orlando FL
              </li>
              <li>
                <span>
                  <MdOutlinePhoneInTalk />
                </span>{" "}
                Call Us: (+54) 11 1111-2222
              </li>
              <li>
                <span>
                  <MdEmail />
                </span>{" "}
                Email: gameshop@mail.com
              </li>
            </ul>
            <ul className="payment">
              <li>
                <FaCcMastercard />
              </li>
              <li>
                <FaCcPaypal />
              </li>
              <li>
                <FaCcVisa />
              </li>
            </ul>
          </div>
          <div className="col signup mt-4">
            <h6>Sign up to be the first to have the best offers</h6>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <form method="POST">
              <input
                type="email"
                className="form-control pt-3 pb-3"
                placeholder="Enter your email..."
              />
              <button type="submit" className="btn btn-primary">
                <span>
                  <BiMailSend />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
