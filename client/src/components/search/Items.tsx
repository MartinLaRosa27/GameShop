import React from "react";
import Link from "next/link";

export const Items = (props: {
  products: any;
  search: string;
  getProductByName: Function;
}) => {
  const handleChangeSort = (e: string) => {
    if (e.substring(0, 1) === "1") {
      props.getProductByName(props.search, e.substring(1, 5), null);
    } else {
      props.getProductByName(props.search, null, e.substring(1, 5));
    }
  };

  return (
    <div id="productCard-items" className="container">
      <section className="section-products">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="header">
              <h2>
                <span>Results of:</span> <strong>{props.search}</strong>
              </h2>
            </div>
          </div>
          <div className="sort pb-3">
            <div className="input-group mb-3">
              <label className="input-group-text">Sort By</label>
              <select
                className="form-select"
                onChange={(e) => handleChangeSort(e.target.value)}
              >
                <option defaultValue={"null"} disabled={true}>
                  Select Sort Option
                </option>
                <option value="1desc">newer</option>
                <option value="1asc">older</option>
                <option value="0asc">lower price</option>
                <option value="0desc">higher price</option>
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
                        background: `url(${product.img[0]}) no-repeat center`,
                        backgroundSize: "190px",
                      }}
                    >
                      {product.preorder && (
                        <div
                          className="alert alert-primary preorder text-center mb-4"
                          role="alert"
                        >
                          pre order
                        </div>
                      )}
                    </div>
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
