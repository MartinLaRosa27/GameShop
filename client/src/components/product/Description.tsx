import React from "react";

export const Description = (props: { token: string; product: any }) => {
  const [index, setIndex] = React.useState(0);

  return (
    <div id="product-description">
      <div className="container mt-5 mb-5">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-6 border-end">
              <div className="d-flex flex-column justify-content-center">
                <div className="main_image">
                  <img
                    src={props.product.img[index]}
                    id="main_product_image"
                    width="350"
                  />
                </div>
                <div className="thumbnail_images">
                  <ul id="thumbnail">
                    {props.product.img.map((productImg: string, i: number) => {
                      return (
                        <li key={i}>
                          <img
                            src={productImg}
                            width="70"
                            onClick={() => setIndex(i)}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 right-side">
                <div className="d-flex justify-content-between align-items-center">
                  <h2>{props.product.name}</h2>{" "}
                  <span className="heart">
                    <i className="bx bx-heart"></i>
                  </span>
                </div>
                <div className="mt-2 pr-3 content">
                  <p>{props.product.description}</p>
                </div>
                <h3>${props.product.price.toFixed(2)}</h3>
                <div className="ratings d-flex flex-row align-items-center">
                  <div className="d-flex flex-row">
                    {" "}
                    <i className="bx bxs-star"></i>{" "}
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>{" "}
                    <i className="bx bxs-star"></i>{" "}
                    <i className="bx bx-star"></i>{" "}
                  </div>
                </div>
                <div className="mt-5"></div>
                <div className="buttons d-flex flex-row mt-5 gap-3">
                  <div className="quantity">
                    {props.product.stock ? (
                      <>
                        <small className="text-success">10 in stock</small>
                        <div className="form-group">
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                          >
                            {Array.from(Array(props.product.stock), (e, i) => {
                              return <option key={i}>{i + 1}</option>;
                            })}
                          </select>
                        </div>
                      </>
                    ) : (
                      <small className="text-danger">No Stock</small>
                    )}
                  </div>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
