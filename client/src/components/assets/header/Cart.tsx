import React from "react";
import Modal from "react-bootstrap/Modal";
import { useStateContext } from "@/context/StateContext";
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";

export const Cart = (props: { show: boolean; onHide: any; token: string }) => {
  const { cart, total, removeProductLS } = useStateContext();

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      id="header-cart"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <AiOutlineShoppingCart /> My Purchases List
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!cart ||
          (!props.token && (
            <>
              <div className="no-products text-center pb-4">
                <span>
                  <AiOutlineCloseCircle />
                </span>
                <h5 className="mt-3">
                  There are no products added to the cart
                </h5>
              </div>
            </>
          ))}

        {cart && props.token && (
          <div className="with-products">
            <ul className="list-group">
              {cart &&
                cart.map((cartProduct: any) => {
                  return (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center"
                      key={cartProduct._id}
                    >
                      <span>
                        {cartProduct.name}{" "}
                        <span className="amount">
                          <i>(x{cartProduct.quantity})</i>
                        </span>{" "}
                        | <span className="price">${cartProduct.price}</span>{" "}
                        c/u
                      </span>
                      <span
                        className="badge bg-danger rounded-pill text-uppercase"
                        onClick={() =>
                          removeProductLS(cartProduct, cartProduct.quantity)
                        }
                      >
                        remove
                      </span>
                    </li>
                  );
                })}
            </ul>
            <div className="alert alert-secondary mt-3" role="alert">
              Total: <strong>${total.toFixed(2)}</strong>
            </div>
            <button
              type="button"
              className="btn btn-primary mt-3 text-uppercase"
              disabled={!props.token}
            >
              buy now
            </button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};
