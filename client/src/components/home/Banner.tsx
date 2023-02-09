import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Banner = () => {
  const router = useRouter();

  const products = [
    {
      _id: 1,
      img: "https://res.cloudinary.com/dtargbsvk/image/upload/v1675882955/gameshop/pt6lrjaazrvxe2spvjgr.webp",
      title: "PlayStaion 5 in STOCK!!!",
      styles: {
        height: "275px",
        width: "275px",
      },
      descrption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "/product/63e40ad5a8ebd2c9ad97573e",
    },
    {
      _id: 2,
      img: "https://res.cloudinary.com/dtargbsvk/image/upload/v1675884933/gameshop/x1gikvrxdwy48j8glfud.avif",
      title: 'Sale of the 50" UHD 4K Smart',
      styles: {
        height: "300px",
        width: "400px",
      },
      descrption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "/product/63e40ad5a8ebd2c9ad975744",
    },
  ];

  const handleClick = (url: string) => {
    router.push(url);
  };

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
                  <h1>
                    <strong>{product.title}</strong>
                  </h1>
                  <h6 className="mt-4">{product.descrption}</h6>
                  <button
                    type="button"
                    className="btn btn-warning pt-2 pb-2 mt-5"
                    onClick={() => handleClick(product.url)}
                  >
                    Shop Now
                  </button>
                </div>
                <div className="col banner-img">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="img"
                    style={product.styles}
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
