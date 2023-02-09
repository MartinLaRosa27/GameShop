import React from "react";
import { useStateContext } from "@/context/StateContext";

export const Description = (props: { token: string; product: any }) => {
  const { saveProductLS } = useStateContext();
  const [quantity, setQuantity] = React.useState<number>(1);
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
                    style={{ maxWidth: "450px", maxHeight: "370px" }}
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
                  <h6>{props.product.description}</h6>
                  {props.product.preorder && (
                    <p className="text-danger">
                      Pre Order: We will send you an email when the product can
                      be picked up from the branch, or is available for
                      shipping.{" "}
                      <strong>Realese Date: {props.product.releaseDate}</strong>{" "}
                      <i>Subject to change</i>
                    </p>
                  )}
                </div>
                <h3 className="mt-4">${props.product.price.toFixed(2)}</h3>
                <div className="mt-5"></div>
                <div className="buttons d-flex flex-row mt-5 gap-3">
                  <div className="quantity">
                    {props.product.stock ? (
                      <div className="with-stock">
                        <div className="form-group">
                          <small className="text-success">
                            <strong>{props.product.stock}</strong> in stock
                          </small>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            onChange={(e) =>
                              setQuantity(parseInt(e.target.value))
                            }
                          >
                            {Array.from(Array(props.product.stock), (e, i) => {
                              return (
                                <option key={i} value={i + 1}>
                                  {i + 1}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <button
                          className="btn"
                          disabled={!props.token}
                          onClick={() => saveProductLS(props.product, quantity)}
                        >
                          Add To Cart
                        </button>
                      </div>
                    ) : (
                      <small className="text-danger">No Stock</small>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
