import React from "react";
import Image from "next/image";
import offer from "../../img/offer.png";

export const Offers = () => {
  const offers = {
    img: offer,
    title: "Black Friday 2023",
  };

  return (
    <div id="home-offers">
      <Image src={offers.img} alt={offers.title} title={offers.title} />
    </div>
  );
};
