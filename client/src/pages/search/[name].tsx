import React from "react";
import Head from "next/head";
import auth from "../../middleware/auth";
import * as cookie from "cookie";
import { useProductContext } from "@/context/ProductContext";
import { Header } from "@/components/assets/header/Header";
import { Footer } from "@/components/assets/footer/Footer";
import { Items } from "@/components/search/Items";

export default function Search(props: { token: any; search: string }) {
  const { getProductByName, searchProducts } = useProductContext();

  React.useEffect(() => {
    getProductByName(props.search, "desc", null);
  }, []);

  return (
    <>
      <Header token={props.token} />
      <Head>
        <title>Results of {props.search} | GameShop</title>
      </Head>

      {searchProducts && (
        <>
          {searchProducts.length ? (
            <>
              <Items
                products={searchProducts}
                search={props.search}
                getProductByName={getProductByName}
              />
            </>
          ) : (
            <h1 className="text-danger text-center mt-5 mb-5 text-uppercase">
              no search results found
            </h1>
          )}
        </>
      )}
      {!searchProducts && (
        <>
          <div className="text-center loadPage">
            <div
              className="spinner-grow "
              style={{ width: "3rem", height: "3rem" }}
            >
              <span className="visually-hidden ">Loading...</span>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  let token;
  if (typeof context.req.headers.cookie !== "string") {
    token = null;
  } else {
    const parsedCookies = cookie.parse(context.req.headers.cookie);
    token = parsedCookies.token;
  }
  if (!(await auth(token))) {
    token = null;
  }
  return {
    props: {
      search: context.params.name,
      token,
    },
  };
};
