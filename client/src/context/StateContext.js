import React, { createContext, useContext } from "react";
import { toast } from "react-hot-toast";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [quantity, setQuantity] = React.useState(null);
  const [cart, setCart] = React.useState(null);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem("gameshop-cart"))) {
      setQuantity(JSON.parse(localStorage.getItem("gameshop-cart")).length);
      setCart(JSON.parse(localStorage.getItem("gameshop-cart")));
    }
    calculateTotal();
  }, []);

  const saveProductLS = (product, q) => {
    toast.success(`${product.name} (x${q}) added to cart`, {
      style: {
        textAlign: "center",
        background: "#333",
        color: "#fff",
        fontWeight: "bold",
      },
    });
    let storedGameshopCart = JSON.parse(localStorage.getItem("gameshop-cart"));
    if (!storedGameshopCart) {
      product.quantity = q;
      setQuantity(1);
      setCart([product]);
      localStorage.setItem("gameshop-cart", JSON.stringify([product]));
    } else {
      let registeredProduct = false;
      for (let i = 0; i < storedGameshopCart.length; i++) {
        if (storedGameshopCart[i]._id === product._id) {
          storedGameshopCart[i].quantity = q;
          registeredProduct = true;
          break;
        }
      }
      if (!registeredProduct) {
        product.quantity = q;
        storedGameshopCart.push(product);
      }
      setQuantity(storedGameshopCart.length);
      setCart(storedGameshopCart);
      localStorage.setItem("gameshop-cart", JSON.stringify(storedGameshopCart));
    }
    calculateTotal();
  };

  const removeProductLS = (product, q) => {
    toast.error(`${product.name} (x${q}) removing from cart`, {
      style: {
        textAlign: "error",
        background: "#333",
        color: "#fff",
        fontWeight: "bold",
      },
    });

    let auxArray = [];
    let storedGameshopCart = JSON.parse(localStorage.getItem("gameshop-cart"));
    for (let i = 0; i < storedGameshopCart.length; i++) {
      if (storedGameshopCart[i]._id !== product._id) {
        auxArray.push(storedGameshopCart[i]);
      }
    }
    setQuantity(auxArray.length);
    setCart(auxArray);
    localStorage.setItem("gameshop-cart", JSON.stringify(auxArray));
    calculateTotal();
  };

  const calculateTotal = () => {
    let storedGameshopCart = JSON.parse(localStorage.getItem("gameshop-cart"));
    if (storedGameshopCart) {
      let auxTotal = 0;
      for (let i = 0; i < storedGameshopCart.length; i++) {
        auxTotal =
          auxTotal +
          storedGameshopCart[i].price * storedGameshopCart[i].quantity;
      }
      setTotal(auxTotal);
    } else {
      setTotal(0);
    }
  };

  return (
    <Context.Provider
      value={{
        quantity,
        cart,
        total,
        saveProductLS,
        removeProductLS,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => {
  return useContext(Context);
};
