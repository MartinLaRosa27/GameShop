import React, { createContext, useContext } from "react";
import { print } from "graphql";
import gql from "graphql-tag";
import axios from "axios";
const Context = createContext();

export const CategoryContext = ({ children }) => {
  const getCategoryByTitle = async (title) => {
    let category = null;
    const GET_CATEGORY_BY_TITLE = gql`
      query GetCategoryByTitle($title: String) {
        getCategoryByTitle(title: $title) {
          title
          _id
        }
      }
    `;
    await axios
      .post(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
        query: print(GET_CATEGORY_BY_TITLE),
        variables: {
          title,
        },
      })
      .then(async (res) => {
        if (!res.data.errors) {
          category = res.data.data.getCategoryByTitle;
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return category;
  };

  return (
    <Context.Provider value={{ getCategoryByTitle }}>
      {children}
    </Context.Provider>
  );
};

export const useCategoryContext = () => {
  return useContext(Context);
};
