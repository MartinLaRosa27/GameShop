import React, { createContext, useContext } from "react";
import { print } from "graphql";
import { toast } from "react-hot-toast";
import gql from "graphql-tag";
import axios from "axios";
const Context = createContext();

export const PurchaseContext = ({ children }) => {
  const postPurchase = async (selectedProducts, token) => {
    const POST_PURCHASE = gql`
      mutation PostPurchase($selectedProducts: Array) {
        postPurchase(selectedProducts: $selectedProducts)
      }
    `;
    await axios
      .post(
        `http://${process.env.NEXT_PUBLIC_BACKEND_URL}`,
        {
          query: print(POST_PURCHASE),
          variables: {
            selectedProducts,
          },
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(async (res) => {
        if (!res.data.errors) {
          toast.success(res.data.data.postPurchase, {
            style: {
              background: "#333",
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              textTransform: "uppercase",
            },
          });
        } else {
          toast.error(res.data.errors[0].message, {
            style: {
              background: "#333",
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              textTransform: "uppercase",
            },
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Context.Provider value={{ postPurchase }}>{children}</Context.Provider>
  );
};

export const usePurchaseContext = () => {
  return useContext(Context);
};
