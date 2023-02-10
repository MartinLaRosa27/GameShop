import React from "react";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { useStateContext } from "@/context/StateContext";
import { usePurchaseContext } from "@/context/PurchaseContext";
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";

export const Cart = (props: { show: boolean; onHide: any; token: string }) => {
  const { cart, total, removeProductLS } = useStateContext();
  const { postPurchase } = usePurchaseContext();

  const finalizePurchase = () => {
    Swal.fire({
      title:
        '<strong class="text-uppercase">Are you sure you want to finalize the purchase?</strong>',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES!",
      cancelButtonText: "NO!",
    }).then((result) => {
      if (result.isConfirmed) {
        postPurchase(cart, props.token);
      }
    });
  };

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
              onClick={() => {
                finalizePurchase();
              }}
            >
              buy now
            </button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};
