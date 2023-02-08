import React from "react";
import Link from "next/link";

export const Items = (props: { products: any; category: string }) => {
  const handleChangeSort = () => {
    console.log("sds");
  };

  return (
    <div id="productCard-items" className="container">
      <section className="section-products">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="header">
              <h2>
                <span>{props.category}</span>
              </h2>
            </div>
          </div>
          <div className="sort pb-3">
            <div className="input-group mb-3">
              <label className="input-group-text">Sort By</label>
              <select
                className="form-select"
                onChange={() => handleChangeSort()}
              >
                <option value="3" selected>
                  Newer
                </option>
                <option value="1">lower price</option>
                <option value="2">higher price</option>
                <option value="4">older</option>
              </select>
            </div>
          </div>
          <div className="row">
            {props.products.map((product: any) => {
              return (
                <Link
                  className="col-md-6 col-lg-4 col-xl-3"
                  key={product._id}
                  href={`/product/${product._id}`}
                >
                  <div id="product-1" className="single-product">
                    <div
                      className="part-1"
                      style={{
                        background: `url(${product.img}) no-repeat center`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className="part-2">
                      <h3 className="product-title">{product.name}</h3>
                      <h4 className="product-price">
                        ${product.price.toFixed(2)}
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
