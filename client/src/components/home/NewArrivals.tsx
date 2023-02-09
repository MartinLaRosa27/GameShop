import React from "react";
import Link from "next/link";
import { useProductContext } from "../../context/ProductContext";

export const NewArrivals = () => {
  const { newArrivals, getNewArrivals } = useProductContext();

  React.useEffect(() => {
    getNewArrivals();
  }, []);

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
            {newArrivals &&
              newArrivals.map((newArrival: any) => {
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
                          background: `url(${newArrival.img[0]}) no-repeat center`,
                          backgroundSize: "190px",
                        }}
                      >
                        {newArrival.preorder && (
                          <div
                            className="alert alert-primary preorder text-center mb-4"
                            role="alert"
                          >
                            pre order
                          </div>
                        )}
                      </div>
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
            {!newArrivals && (
              <div className="text-center">
                <div
                  className="spinner-grow "
                  style={{ width: "3rem", height: "3rem" }}
                >
                  <span className="visually-hidden ">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
