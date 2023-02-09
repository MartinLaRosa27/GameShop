import React, { createContext, useContext } from "react";
import { print } from "graphql";
import gql from "graphql-tag";
import axios from "axios";
const Context = createContext();

export const ProductContext = ({ children }) => {
  const [newArrivals, setNewArrivals] = React.useState(null);

  const getNewArrivals = async () => {
    const GET_NEW_ARRIVALS = gql`
      query GetNewArrivals {
        getNewArrivals {
          stock
          releaseDate
          name
          img
          description
          _id
          price
        }
      }
    `;
    await axios
      .post(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
        query: print(GET_NEW_ARRIVALS),
      })
      .then(async (res) => {
        if (!res.data.errors) {
          for (let i = 0; i < res.data.data.getNewArrivals.length; i++) {
            if (
              new Date(res.data.data.getNewArrivals[i].releaseDate) > new Date()
            ) {
              res.data.data.getNewArrivals[i].preorder = 1;
            }
          }
          setNewArrivals(res.data.data.getNewArrivals);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getByIdId = async (id) => {
    let product = null;
    const GET_BY_ID = gql`
      query GetById($getByIdId: String) {
        getById(id: $getByIdId) {
          _id
          description
          name
          img
          price
          stock
          releaseDate
        }
      }
    `;
    await axios
      .post(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
        query: print(GET_BY_ID),
        variables: {
          getByIdId: id,
        },
      })
      .then(async (res) => {
        if (!res.data.errors) {
          if (new Date(res.data.data.getById.releaseDate) > new Date()) {
            res.data.data.getById.preorder = 1;
            let date = new Date(res.data.data.getById.releaseDate);
            let day = date.getDate();
            let month = date.getMonth();
            month = month + 1;
            let year = date.getFullYear();
            const formatDate = month + "/" + day + "/" + year;
            res.data.data.getById.releaseDate = formatDate;
          }
          product = res.data.data.getById;
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return product;
  };

  const getByCategory = async (categoryId, date, price) => {
    let products = null;
    const GET_BY_CATEGORY = gql`
      query GetByCategory($categoryId: String, $date: String, $price: String) {
        getByCategory(categoryId: $categoryId, date: $date, price: $price) {
          _id
          img
          description
          price
          releaseDate
          stock
          name
        }
      }
    `;
    await axios
      .post(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
        query: print(GET_BY_CATEGORY),
        variables: {
          categoryId,
          date,
          price,
        },
      })
      .then(async (res) => {
        if (!res.data.errors) {
          for (let i = 0; i < res.data.data.getByCategory.length; i++) {
            if (
              new Date(res.data.data.getByCategory[i].releaseDate) > new Date()
            ) {
              res.data.data.getByCategory[i].preorder = 1;
            }
          }
          products = res.data.data.getByCategory;
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return products;
  };

  return (
    <Context.Provider
      value={{
        newArrivals,
        getNewArrivals,
        getByIdId,
        getByCategory,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProductContext = () => {
  return useContext(Context);
};
