import React from "react";
import Image from "next/image";
import PS5 from "../../img/PS5.png";
import BGH from "../../img/tv.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Banner = () => {
  const products = [
    {
      _id: 1,
      img: PS5,
      title: "PS5",
      styles: {
        height: "275px",
        width: "275px",
      },
      name: "The new generation of video games",
      descrption:
        "Buy the new PlayStation, and start playing your favorite games.",
    },
    {
      _id: 2,
      img: BGH,
      title: "BGH P615",
      styles: {
        height: "275px",
        width: "400px",
      },
      name: "BGH P615",
      descrption: "Experience amazing 4K Ultra HD HDR picture quality.",
    },
  ];

  return (
    <div id="home-banner">
      <div className="container">
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
        >
          {products.map((product) => {
            return (
              <div className="row" key={product._id}>
                <div className="col banner-text">
                  <h1>{product.name}</h1>
                  <h6 className="mt-3">{product.descrption}</h6>
                  <button
                    type="button"
                    className="btn btn-warning pt-2 pb-2 mt-5"
                  >
                    Shop Now
                  </button>
                </div>
                <div className="col banner-img">
                  <Image
                    src={product.img}
                    alt={product.title}
                    className="img"
                    style={product.styles}
                    priority={true}
                  />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
