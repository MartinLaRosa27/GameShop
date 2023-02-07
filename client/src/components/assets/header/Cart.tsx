import React from "react";
import Modal from "react-bootstrap/Modal";
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";

export const Cart = (props: { show: boolean; onHide: any }) => {
  const cartProducts = [
    {
      _id: 1,
      img: "https://i.ibb.co/L8Nrb7p/1.jpg",
      name: "Nike #1",
      price: 300.5,
    },
    {
      _id: 2,
      img: "https://i.ibb.co/L8Nrb7p/1.jpg",
      name: "Nike #2",
      price: 300.5,
    },
  ];

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
        {/* <div className="no-products text-center">
          <span>
            <AiOutlineCloseCircle />
          </span>
          <h5 className="mt-3">There are no products added to the cart</h5>
        </div> */}

        <div className="with-products">
          <ul className="list-group">
            {cartProducts.map((cartProduct) => {
              return (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={cartProduct._id}
                >
                  <span>
                    {cartProduct.name} | <span className="amount">x2</span> |{" "}
                    <span className="price">${cartProduct.price}</span>
                  </span>
                  <span className="badge bg-danger rounded-pill text-uppercase">
                    remove
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="alert alert-secondary" role="alert">
            Total: <strong>$5.20</strong>
          </div>
          <button type="button" className="btn btn-primary mt-3 text-uppercase">
            buy now
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
