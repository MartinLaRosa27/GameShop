import React from "react";
import Link from "next/link";

export const NewArrivals = () => {
  const newArrivals = [
    {
      _id: 1,
      img: "https://i.ibb.co/L8Nrb7p/1.jpg",
      name: "Nike #1",
      price: 300.55656,
    },
    {
      _id: 2,
      img: "https://i.ibb.co/L8Nrb7p/1.jpg",
      name: "Nike #2",
      price: 300.5,
    },
    {
      _id: 3,
      img: "https://i.ibb.co/L8Nrb7p/1.jpg",
      name: "Nike #3",
      price: 300.5,
    },
    {
      _id: 4,
      img: "https://i.ibb.co/L8Nrb7p/1.jpg",
      name: "Nike #4",
      price: 300.5,
    },
  ];

  return (
    <div id="home-newArrivals" className="container">
      <section className="section-products">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="header">
              <h2>
                <span>New </span>Arrivals
              </h2>
            </div>
          </div>
          <div className="row">
            {newArrivals.map((newArrival) => {
              return (
                <Link
                  className="col-md-6 col-lg-4 col-xl-3"
                  key={newArrival._id}
                  href={`/product/${newArrival._id}`}
                >
                  <div id="product-1" className="single-product">
                    <div
                      className="part-1"
                      style={{
                        background: `url(${newArrival.img}) no-repeat center`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className="part-2">
                      <h3 className="product-title">{newArrival.name}</h3>
                      <h4 className="product-price">
                        ${newArrival.price.toFixed(2)}
                      </h4>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
