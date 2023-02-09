import React, { createContext, useContext } from "react";
import { toast } from "react-hot-toast";
import { print } from "graphql";
import Cookies from "universal-cookie";
import gql from "graphql-tag";
import axios from "axios";
const Context = createContext();

export const UserContext = ({ children }) => {
  const postUser = async (form) => {
    let userConfirmation = false;
    const POST_USER = gql`
      mutation PostUser($input: userInput) {
        postUser(input: $input)
      }
    `;
    await axios
      .post(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
        query: print(POST_USER),
        variables: {
          input: form,
        },
      })
      .then(async (res) => {
        if (!res.data.errors) {
          toast.success("User successfully registered", {
            style: {
              background: "#333",
              color: "#fff",
            },
          });
          const cookies = new Cookies();
          cookies.set("token", res.data.data.postUser, {
            path: "/",
            maxAge: process.env.NEXT_PUBLIC_COOKIE_EXP_SEC,
          });
          userConfirmation = true;
        } else {
          toast.error(res.data.errors[0].message, {
            style: {
              background: "#333",
              color: "#fff",
            },
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return userConfirmation;
  };

  const userAuthentication = async (form) => {
    let userConfirmation = false;
    const AUTHENTICATE_USER = gql`
      query Query($input: userInput) {
        authenticateUser(input: $input)
      }
    `;
    await axios
      .post(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
        query: print(AUTHENTICATE_USER),
        variables: {
          input: form,
        },
      })
      .then(async (res) => {
        if (!res.data.errors) {
          const cookies = new Cookies();
          cookies.set("token", res.data.data.authenticateUser, {
            path: "/",
            maxAge: process.env.NEXT_PUBLIC_COOKIE_EXP_SEC,
          });
          userConfirmation = true;
        } else {
          toast.error(res.data.errors[0].message, {
            style: {
              background: "#333",
              color: "#fff",
            },
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return userConfirmation;
  };

  const logout = () => {
    const cookies = new Cookies();
    cookies.remove("token", { path: "/" });
    window.location.reload();
  };

  return (
    <Context.Provider
      value={{
        postUser,
        userAuthentication,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useUserContext = () => {
  return useContext(Context);
};
