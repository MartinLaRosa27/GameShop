import React from "react";
import store from "../../img/store.png";
import Image from "next/image";

export const Information = () => {
  return (
    <div id="aboutus-information" className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>
              About <strong>GameShop</strong>
            </h2>
            <h5 className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h5>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. At
              ultrices mi tempus imperdiet nulla malesuada pellentesque elit.
              Egestas tellus rutrum tellus pellentesque eu tincidunt. Luctus
              venenatis lectus magna fringilla. Tincidunt id aliquet risus
              feugiat. Bibendum at varius vel pharetra vel turpis nunc eget
              lorem. Morbi tristique senectus et netus et.
            </p>
          </div>
          <div className="col img">
            <Image src={store} alt="our store" title="Our Store" />
            <small>Branch: 123 False Street, Orlando FL</small>
          </div>
        </div>
      </div>
    </div>
  );
};
